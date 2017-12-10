function setHeader() {
    document.write(

    `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a style="padding:0" onclick="toggle_pages('lobby')"><img src="../ressrc/3player.png"/></a></li>
            <li style="float:left"><a onclick="toggle_pages('song_home')">3Player</a></li>
            <li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf190;</em></a></li>
            <li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf18e;</em></a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input type="text" class="form-control" size="50" placeholder="Search for music">
                        <div class="input-group-btn">
                            <button class="btn btn-default" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </li>
            <li><a onclick="toggle_pages('song_explore')">Explore</a></li>
            <li><a href="playlists.html">Playlists</a></li>
            <li><a onclick="toggle_pages('song_mysongs')">My songs</a></li>
        </ul>
    </div>`);
}