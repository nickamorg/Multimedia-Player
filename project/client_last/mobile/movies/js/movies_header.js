function setMoviesHeader() {
    document.write(

        `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a onclick="visitedPagesStack.goToLastVisitedPage()" style="padding-right:0"><em class="fa fa-arrow-left" aria-hidden="true" style="padding-top:9px;"></em></a></li>
            <li style="float:left"><a class="to_lobby">3Player</a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input style="padding-top:21px; padding-bottom:21px" type="text" class="keywords form-control" size="50" placeholder="Search for movies">
                        <div class="to_movies_search input-group-btn">
                            <a class="btn btn-default" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </li>
            <li><a class="to_mymovies">My movies</a></li>
            <li><a class="to_movies_home">Explore</a></li>
        </ul>
    </div>`);
}

function setMoviesMenu() {
    document.write(

        `<div id="movies_bottom_menu" class="player text-center">
            <div class="to_lobby" style="width:25%; float:left"><button><em style="font-size:50px" class="fa fa-home"></em><p style="font-size:24px">3Player</p></button></div>
            <div class="to_movies_home" style="width:25%; float:left"><button><em style="font-size:50px" class="fa fa-map-signs"></em><p style="font-size:24px">Explore</p></button></div>
            <div class="to_movies_search" style="width:25%; float:left"><button><em style="font-size:50px" class="fa fa-search"></em><p style="font-size:24px">Search</p></button></div>
            <div class="to_mymovies" style="width:25%; float:left"><button><em style="font-size:50px" class="fa fa-film"></em><p style="font-size:24px">My movies</p></button></div>
        </div>`);
}