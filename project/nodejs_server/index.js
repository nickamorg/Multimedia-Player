
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
                fs.appendFile("data/" + message["playlist"] + ".txt", message["song_id"] + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
                }); 
            } else if(message["type"] === "new playlist") {
                var fs = require('fs');
                fs.appendFile("data/playlists.txt", message["playlist"] + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");
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
                    ws.send("" + data);
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






