function setHeader() {
    document.write(

    `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a class="to_song_home">3Player</a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input id="keywords" style="padding-top:21px; padding-bottom:21px" type="text" class="form-control" size="50" placeholder="Search for music">
                        <div class="to_songs_search input-group-btn">
                            <a class="btn btn-default" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </li>
            <li><a class="to_song_explore">Explore</a></li>
            <li><a class="playlists">Playlists</a></li>
            <li><a class="to_mysongs">My songs</a></li>
        </ul>
    </div>`);
}