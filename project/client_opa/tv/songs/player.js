function setPlayer() {
    document.write(

    `<div class="player text-center">
        <div class="col-md-3 hidden-xs hidden-sm" style="padding-right:0px">
            <div class="col-xs-3" style="padding:10px 0px 10px 0px;">
                <img class="img" style="width:80px" src="ressrc/icon.png">
            </div>
            <div class="col-xs-9 text-left">
				<p class="title">Read All About It <button class="clickableElement"><em style="font-size:24px" class="fa">&#xf067;</em></button></p>
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
            <button class="clickableElement"><em style="font-size:24px" class="fa">&#xf065;</em></button>
            <button class="clickableElement muted"><em style="font-size:24px" class="fa">&#xf027;</em></button>
            <div style="margin-bottom:4px" class="volume">	<span class="volumeBar"></span></div>
        </div>
    
    </div>`);

}