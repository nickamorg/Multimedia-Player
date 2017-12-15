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
            goToPage("lobby");
            return;
        }
        goToPage(this.stack[this.counter]);
    }

    setNewLastVisitedPage(page) {
        if(this.stack[this.counter - 1] !== page) {
            this.stack[this.counter++] = page;
        }
    }

}

visitedPagesStack = new VisitedPagesStack();

var interaction = new WebSocket('ws://' + GlobalConfig.ip_address + ':6556');

interaction.onmessage = function (message) {
    json = JSON.parse(message.data);
    console.log(json);
    if(json["category"] === "play") {
        playerAPI.playing.pause();
        document.getElementById("series_video").pause();
        document.getElementById("movies_video").pause();

        $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#movies_play_pause").removeClass("fa-pause-circle-o");
        $("#movies_play_pause").addClass("fa-play-circle-o");
        $("#series_play_pause").removeClass("fa-pause-circle-o");
        $("#series_play_pause").addClass("fa-play-circle-o");

        if(json["device"] === "mobile") {
            show_hide_menu(json["subcat"]);
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
                $("#bottom_menu").hide();
            } else if(json["subcat"] === "songs") {
                play_song(json["id"]);
                display_song_details(json["id"]);
                $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
                $("#curr_play_button").find("em")[0].innerHTML = "&#xf28c;";
                document.getElementById("playing").currentTime = json["currTime"];
                if(json["isPaused"]) {
                    playerAPI.playPause();
                }
                $("#bottom_menu").show();
                toggle_class_in('#expand_player');
            }
        }
    } else if(json["category"] === "search") {
        $("#series_bottom_menu").hide();
        $("#movies_bottom_menu").hide();
        $("#bottom_menu").hide();
        $("#search").focus();
        $( "#search" ).attr("placeholder", "Search for " + json["kind"]);
        $("#to_mobile").click(function() {
            if($("#search").attr("placeholder").split(" ")[2] === "movies") {
                $("#keywords_movies").val($( "#search").val());
            } else if($("#search").attr("placeholder").split(" ")[2] === "series") {
                $("#keywords_series").val($( "#search").val());
            } else if($("#search").attr("placeholder").split(" ")[2] === "songs") {
                $("#keywords").val($( "#search").val());
            }
            $(".to_" + $( "#search" ).attr("placeholder").split(" ")[2] + "_search").click();
        });

        $("#to_tv").click(function() {
            let response = `{ "type": "interaction", "category": "search results", "kind": "` + $( "#search" ).attr("placeholder").split(" ")[2] + `", "message": "${$("#search").val()}"}`;
            interaction.send(response);
        });

        visitedPagesStack.setNewLastVisitedPage("search_inter");
        goToPage('search_inter');
    } else if(json["category"] === "new playlist") {
        $("#series_bottom_menu").hide();
        $("#movies_bottom_menu").hide();
        $("#bottom_menu").hide();
        visitedPagesStack.setNewLastVisitedPage("new_playlist_inter");
        goToPage('new_playlist_inter')
    }
    $('#interaction_modal').css('display', 'none');
};

function open_interaction_modal() {
    if($(".pt-page-current")[0].id.includes("song")) {
        toggle_class_in('#expand_player');
    }

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

    $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
    $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
    $("#movies_play_pause").removeClass("fa-pause-circle-o");
    $("#movies_play_pause").addClass("fa-play-circle-o");
    $("#series_play_pause").removeClass("fa-pause-circle-o");
    $("#series_play_pause").addClass("fa-play-circle-o");

    let json = `{ "type": "interaction", "category": "play", "subcat": "${subcat}", "device": "${device}", "id": "${id}", "currTime": ${currTime}, "isPaused": ${isPaused} }`;
    interaction.send(json);
}

function search_input() {

    let json = `{ "type": "interaction", "category": "search input",  "message":"` + $("#search").val() + '"}';

    interaction.send(json);
}

function show_hide_menu(curr) {
    $("movies_bottom_menu").removeClass("special_menu");
    $("series_bottom_menu").removeClass("special_menu");
    document.getElementById("movies_video").load();
    document.getElementById("series_video").load();
    playerAPI.playing.load();

    if(curr === "songs") {
        $("#movies_bottom_menu").hide();
        $("#series_bottom_menu").hide();
        $("#bottom_menu").show();
    } else if(curr === "movies") {
        $("#movies_bottom_menu").show();
        $("#series_bottom_menu").hide();
        $("#bottom_menu").hide();
    } else if(curr === "series") {
        $("#movies_bottom_menu").hide();
        $("#series_bottom_menu").show();
        $("#bottom_menu").hide();
    }
}

function goToPage(page) {
    $(".pt-page-current").find(".scrollbar").scrollTop(0);

    $(".pt-page").removeClass("pt-page-current");
    $("#" + page).addClass("pt-page-current");
}

function myFunction(text, succeed) {
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    if(!succeed) {
        x.innerHTML = `<i class="fa fa-times" style="padding-right:10px" aria-hidden="true"></i>` + x.innerHTML;
        $("#snackbar").css("background-color", "red");
    } else {
        x.innerHTML = `<i class="fa fa-check" style="padding-right:10px" aria-hidden="true"></i>` + x.innerHTML;
        $("#snackbar").css("background-color", "green");
    }
    setTimeout(function () {
        $("#snackbar").css("color", "white");
        x.className = x.className.replace("show", "");
    }, 3000);
}

function save_new_playlist() {
    if($("#new_playlist_title").val() !== "") {
        add_new_playlist($("#new_playlist_title").val(), true);
        myFunction("New playlist saved");
        $("#new_playlist_title").val("");
    } else {
        myFunction("It seems that you haven't type anything", false);
    }
}

function change_bottom_menu_tab(this_elem) {
    $(this_elem).siblings().removeClass("active-tab");
    $(this_elem).addClass("active-tab");
}