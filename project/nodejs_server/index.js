
const WebSocket = require('ws');

const UI_SERVER_WEBSOCKET_PORT = 6556;


//create new websocket Server for UI clients
const wsServer = new WebSocket.Server({ port: UI_SERVER_WEBSOCKET_PORT });

//an array that stores the connected clients
var clients = [];

// Check if is a valid json format or not
function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

wsServer.on('connection', function connection(ws) {
    console.log("perfect");
    //new client connected - add client to list
    clients.push(ws);

    //callback that will be called whenever the client sends a message to the server
    ws.on('message', function incoming(message) {
        console.log(`received message from client: ` + message);
        
        if(isJSON(message)) {
            message = JSON.parse(message);
            if(message["type"] === "add to my songs") {
                var fs = require('fs');
                fs.appendFile("data/mysongs.txt", message["song_id"] + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                }); 
            } else if(message["type"] === "add to playlist") {
                var fs = require('fs');
                fs.appendFile("data/playlists/" + message["playlist"] + ".txt", message["song_id"] + "\r\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                }); 
            } else if(message["type"] === "new playlist") {
                var fs = require('fs');
				fs.closeSync(fs.openSync("data/playlists/" + message["playlist"] + ".txt", 'w'));
                fs.appendFile("data/playlists.txt", message["playlist"] + " - ", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                }); 
            } else  if(message["type"] === "new recent") {
                var fs = require('fs');
                fs.appendFile("data/recently_played.txt", message["song_id"] + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                }); 
			} else  if(message["type"] === "playlist") {
                var fs = require('fs');
                fs.readFile("data/playlists/" + message["title"] + ".txt", function read(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    ws.send("" + data);
                });
			} else if(message["type"] === "remove playlist") {
                var fs = require('fs');
				fs.readFile("data/playlists.txt", 'utf8', function (err,data) {
					if (err) {
						return console.log(err);
					}
					var replace = message["playlist"] + ' - ';
					var re = new RegExp(replace);

					tmp = data.replace(re, "");
					if(data === tmp) {
						var replace = message["playlist"];
						var re = new RegExp(replace);
						tmp = data.replace(re, "");
					}
					data = tmp;
					
					fs.unlinkSync("data/playlists/" + message["playlist"] + ".txt");
					fs.writeFile("data/playlists.txt", data, 'utf8', function (err) {
						if (err) return console.log(err);
					});
				});
            } else if(message["type"] === "remove from playlist") {
                var fs = require('fs');
				fs.readFile("data/playlists/" + message["playlist"] + ".txt", 'utf8', function (err,data) {
					if (err) {
						return console.log(err);
					}
					var replace = message["song_id"] + '\r\n';
					var re = new RegExp(replace);

					tmp = data.replace(re, "");
					if(data === tmp) {
						var replace = message["song_id"];
						var re = new RegExp(replace);
						tmp = data.replace(re, "");
					}
					data = tmp;
					
					console.log(data);
					fs.writeFile("data/playlists/" + message["playlist"] + ".txt", data, 'utf8', function (err) {
						if (err) return console.log(err);
					});
				});
            } else if(message["type"] === "remove from mysongs") {
                var fs = require('fs');
				fs.readFile("data/mysongs.txt", 'utf8', function (err,data) {
					if (err) {
						return console.log(err);
					}
					var replace = message["song_id"] + '\r\n';
					var re = new RegExp(replace);

					tmp = data.replace(re, "");
					if(data === tmp) {
						var replace = message["song_id"];
						var re = new RegExp(replace);
						tmp = data.replace(re, "");
					}
					data = tmp;
					
					console.log(data);
					fs.writeFile("data/mysongs.txt", data, 'utf8', function (err) {
						if (err) return console.log(err);
					});
				});
			}
        } else {
            if(message === "mysongs") {
                var fs = require('fs');
                fs.readFile("data/mysongs.txt", function read(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    ws.send("" + data);
                });
            } else if(message === "playlists") {
                var fs = require('fs');
                fs.readFile("data/playlists.txt", function read(err, data) {
                    if (err) {
                        return console.log(err);
                    }
					
				
					if(data.toString() === "") return;
					data = data.toString().substring(0, data.toString().length - 3).split(" - ");
					length = data.length;
				
					console.log(data);
					
					json_data = `{"crowd":${length},`;
					
					for(i = 0; i < length; i++) {
						data[i] = data[i].replace(/(\r\n|\n|\r)/gm,"");
						var text = fs.readFileSync("data/playlists/" + data[i] + ".txt",'utf8');
						mid_data = "";
						for(j = 0; j < text.toString().split("\r\n").length; j++) {
							if(text.toString().split("\r\n")[j] === "") {
								console.log("OKKK");
								continue;
							}
							mid_data += '"' + text.toString().split("\r\n")[j] + '"';
							if(j < text.toString().split("\r\n").length - 2) mid_data += ",";
						}
						json_data += `"${data[i]}":[${mid_data.replace(/(\r\n|\n|\r)/gm,"")}]`;
						if(i < length - 1) json_data += ",";
					}
					json_data += "}";
					console.log(json_data);
                    ws.send(json_data);
                });
            }
        }

    });

    ws.on('close', function close() {
        clients.splice(clients.indexOf(ws), 1);
    });

});


/* ----------------------------------------------------- */


const webSocketSensorServer = require('./sensorsWebSocketServer');

var sensorsServer = webSocketSensorServer.startServer((channel, message) => {
    console.log(`channel: ${channel} , message: ${JSON.stringify(message)}`);

    //business logic
    //handle events, choose which client to send what

    clients.forEach(client => {
        client.send(JSON.stringify({
            channel: channel,
            message: message,
        }));
    });

});






