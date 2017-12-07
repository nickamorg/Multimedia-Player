function setMoviesHeader(active) {
    document.write(

        `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a onclick="visitedPagesStack.goToLastVisitedPage()" style="padding-right:0"><em class="fa fa-arrow-left" aria-hidden="true" style="padding-top:9px;"></em></a></li>
            <li style="float:left"><a class="to_lobby">3Player</a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input onclick="search_inter()" style="padding-top:21px; padding-bottom:21px" type="text" class="keywords_movies form-control" size="50" placeholder="Search for movies">
                        <div class="to_movies_search input-group-btn clickableElement">
                            <a class="btn btn-default" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </li>
            <li><a class="to_mymovies clickableElement ${(active === 'mymovies')?'active-tab':''}">My movies</a></li>
            <li><a class="to_movies_home clickableElement ${(active === 'explore')?'active-tab':''}">Explore</a></li>
        </ul>
    </div>`);
}