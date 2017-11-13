function setHeader() {
    document.write(

    `<div>
        <ul style="margin: 0; position:relative;">
            <!--<li style="float:left"><a style="padding:0" href="../index.html"><img src="../ressrc/3player.png"/></a></li>-->
            <li style="float:left"><a href="../index.html">3Player</a></li>
            <!--<li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf190;</em></a></li>-->
            <!--<li style="float:left"><a style="padding-left:0;" href="#home"><em style="font-size:24px" class="fa">&#xf18e;</em></a></li>-->
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
            <li><a href="mysongs.html">Recently Played</a></li>
            <li><a href="#playlists">Playlists</a></li>
            <li><a href="mysongs.html">My songs</a></li>
            <li><a href="mysongs.html">Explore</a></li>
        </ul>
    </div>`);
}