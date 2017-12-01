function expand_filter(this_elem) {
    $("#" + this_elem).find("em").toggleClass("fa-long-arrow-up fa-long-arrow-down");
}

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

function max(n1, n2) {
    return (n1>n2)?n1:n2;
}

function min(n1, n2) {
    return (n1<n2)?n1:n2;
}