function setHeader() {
    document.write(

    `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a style="padding:0" class="to_lobby clickableElement"><img src="ressrc/3player.png"/></a></li>
            <li style="float:left"><a class="to_song_home clickableElement">3Player</a></li>
            <li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf190;</em></a></li>
            <li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf18e;</em></a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input id="keywords" style="padding-top:21px; padding-bottom:21px" type="text" class="form-control" size="50" placeholder="Search for music">
                        <div class="to_songs_search input-group-btn" style="background-color:#ffffff">
                            <a style="padding-top:0; padding-bottom:0" class="clickableElement" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </li>
            <li><a class="to_song_explore clickableElement">Explore</a></li>
            <li><a class="playlists clickableElement">Playlists</a></li>
            <li><a class="to_mysongs clickableElement">My songs</a></li>
        </ul>
    </div>`);
}