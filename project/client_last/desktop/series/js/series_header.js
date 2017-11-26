function setSeriesHeader() {
    document.write(

        `<div>
        <ul style="margin: 0; position:relative">
            <li style="float:left"><a onclick="visitedPagesStack.goToLastVisitedPage()" style="padding-right:0"><em class="fa fa-arrow-left" aria-hidden="true" style="padding-top:9px;"></em></a></li>
            <li style="float:left"><a class="to_lobby">3Player</a></li>
            <li style="float: left">
                <form style="padding-top:10px" class="navbar-form navbar-left">
                    <div class="input-group">
                        <input style="padding-top:21px; padding-bottom:21px" type="text" class="keywords form-control" size="50" placeholder="Search for series">
                        <div class="to_series_search input-group-btn">
                            <a class="btn btn-default" type="submit">
                                <i style="color:#000000" class="glyphicon glyphicon-search"></i>
                            </a>
                        </div>
                    </div>
                </form>
            </li>
            <li><a class="to_myseries">My series</a></li>
            <li><a class="to_series_home">Explore</a></li>
        </ul>
    </div>`);
}