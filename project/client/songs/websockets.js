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

            var artists = [];
            var genres = [];
            var genres_counter = 0;
            var dates = [];
            playerAPI.tmpPlaylist = [songs.length];
            for(var i = 0; i < songs.length; i++) {
                song = playerAPI.songs["id" + parseInt(songs[i].substring(2))];
                playerAPI.tmpPlaylist[i] = song.file;
                artists[i] = song.artist;
                for(var j = 0; j < song.genre.length; j++) {
                    genres[genres_counter++] = song.genre[j];
                }
                dates[i] = parseInt(song.release.split(" ")[2]);

                //$(".table").find("tbody").append(playerAPI.songs[song])
                $(".table").find("tbody").append(
                    `<tr>
                            <td><button onclick="play_mysong(${i})"><em class="fa">&#xf01d;</em></button></td>
                            <td><button><em class="fa">&#xf067;</em></button></td>
                            <td><button><em class="fa">&#xf068;</em></button></td>
                            <td><button>${song.title}</button></td>
                            <td>${song.artist}</td>
                            <td>${song.album}</td>
                            <td>${song.release}</td>
                            <td>${song.duration}</td>
                        </tr>`);
            }

            // Filter duplicates
            tmp = genres.filter(function(item, pos) {
                return genres.indexOf(item) == pos;
            });
            genres = tmp;

            for(i = 0; i < genres.length; i++) {
                $("#genres_content").append('<input type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
            }
            tmp = artists.filter(function(item, pos) {
                return artists.indexOf(item) == pos;
            });
            artists = tmp;
            for(i = 0; i < artists.length; i++) {
                $("#artists_content").append('<input type="checkbox" name="artist" value="' + artists[i] + '">' + artists[i] + '<br>');
            }
            tmp = dates.filter(function(item, pos) {
                return dates.indexOf(item) == pos;
            });
            dates = tmp;
            dates = dates.sort(function (a, b) {  return b - a;  });
            for(i = 0; i < dates.length; i++) {
                $("#from").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
                $("#to").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
            }
        };
    };
}

function play_mysong(curr_song) {
    playerAPI.playlist = playerAPI.tmpPlaylist;
    playerAPI.row = curr_song;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.playlist[curr_song];
    $("#playing")[0].load();
    $("#controls").find("button").find("em")[2].innerHTML = "&#xf28c;";
    $("#playing")[0].play();
    $("#title").html(playerAPI.songs["id" + curr_song].title + '<button><em style="font-size:24px" class="fa">&#xf067;</em></button>');
    $("#artist").text(playerAPI.songs["id" + curr_song].artist);
    $("#img").attr("src", "../ressrc/images/" + playerAPI.songs["id" + curr_song].img);
}