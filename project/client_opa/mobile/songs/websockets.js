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
            var albums = [];
            playerAPI.tmpPlaylist = [songs.length];
            $("#mysongs_content").html("");
            for(var i = 0; i < songs.length; i++) {
                song = playerAPI.songs["id" + parseInt(songs[i].substring(2))];
                playerAPI.mysongs[i] = "id" + parseInt(songs[i].substring(2));
                playerAPI.tmpPlaylist[i] = song.file;
                artists[i] = song.artist;
                for(var j = 0; j < song.genre.length; j++) {
                    genres[genres_counter++] = song.genre[j];
                }
                
                dates[i] = parseInt(song.release.split(" ")[2]);
                albums[i] = song.album;
                $("#mysongs_content").append(
                    `<div class="col-xs-12" style="border-bottom:1px solid #50505A">
                        <div class="col-xs-2" style="height:100px; line-height:100px;">
                            <img id="img" style="width:80px" src="ressrc/images/${song.img}">
                        </div>
                        <div class="col-xs-8">
                            <button onclick="display_song_details('id' + ${parseInt(songs[i].substring(2))})" style="text-align:left;">
                                <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.title}</p>
                                <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.artist}<p>
                            </button>
                        </div>
                        <div class="col-xs-1" style="height:100px; line-height:100px;">
                            <button onclick="play_mysong(${i})"><em class="fa" style="font-size:40px">&#xf01d;</em></button>
                        </div>
                        <div class="col-xs-1" style="height:100px; line-height:100px;">
                            <button style="float:right"><em class="fa fa-ellipsis-v" style="font-size:40px"></em></button>
                        </div>
                        </div>
                    <div class="clearfix"></div> `);
            }

            // Filter duplicates
            tmp = genres.filter(function(item, pos) {
                return genres.indexOf(item) == pos;
            });
            genres = tmp;

            for(i = 0; i < genres.length; i++) {
                $("#genres_content").append('<input onchange="apply_filters_mysong()" type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
            }
            tmp = artists.filter(function(item, pos) {
                return artists.indexOf(item) == pos;
            });
            artists = tmp;
            for(i = 0; i < artists.length; i++) {
                $("#artists_content").append('<input onchange="apply_filters_mysong()" type="checkbox" name="artist" value="' + artists[i] + '">' + artists[i] + '<br>');
            }
            tmp = dates.filter(function(item, pos) {
                return dates.indexOf(item) == pos;
            });
            dates = tmp;
            dates = dates.sort(function (a, b) {  return b - a;  });
            tmp = albums.filter(function(item, pos) {
                return albums.indexOf(item) == pos;
            });
            albums = tmp;
            for(i = 0; i < albums.length; i++) {
                $("#albums_content").append('<input onchange="apply_filters_mysong()" type="checkbox" name="album" value="' + albums[i] + '">' + albums[i] + '<br>');
            }
            $("#from").append('<option value=\"' + "none" + '\"></option>');
            $("#to").append('<option value=\"' + "none" + '\"></option>');
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
    $("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.playlist[curr_song];
    $("#playing")[0].load();
    $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
    $("#title_artist").html(playerAPI.songs["id" + curr_song].title + " - " + playerAPI.songs["id" + curr_song].artist);
    $("#expand_player").find("div").find("img")[0].src = "ressrc/images/" + playerAPI.songs["id" + curr_song].img;
    $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs["id" + curr_song].title;
    $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs["id" + curr_song].artist;
    $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs["id" + curr_song].genre;
    $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs["id" + curr_song].album;
    $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs["id" + curr_song].release;
    $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs["id" + curr_song].duration;
    $("#expand_lyrics").html("<pre>" + playerAPI.songs["id" + curr_song].lyrics + "</pre>");
    playerAPI.currentID = playerAPI.mysongs[curr_song];
    $("#playing")[0].play();
}

function apply_filters_mysong() {
    let genres = [];
    let artists = [];
    let albums = [];
    let counter = 0;

    for(i = 0; i < $("#genres_content").find("input").length; i++) {
        if($("#genres_content").find("input")[i].checked) {
            genres[counter++] = $("#genres_content").find("input")[i].value;
        }
    }

    counter = 0;
    for(let i = 0; i < $("#artists_content").find("input").length; i++) {
        if($("#artists_content").find("input")[i].checked) {
            artists[counter++] = $("#artists_content").find("input")[i].value;
        }
    }

    counter = 0;
    for(let i = 0; i < $("#albums_content").find("input").length; i++) {
        if($("#albums_content").find("input")[i].checked) {
            albums[counter++] = $("#albums_content").find("input")[i].value;
        }
    }

    let from = $( "#from option:selected" ).text();
    if(from === "") {
        from = 0;
    }
    let to = $( "#to option:selected" ).text();
    if(to === "") {
        to = (new Date).getFullYear();
    }

    let tmp_mysongs = playerAPI.mysongs.slice();
    let check = [];

    for(let i = 0; i < tmp_mysongs.length; i++) {
        check[i] = true;
    }

    if(genres.length > 0) {
        for(let i = 0; i < tmp_mysongs.length; i++) {
            let flag = false;
            for(let j = 0; j < genres.length; j++) {
                for(let k = 0; k < playerAPI.songs[tmp_mysongs[i]].genre.length; k++) {
                    if(playerAPI.songs[tmp_mysongs[i]].genre[k] === genres[j]) {
                        flag = true;
                        break;
                    }
                }
            }
            check[i] = flag;
        }
    }

    if(artists.length > 0) {
        for(let i = 0; i < tmp_mysongs.length; i++) {
            let flag = false;
            for(let j = 0; j < artists.length; j++) {
                if(playerAPI.songs[tmp_mysongs[i]].artist === artists[j] && check[i]) {
                    flag = true;
                    break;
                }
            }
            check[i] = flag;
        }
    }

    for(let i = 0; i < tmp_mysongs.length; i++) {
        if(parseInt(playerAPI.songs[tmp_mysongs[i]].release.split(" ")[2]) < from ||
           parseInt(playerAPI.songs[tmp_mysongs[i]].release.split(" ")[2]) > to) {
            check[i] = false;
        }
    }

    if(albums.length > 0) {
        for(let i = 0; i < tmp_mysongs.length; i++) {
            let flag = false;
            for(let j = 0; j < albums.length; j++) {
                if(playerAPI.songs[tmp_mysongs[i]].album === albums[j] && check[i]) {
                    flag = true;
                    break;
                }
            }
            check[i] = flag;
        }
    }


    $("#mysongs_content").html("");
    for(let i = 0; i < tmp_mysongs.length; i++) {
        if(check[i]) {
            song = playerAPI.songs[tmp_mysongs[i]];
            $("#mysongs_content").append(
                `<div class="col-xs-12" style="height:100px; line-height:100px; border-bottom:1px solid #50505A">
                    <div class="col-xs-2">
                        <img id="img" style="width:80px" src="ressrc/images/${song.img}">
                    </div>
                    <div class="col-xs-8">
                        <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.title}</p>
                        <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.artist}<p>
                    </div>
                    <div class="col-xs-1">
                        <button onclick="play_mysong(${i})"><em class="fa" style="font-size:40px">&#xf01d;</em></button>
                    </div>
                    <div class="col-xs-1">
                        <button style="float:right"><em class="fa fa-ellipsis-v" style="font-size:40px"></em></button>
                    </div>
                    </div>
                <div class="clearfix"></div> `);
        }
    }
}

function play_song(curr_song) {
    // playerAPI.init();
    // playerAPI.row = curr_song;
    $("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.songs[curr_song].file;
    $("#playing")[0].load();
    $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
    $("#title_artist").html(playerAPI.songs[curr_song].title + " - " + playerAPI.songs[curr_song].artist);
    $("#expand_player").find("div").find("img")[0].src = "ressrc/images/" + playerAPI.songs[curr_song].img;
    $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs[curr_song].title;
    $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs[curr_song].artist;
    $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs[curr_song].genre;
    $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs[curr_song].album;
    $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs[curr_song].release;
    $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs[curr_song].duration;
    $("#expand_lyrics").html("<pre>" + playerAPI.songs[curr_song].lyrics + "</pre>");
    playerAPI.currentID = playerAPI.mysongs[curr_song];
    $("#playing")[0].play();
}