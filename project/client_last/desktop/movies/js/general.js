function expand_filter(this_elem) {
    $("#" + this_elem).find("em").toggleClass("fa-angle-right  fa-angle-down");
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
        if(this.stack[--this.counter] === "lobby") playerAPI.playing.pause();
        PageTransitions.goToPage(2, this.stack[this.counter]);
    }

    setNewLastVisitedPage(page) {
        this.stack[this.counter++] = page;
    }

}

visitedPagesStack = new VisitedPagesStack();