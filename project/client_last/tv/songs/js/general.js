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


var interaction = new WebSocket('ws://' + "localhost" + ':6556');

interaction.onmessage = function (message) {
    json = JSON.parse(message.data);

    if(json["category"] === "play") {
        if(json["device"] === "tv") {
            if(json["subcat"] === "movies") {
                setMoviesPlayer(json["id"]);
            } if(json["subcat"] === "series") {
                setSeriesPlayer(json["id"]);
            } else if(json["subcat"] === "songs") {
                play_song(json["id"]);
                display_song_details(json["id"]);
            }
        } else {
            playerAPI.playing.pause();
            movies_video.pause();
            series_video.pause();
        }
    } else if(json["category"] === "search") {
        if($(".pt-page-current")[0].id.includes("movie")) {
            $(".keywords_movies").val(json["message"]);
        } else if($(".pt-page-current")[0].id.includes("serie")) {
            $(".keywords_series").val(json["message"]);
        } else if($(".pt-page-current")[0].id.includes("song")) {
            $(".keywords").val(json["message"]);
        }
        console.log("ok");
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
    let subcat = "";
    if($(".pt-page-current")[0].id === "movies_player") {
        id = curr_movie_id;
        subcat ="movies";
    } else if($(".pt-page-current")[0].id === "series_player") {
        id = curr_serie_id;
        subcat = "series";
    } else if($(".pt-page-current")[0].id.includes("song")) {
        id = playerAPI.playlist[playerAPI.row];
        subcat = "songs";
    }

    let json = `{ "type": "interaction", "category": "play", "subcat": "${subcat}", "device": "${device}", "id":"` + id + '"}';

    interaction.send(json);
}

function search_inter() {
    let json = '{ "type": "interaction", "category": "search"}';
    interaction.send(json);
};