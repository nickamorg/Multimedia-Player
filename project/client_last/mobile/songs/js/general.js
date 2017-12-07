function expand_filter(this_elem) {
    $("#" + this_elem).find("em").toggleClass("fa-long-arrow-up fa-long-arrow-down");
}


$( document ).ready(function() {
    html = "";
    for(i = (new Date()).getFullYear(); i >= 1950; i--) {
        html += '<option value=\"' + i + '\">' + i + '</option>';
    }
    document.getElementById("from").innerHTML = html;
    document.getElementById("to").innerHTML = html;
});

class VisitedPagesStack {

    constructor() {
        this.stack = ["lobby"];
        this.counter = 1;
    }

    goToLastVisitedPage() {

        if(this.stack[--this.counter] === "lobby") {
            $("#series_bottom_menu").hide();
            $("#movies_bottom_menu").hide();
            $("#bottom_menu").hide();
            playerAPI.playing.pause();
            this.stack = ["lobby"];
            this.counter = 1;
            PageTransitions.goToPage(2, "lobby");
        }
        PageTransitions.goToPage(2, this.stack[this.counter]);
    }

    setNewLastVisitedPage(page) {
        if(this.stack[this.counter - 1] !== page) {
            this.stack[this.counter++] = page;
        }
    }

}

visitedPagesStack = new VisitedPagesStack();

var interaction = new WebSocket('ws://' + "localhost" + ':6556');

interaction.onmessage = function (message) {
    json = JSON.parse(message.data);
console.log(json);
    if(json["category"] === "play") {
        if(json["device"] === "mobile") {
            if($(".pt-page-current")[0].id === "movies_player") {
                setMoviesPlayer(json["id"]);
            } else if($(".pt-page-current")[0].id === "series_player") {
                setSeriesPlayer(json["id"]);
            } else if($(".pt-page-current")[0].id.includes("song")) {
                play_song(json["id"]);
            }
        } else {
            playerAPI.playing.pause();
            movies_video.pause();
            series_video.pause();
        }
    } else if(json["category"] === "search") {
        console.log("lala");
        PageTransitions.goToPage(1, 'search_inter');
    }
    // play_song("id1");
    $('#interaction_modal').css('display', 'none');
    console.log(JSON.parse(message.data));
};

function open_interaction_modal() {
    $('#interaction_modal').css('display', 'block');
}

function remote_playing(device) {
    let id = 0;
    if($(".pt-page-current")[0].id === "movies_player") {
        id = curr_movie_id;
    } else if($(".pt-page-current")[0].id === "series_player") {
        id = curr_serie_id;
    } else if($(".pt-page-current")[0].id.includes("song")) {
        id = playerAPI.playlist[playerAPI.row];
    }

    let json = `{ "type": "interaction", "category": "play", "device": "${device}", "id":"` + id + '"}';

    interaction.send(json);
}

function search_input() {

    let json = `{ "type": "interaction", "category": "search",  "message":"` + $("#search").val() + '"}';

    interaction.send(json);
}