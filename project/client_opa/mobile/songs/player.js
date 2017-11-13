function setPlayer() {
    document.write(

    `<div class="player text-center">
        <audio id="playing" class="hidden" controls="">
            <source src="ressrc/songs/Shakira - Perro Fiel.mp3" type="audio/mpeg">
                Your browser does not support HTML5 video.
        </audio>
        <div class="col-xs-12" style="background-color:#1D1111">
            <div class="col-xs-2">
                <em style="font-size:50px" class="fa fa-angle-up"></em>
            </div>
            <div class="col-xs-8" style="padding-top:10px; font-size:24px">
                Read All About It - Emeli Sandé
            </div>
            <div class="col-xs-2" style="padding-top:5px">
                <button id="play_button" onclick="playerAPI.playPause()"><em style="font-size:40px" class="fa">&#xf01d;</em></button>
            </div>
        </div>
        <div class="col-xs-12">
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-home"></em><p style="font-size:24px">Home</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-book"></em><p style="font-size:24px">My songs</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-search"></em><p style="font-size:24px">Search</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-list"></em><p style="font-size:24px">playlists</p></button></div>
            <div style="width:20%; float:left"><button><em style="font-size:50px" class="fa fa-music"></em><p style="font-size:24px">Explore</p></button></div>
        </div>

    </div>`);

}