function add_to_mysongs(title) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "add to my songs", "title":"' + title + '" }'

        ws.send(message);

        ws.onmessage = function(message) {
            alert(message.data);
        };
    };
}

function add_to_playlist(title, playlist) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "add to playlist", "playlist":"' + playlist + '" , "title":"' + title + '" }'

        ws.send(message);
    };
}

function send_mysongs() {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = "mysongs";

        ws.send(message);
        ws.onmessage = function(message) {
            songs = message.data.split("\n");

            playerAPI.tmpPlaylsit = [songs.length];
            for(var i = 0; i < songs.length; i++) {
                playerAPI.tmpPlaylsit[i] = playerAPI.songs["id" + parseInt(songs[i].substring(2))].file;
                //$(".table").find("tbody").append(playerAPI.songs[song])
                $(".table").find("tbody").append(
                    `<tr>
                            <td><button onclick="play_mysong(${i})"><em class="fa">&#xf01d;</em></button></td>
                            <td><button><em class="fa">&#xf067;</em></button></td>
                            <td><button><em class="fa">&#xf068;</em></button></td>
                            <td><button>${playerAPI.songs["id" + parseInt(songs[i].substring(2))].title}</button></td>
                            <td>${playerAPI.songs["id" + parseInt(songs[i].substring(2))].artist}</td>
                            <td>${playerAPI.songs["id" + parseInt(songs[i].substring(2))].album}</td>
                            <td>${playerAPI.songs["id" + parseInt(songs[i].substring(2))].release}</td>
                            <td>${playerAPI.songs["id" + parseInt(songs[i].substring(2))].duration}</td>
                        </tr>`);
            }
            // alert(message.data.split("\n").length);
        };
    };
}

function play_mysong(curr_song) {
    playerAPI.playlist = playerAPI.tmpPlaylsit;
    playerAPI.row = curr_song;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.playlist[curr_song];
    $("#playing")[0].load();
    $("#controls").find("button").find("em")[2].innerHTML = "&#xf28c;";
    $("#playing")[0].play();
    $("#title").html(playerAPI.songs["id" + curr_song].title + '<button><em style="font-size:24px" class="fa">&#xf067;</em></button>');
    $("#artist").text(playerAPI.songs["id" + curr_song].artist);
    $("#img").attr("src", "../ressrc/images/" + playerAPI.songs["id" + curr_song].img);
}