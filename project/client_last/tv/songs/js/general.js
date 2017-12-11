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

        goToPage(this.stack[this.counter]);

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
console.log(json);
    if(json["category"] === "play") {
        playerAPI.playing.pause();
        document.getElementById("series_video").pause();
        document.getElementById("movies_video").pause();

        $(".controls").each( function () {
            var play_pause = $(this);
            play_pause.find("button").find("em")[2].innerHTML = "&#xf01d;";
        });
        $("#movies_play_pause").removeClass("fa-pause-circle-o");
        $("#movies_play_pause").addClass("fa-play-circle-o");
        $("#series_play_pause").removeClass("fa-pause-circle-o");
        $("#series_play_pause").addClass("fa-play-circle-o");

        if(json["device"] === "tv") {
            if(json["subcat"] === "movies") {
                setMoviesPlayer(json["id"]);
                document.getElementById("movies_video").currentTime = json["currTime"];
                if(json["isPaused"]) {
                    playPauseMovie();
                }
            } if(json["subcat"] === "series") {
                setSeriesPlayer(json["id"]);
                document.getElementById("series_video").currentTime = json["currTime"];
                if(json["isPaused"]) {
                    playPauseSerie();
                }
            } else if(json["subcat"] === "songs") {
                play_song(json["id"]);
                display_song_details(json["id"]);
                document.getElementById("playing").currentTime = json["currTime"];
                if(json["isPaused"]) {
                    playerAPI.playPause();
                }
            }
        }
    } else if(json["category"] === "search input") {
        if($(".pt-page-current")[0].id.includes("movie")) {
            $(".keywords_movies").val(json["message"]);
        } else if($(".pt-page-current")[0].id.includes("serie")) {
            $(".keywords_series").val(json["message"]);
        } else if($(".pt-page-current")[0].id.includes("song")) {
            $(".keywords").val(json["message"]);
        }
        console.log("ok");
    } else if(json["category"] === "search results") {
            console.log("hereee");
        if(json["kind"] === "movies") {
            $(".keywords_movies").val(json["message"]);
        } else if(json["kind"] === "series") {
            $(".keywords_series").val(json["message"]);
        } else if(json["kind"] === "songs") {
            $(".keywords").val(json["message"]);
        }
        $(".to_" + json["kind"] + "_search").click();
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
    let currTime = 0;
    let isPaused = true;
    if($(".pt-page-current")[0].id === "movies_player") {
        id = curr_movie_id;
        subcat ="movies";
        currTime = document.getElementById("movies_video").currentTime;
        isPaused = document.getElementById("movies_video").paused;
    } else if($(".pt-page-current")[0].id === "series_player") {
        id = curr_serie_id;
        subcat = "series";
        currTime = document.getElementById("series_video").currentTime;
        isPaused =document.getElementById("series_video").paused;
    } else if($(".pt-page-current")[0].id.includes("song")) {
        id = playerAPI.playlist[playerAPI.row];
        subcat = "songs";
        currTime = document.getElementById("playing").currentTime;
        isPaused = document.getElementById("playing").paused;
    }

    $(".controls").each( function () {
        var play_pause = $(this);
        play_pause.find("button").find("em")[2].innerHTML = "&#xf01d;";
    });
    $("#movies_play_pause").removeClass("fa-pause-circle-o");
    $("#movies_play_pause").addClass("fa-play-circle-o");
    $("#series_play_pause").removeClass("fa-pause-circle-o");
    $("#series_play_pause").addClass("fa-play-circle-o");

    let json = `{ "type": "interaction", "category": "play", "subcat": "${subcat}", "device": "${device}", "id": "${id}", "currTime": ${currTime}, "isPaused": ${isPaused} }`;
    interaction.send(json);
}

function search_inter() {
    let kind = "song";
    if($(".pt-page-current")[0].id.includes("movie")) {
        kind = "movies";
    } else if($(".pt-page-current")[0].id.includes("serie")) {
        kind = "series";
    } else if($(".pt-page-current")[0].id.includes("song")) {
        kind = "songs";
    }

    let json = `{ "type": "interaction", "category": "search", "kind": "${kind}"}`;
    interaction.send(json);

    $("#interaction_note_modal").css('display', 'block');

    setTimeout(function() {
        $("#interaction_note_modal").css('display', 'none');
    }, 1500)
}

function goToPage(page) {
    $(".pt-page-current").find(".scrollbar").scrollTop(0);

    $("#movies_header").css("visibility", "");
    $("#movies_footer").css("visibility", "");
    $("#series_header").css("visibility", "");
    $("#series_footer").css("visibility", "");
    setTimeout(function() {
        $("#movies_header").css("visibility", "");
        $("#movies_footer").css("visibility", "");
        $("#series_header").css("visibility", "");
        $("#series_footer").css("visibility", "");
    }, 500);
    $(".pt-page").removeClass("pt-page-current");
    $("#" + page).addClass("pt-page-current");
}