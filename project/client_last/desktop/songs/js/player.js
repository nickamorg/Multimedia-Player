function setPlayer() {
    document.write(

    `<div class="player text-center">
        <div class="col-md-3 hidden-xs hidden-sm" style="padding-right:0px">
            <div class="col-xs-3" style="padding:10px 0px 10px 0px;">
                <img class="img" style="width:80px" src="../ressrc/icon.png">
            </div>
            <div class="col-xs-9 text-left" style="padding-top:15px">
				<p class="title"><button><em class="fa">&#xf067;</em></button></p>
				<p class="artist"></p>
            </div>
        </div>
    
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6" style="padding:0">
            <div class="controls">
                <button onclick="playerAPI.shuffle()"><em class="fa">&#xf074;</em></button>
                <button onClick="playerAPI.prev()"><em class="fa">&#xf048;</em></button>
                <button onclick="playerAPI.playPause()"><em style="font-size:35px !important" class="fa">&#xf01d;</em></button>
                <button onClick="playerAPI.next()"><em class="fa">&#xf051;</em></button>
                <button onClick="playerAPI.repeat()"><em class="fa">&#xf01e;</em></button>
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
            <button class="remote" onclick="open_interaction_modal()"><em class="fa fa-flash"></em></button>
            <button class="expand"><em class="fa">&#xf065;</em></button>
            <button class="muted"><em class="fa">&#xf027;</em></button>
            <div style="margin-bottom:4px" class="volume"><span class="volumeBar"></span></div>
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
                        <td><img id="img" style="width:80px" src="../ressrc/songs_images/${song.img}"></td>
						<td><button onclick='play_song("${'id' + i}")'><em class="fa">&#xf01d;</em></button></td>
						<td><button onclick="open_playlists_modal('${"id" + i}')"><em class="fa">&#xf067;</em></button></td>
						<td><button onclick="display_song_details('${"id" + i}')">${song.title}</button></td>
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
    visitedPagesStack.setNewLastVisitedPage("song_details");
    PageTransitions.goToPage(2, 'song_details');
    $("#lyrics").html("<h1>LYRICS</h1>");
    $("#lyrics").append("<pre class='scrollbar' style='max-height: 550px'>" + song.lyrics + "</pre>");
    $("#song_title").html(song.title);

    $("#details").html(
        `<img class="img-responsive" style="border-radius: 38px" src="../ressrc/songs_images/${song.img}"/>
        <button onclick="play_song('${song_id}')"><em style="font-size:50px" class="fa">&#xf01d;</em></button>
        <button onclick="open_playlists_modal('${song_id}')" ><em style="font-size:50px" class="fa">&#xf067;</em></button>
        
        <div class="clearfix"></div>
        
        <div id="titles" class="col-xs-3 text-left">
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

    $("#related_content").html("");
    counter = 0;
    common = [];
    common_counter = 0;
    for(i = 0; i < playerAPI.songs.crowd; i++) {
        flag = false;
        for(j = 0; j < playerAPI.songs["id" + i].genre.length; j++) {
            for(k = 0; k < song.genre.length; k++) {
                if(!flag && song_id !== ("id" + i) && (contains_word(playerAPI.songs["id" + i].genre[j], song.genre[k]) ||
                    contains_word(song.genre[k], playerAPI.songs["id" + i].genre[j]))) {
                    counter ++;
                    common[common_counter++] = "id" + i;
                    flag = true;
                    $("#related_content").append(
                        `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor: pointer" onclick="display_song_details('${"id" + i}')">
                        <div class="col-xs-4" style="padding-right:0"><img class="img-responsive" src="../ressrc/songs_images/${playerAPI.songs["id" + i].img}"></div>
                        <div class="col-xs-8" style="padding-right: 0"><p>${playerAPI.songs["id" + i].title}</p><small>${playerAPI.songs["id" + i].artist}</small></div>
                    </div>`
                    )
                }
            }
        }
        if(counter === 5) break;
    }

    if(counter < 5) {
        for(i = 0; i < playerAPI.songs.crowd; i++) {
            flag = false;
            if(!(common.indexOf(("id" + i)) > -1) && song_id !== ("id" + i) && counter < 5 && song.release.split(" ")[2] === playerAPI.songs["id" + i].release.split(" ")[2]) {
                $("#related_content").append(
                    `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor: pointer" onclick="display_song_details('${"id" + i}')">
                        <div class="col-xs-4" style="padding-right:0"><img class="img-responsive" src="../ressrc/songs_images/${playerAPI.songs["id" + i].img}"></div>
                        <div class="col-xs-8" style="padding-right: 0"><p>${playerAPI.songs["id" + i].title}</p><small>${playerAPI.songs["id" + i].artist}</small></div>
                    </div>`
                )
                counter++;
            }
            if(counter === 5) break;
        }
    }
}