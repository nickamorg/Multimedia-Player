function expand_filter(this_elem) {
    $("#" + this_elem).find("em").toggleClass("fa-angle-right fa-angle-down");
}


$( document ).ready(function() {
    html = "";
    for(i = (new Date()).getFullYear(); i >= 1950; i--) {
        html += '<option value=\"' + i + '\">' + i + '</option>';
    }
    document.getElementById("from").innerHTML = html;
    document.getElementById("to").innerHTML = html;
})

class VisitedPagesStack {

    constructor() {
        this.stack = ["lobby"];
        this.counter = 1;
    }

    goToLastVisitedPage() {
        if(this.stack[--this.counter] === "lobby") {
            playerAPI.playing.pause();
            visitedPagesStack = new VisitedPagesStack();
        }

        document.getElementById("movies_video").currentTime = 0;
        movie_width = 0;
        document.getElementById("movies_video").pause();
        $('.movie_volume_bar').css('width', '50%');

        document.getElementById("series_video").currentTime = 0;
        serie_width = 0;
        document.getElementById("series_video").pause();
        $('.serie_volume_bar').css('width', '50%');
        
        PageTransitions.goToPage(2, this.stack[this.counter]);
    }

    setNewLastVisitedPage(page) {
        if(this.stack[this.counter - 1] !== page) {
            this.stack[this.counter++] = page;
        }
    }

}

visitedPagesStack = new VisitedPagesStack();