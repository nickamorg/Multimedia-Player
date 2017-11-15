function setPlayer() {
    document.write(

    `<div class="player text-center">
        <audio id="playing" class="hidden" controls="">
            <source src="ressrc/songs/Shakira - Perro Fiel.mp3" type="audio/mpeg">
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
                    <img style="width:80%" src="ressrc/image.png">
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
                        <p style="white-space:nowrap; overflow-x: hidden;">Hard Rock</p>
                        <p>Led Zeppelin II</p>
                        <p>07 Nov 1969</p>
                        <p>4:50</p>
                    </div>
                    <div class="col-xs-12 style="padding:0">
                    <button style="float:left;" onclick="playerAPI.shuffle()"><em class="fa fa-plus"></em></button>
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
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-home"></em><p style="font-size:24px">Home</p></button></div>
            <div style="width:20%; float:left"><button onclick="toggle_pages('song_mysongs')"><em style="font-size:50px" class="fa fa-book"></em><p style="font-size:24px">My songs</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-search"></em><p style="font-size:24px">Search</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-list"></em><p style="font-size:24px">playlists</p></button></div>
            <div style="width:20%; float:left"><button onclick="toggle_pages('song_explore')"><em style="font-size:50px" class="fa fa-music"></em><p style="font-size:24px">Explore</p></button></div>
        </div>

    </div>`);

}