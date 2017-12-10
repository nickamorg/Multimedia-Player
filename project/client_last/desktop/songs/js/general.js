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
});

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

var interaction = new WebSocket('ws://' + "localhost" + ':6556');

interaction.onmessage = function (message) {
    json = JSON.parse(message.data);

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

        if(json["device"] === "desktop") {
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
    }
    console.log("cool");

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

function goToPage(page) {
    $(".pt-page").removeClass("pt-page-current");
    $("#" + page).addClass("pt-page-current");
}