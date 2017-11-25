function setPlayer() {
    document.write(

    `<div id="bottom_menu" class="player text-center">
        <audio id="playing" class="hidden" controls="">
            <source src="../ressrc/songs/Shakira - Perro Fiel.mp3" type="audio/mpeg">
                Your browser does not support HTML5 video.
        </audio>
        <div class="col-xs-12" style="background-color:#1D1111">
            <div class="col-xs-2">
                <button onclick="toggle_class_in('#expand_player')"><em style="font-size:50px" class="fa fa-angle-up"></em></button>
            </div>
            <div id="title_artist" class="col-xs-8" style="padding-top:10px; font-size:24px">
                Read All About It - Emeli Sandé
            </div>
            <div class="col-xs-2" style="padding-top:5px">
                <button id="play_button" onclick="playerAPI.playPause()"><em style="font-size:40px" class="fa">&#xf01d;</em></button>
            </div>
            <div class="col-xs-12">
                <div id="expand_player" class="collapse" style="height:1000px">
                    <div class="col-xs-12">
                        <img style="width:80%" src="../ressrc/image.png">
                    </div>
                    <div class="col-xs-5 text-left" style="padding-left:70px">
                        <p>Title</p>
                        <p>Artist</p>
                        <p>Genre</p>
                        <p>Album</p>
                        <p>Release</p>
                        <p>Duration</p>
                    </div>
                    <div class="col-xs-7 text-left" style="padding-right:70px">
                        <p>Whole Lotta Love</p>
                        <p>Led Zeppelin</p>
                        <p>Hard Rock</p>
                        <p>Led Zeppelin II</p>
                        <p>07 Nov 1969</p>
                        <p>4:50</p>
                    </div>
                    <div class="col-xs-12 style="padding:0">
                    <button id="add_from_expand" style="float:left;"><em class="fa fa-plus"></em></button>
                        <div id="controls">
                            <button onclick="playerAPI.shuffle()"><em class="fa">&#xf074;</em></button>
                            <button onClick="playerAPI.prev()"><em class="fa">&#xf048;</em></button>
                            <button onclick="playerAPI.playPause()"><em style="font-size:70px" class="fa">&#xf01d;</em></button>
                            <button onClick="playerAPI.next()"><em class="fa">&#xf051;</em></button>
                            <button onClick="playerAPI.repeat()"><em color:#9999a5" class="fa">&#xf01e;</em></button>
                        </div>
                        <div id="curr" style="display:inline-block">0:00</div>
                        <div style="display:inline-block" id="myProgress">
                            <div id="myBar"></div>
                        </div>
                        <div id="dur" style="display:inline-block">4:37</div>
                    </div>
                    <div class="col-xs-2">
                        <button onclick="toggle_class_in('#expand_lyrics')"><em style="font-size:50px" class="fa fa-angle-up"></em></button>
                    </div>
                    <div class="col-xs-8" style="padding-top:10px; font-size:24px">
                        Lyrics
                    </div>
                    <div class="col-xs-12 scrollbar text-left" style="max-height:1000px">
                        <div id="expand_lyrics" class="collapse"> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="to_lobby" style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-home"></em><p style="font-size:24px">3Player</p></button></div>
            <div class="to_song_home" style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-map-signs"></em><p style="font-size:24px">Explore</p></button></div>
            <div class="to_songs_search" style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-search"></em><p style="font-size:24px">Search</p></button></div>
            <div class="to_mysongs" style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-music"></em><p style="font-size:24px">My songs</p></button></div>
            <div class="playlists" style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-list"></em><p style="font-size:24px">playlists</p></button></div>
        </div>

    </div>`);

}

function set_songs_by_genre(genre) {
    $("#expand_lyrics").removeClass("in");
    $("#expand_player").removeClass("in");

    PageTransitions.goToPage(2, 'song_by_genre');

    $("#display_by_genre").html("");
    $("#song_by_genre").find("h1")[0].innerHTML = "Songs - " + genre.charAt(0).toUpperCase() + genre.slice(1);

    for(let i = 0; i < playerAPI.songs.crowd; i++) {
        song = playerAPI.songs["id" + i];
        for(let j = 0; j < song.genre.length; j++) {
            if(song.genre[j] === genre) {
                $("#display_by_genre").append(
                    `<div class="col-xs-12" style="border-bottom:1px solid #50505A">
                        <div class="col-xs-2" style="height:100px; line-height:100px;">
                            <img id="img" style="width:80px" src="../ressrc/songs_images/${song.img}">
                        </div>
                        <div class="col-xs-8" style="text-align:left">
                            <button onclick="display_song_details('${"id" + i}')" style="text-align:left">
                                <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.title}</p>
                                <p style="white-space:nowrap; overflow-x: hidden; line-height:1.2; font-size:30px">${song.artist}<p>
                            </button>
                        </div>
                        <div class="col-xs-1" style="padding:0; height:100px; line-height:100px;">
                            <button onclick="play_song('${"id" + i}')"><em class="fa" style="font-size:40px">&#xf01d;</em></button>
                        </div>
                        <div class="col-xs-1" style="padding:0; height:100px; line-height:100px;">
                            <button onclick="open_playlists_modal('${"id" + i}');" style="float:right"><em class="fa fa-plus" style="font-size:40px"></em></button>
                        </div>
                        </div>
                    <div class="clearfix"></div> `);
                break;
            }
        }
    }
}

function display_song_details(song_id) {
    PageTransitions.goToPage(2, 'song_details');
    var song = playerAPI.songs[song_id];
    $("#song_details").find(".content").html(
                    `<h1>${song.title}</h1>
                    <div class="col-xs-12">
                        <img style="width:80%" src="../ressrc/songs_images/${song.img}">
                    </div>
                    <div class="col-xs-5 text-left" style="padding-left:70px">
                        <p>Title</p>
                        <p>Artist</p>
                        <p>Genre</p>
                        <p>Album</p>
                        <p>Release</p>
                        <p>Duration</p>
                    </div>
                    <div class="col-xs-7 text-left" style="padding-right:70px">
                        <p>${song.title}</p>
                        <p>${song.artist}</p>
                        <p style="white-space:nowrap; overflow-x: hidden;">${song.genre}</p>
                        <p>${song.album}</p>
                        <p>${song.release}</p>
                        <p>${song.duration}</p>
                    </div>
                    <div class="col-xs-12">
                        <button onclick="play_song('${song_id}')"><em style="font-size:50px" class="fa">&#xf01d;</em></button>
                        <button onclick="open_playlists_modal('${song_id}')"><em style="font-size:50px" class="fa">&#xf067;</em></button>
                    </div>
                    <div class="col-xs-2">
                        <button onclick="toggle_class_in('#expand_song_lyrics')"><em style="font-size:50px" class="fa fa-angle-up"></em></button>
                    </div>
                    <div class="col-xs-8" style="padding-top:10px; font-size:24px">
                        Lyrics
                    </div>
                    <div class="col-xs-12 scrollbar text-left" style="max-height:1000px">
                        <div id="expand_song_lyrics" class="collapse"> 
                        <pre>${song.lyrics}</pre>
                        </div>
                    </div>`);
}