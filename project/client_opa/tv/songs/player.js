function setPlayer() {
    document.write(

    `<div class="player text-center">
        <div class="col-md-3 hidden-xs hidden-sm" style="padding-right:0px;">
            <div class="col-xs-3" style="padding:10px 0px 10px 0px;">
                <img class="img" style="width:80px" src="ressrc/icon.png">
            </div>
            <div class="col-xs-9 text-left" style="margin-top: 20px;">
                <p class="title">Read All About It <button><em style="font-size:16px" class="fa">&#xf067;</em></button></p>
                <p class="artist">Emeli Sandé</p>
            </div>
        </div>
    
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6" style="padding:0">
            <div class="controls">
                <button class="clickableElement" onclick="playerAPI.shuffle()"><em style="font-size:24px" class="fa">&#xf074;</em></button>
                <button class="clickableElement" onClick="playerAPI.prev()"><em style="font-size:24px" class="fa">&#xf048;</em></button>
                <button class="clickableElement" onclick="playerAPI.playPause()"><em style="font-size:35px" class="fa">&#xf01d;</em></button>
                <button class="clickableElement" onClick="playerAPI.next()"><em style="font-size:24px" class="fa">&#xf051;</em></button>
                <button class="clickableElement" onClick="playerAPI.repeat()"><em style="font-size:24px; color:#9999a5" class="fa">&#xf01e;</em></button>
            </div>
        
            <div>
            <div class="curr" style="display:inline-block">0:00</div>
            <div style="display:inline-block" class="myProgress">
                <div class="myBar"></div>
            
                </div>
                <div class="dur" style="display:inline-block">4:37</div>
            </div>
        </div>
        
        <div class="col-xs-3 col-sm-2 col-lg-3" style="padding-top:30px">
            <button class="clickableElement"><em style="font-size:24px" class="fa">&#xf0ca;</em></button>
            <button class="expand clickableElement"><em style="font-size:24px" class="fa">&#xf065;</em></button>
            <button class="clickableElement muted"><em style="font-size:24px" class="fa">&#xf027;</em></button>
            <div style="margin-bottom:4px" class="volume">	<span class="volumeBar"></span></div>
        </div>
    
    </div>`);
}

function set_songs_by_genre(genre) {
    PageTransitions.goToPage(2, 'song_by_genre');
    $("#display_by_genre").find("tbody").html("");
    $("#song_by_genre").find("h1")[0].innerHTML = "Songs - " + genre.charAt(0).toUpperCase() + genre.slice(1);

    for(let i = 0; i < playerAPI.songs.crowd; i++) {
        song = playerAPI.songs["id" + i];
        for(let j = 0; j < song.genre.length; j++) {
            if(song.genre[j] === genre) {
                $("#display_by_genre").find("tbody").append(
                    `<tr>
                        <td><img id="img" style="width:80px" src="ressrc/images/${song.img}"></td>
						<td><button class="clickableElement" onclick='play_song("${'id' + i}")'><em class="fa">&#xf01d;</em></button></td>
						<td><button class="clickableElement" onclick="open_playlists_modal('${"id" + i}')"><em class="fa">&#xf067;</em></button></td>
						<td><button class="clickableElement" onclick="display_song_details('${"id" + i}')">${song.title}</button></td>
						<td>${song.artist}</td>
						<td>${song.album}</td>
						<td>${song.release}</td>
						<td>${song.duration}</td>
					</tr>`);
                break;
            }
        }
    }
}

function display_song_details(song_id) {
    song = playerAPI.songs[song_id];
    PageTransitions.goToPage(2, 'song_details');
    $("#lyrics").html("<h1>LYRICS</h1>");
    $("#lyrics").append("<pre>" + song.lyrics + "</pre>");
    $("#song_title").html(song.title);

    $("#details").html(
        `<img class="img-responsive" style="border-radius: 38px" src="ressrc/images/${song.img}"/>
        <button onclick="play_song('${song_id}')" class="clickableElement"><em style="font-size:50px" class="fa">&#xf01d;</em></button>
        <button onclick="open_playlists_modal('${song_id}')" class="clickableElement"><em style="font-size:50px" class="fa">&#xf067;</em></button>
        
        <div class="clearfix"></div>
        
        <div class="col-xs-3 text-left">
            <p>Title</p>
            <p>Artist</p>
            <p>Album</p>
            <p>Genre</p>
            <p>Release</p>
            <p>Duration</p>
        </div>
        <div id="details" class="col-xs-9 text-left">
            <p>${song.title}</p>
            <p>${song.artist}</p>
            <p>${song.album}</p>
            <p>${song.genre}</p>
            <p>${song.release}</p>
            <p>${song.duration}</p>
        </div>`);
}