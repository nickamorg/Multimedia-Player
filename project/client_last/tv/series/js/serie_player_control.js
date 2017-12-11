let series_video = document.getElementById("series_video");
let curr_serie_id;

function setSeriesPlayer(serie_id) {
    curr_serie_id = serie_id;
    goToPage('series_player');
    serie = series[serie_id];
    $("#series_video").find("source")[0].src = "../ressrc/series/" + serie.file;
    $("#serie_player_img").click(function() {
        document.getElementById("series_video").currentTime = 0;
        serie_width = 0;
        document.getElementById("series_video").pause();
        $('.serie_volume_bar').css('width', '50%');
        display_serie_details(serie_id);
    });

    $("#serie_player_img").find("img").attr("src","../ressrc/series_images/" + serie.img);
    $("#serie_player_title").html(serie.title + '<button onclick="add_to_myseries(\'' + serie_id + '\')"><em style="margin-left: 20px;" class="fa">&#xf067;</em></button>');
    $("#serie_player_year").html(serie.release.split(" ")[2]);
    $("#series_video").attr("poster", "../ressrc/series_images/background/" + serie.img);
    series_video.load();

    setTimeout(function(){
        if(series_video.paused && $(".pt-page-current")[0].id.includes("serie")) {
            series_video.play();
            $("#series_play_pause").addClass("fa-pause-circle-o");
            $("#series_play_pause").removeClass("fa-play-circle-o");
        }
    }, 2500);
}

series_video.addEventListener('click', function(){
    $("#series_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
    if(this.paused) {
        this.play();
    } else {
        this.pause();
    }
},false);

function playPauseSerie() {
    let series_video = document.getElementById("series_video");
    serie_width = 0;
    $("#series_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
    if(series_video.paused) {
        series_video.play();
    } else {
        series_video.pause();
    }
}

series_video.oncanplay = function() {
    var min = parseInt(series_video.duration / 60, 10);
    var sec = parseInt(series_video.duration % 60);

    $(".serie_dur").text(min + ":" + sec);
};

series_counter = 0;
series_video.ontimeupdate = function() {
    var min = parseInt(series_video.currentTime / 60, 10);
    var sec = parseInt(series_video.currentTime % 60);

    $(".serie_curr_dur").text(min + ":" + (sec > 9 ? sec : "0" + sec));

    $(".serie_bar").each( function () {
        percentage = series_video.currentTime / series_video.duration * 100;
        var serie_bar = $(this);
        serie_bar.css("width", percentage + '%'
        )});
    serie_width = percentage;

    series_counter = (series_counter + 1) % 5;
    if(series_counter === 0) {
        $("#series_header").css("visibility", "hidden");
        $("#series_footer").css("visibility", "hidden");
    }
};

$("#series_player").mousemove(function() {
    series_counter = 0;
    $("#series_header").show();
    $("#series_footer").show();
});

series_video.onended = function() {
    $("#series_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
    $(".serie_curr_dur").text("0:00");

    $(".serie_bar").each( function () {
        var serie_bar = $(this);
        serie_bar.css("width", '0')
    });
    serie_width = 0;
    
    $("#series_header").css("visibility", "visible");
    $("#series_footer").css("visibility", "visible");
};

series_video.onpause = function() {
    $("#series_header").css("visibility", "visible");
    $("#series_footer").css("visibility", "visible");
};

let serie_stored_volume = 50;
/*Song Volume*/
$('.serie_muted').click(function () {
    if(series_video.muted) {
        $('.serie_volume_bar').css('width', serie_stored_volume + '%');
    } else {
        $('.serie_volume_bar').css('width', '0');
    }
    series_video.muted = !series_video.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var serie_volume_drag = false;
$('.serie_volume').on('mousedown', function (e) {
    serie_volume_drag = true;
    series_video.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (serie_volume_drag) {
        serie_volume_drag = false;
        update_serie_volume(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (serie_volume_drag) {
        update_serie_volume(e.pageX);
    }
});

var update_serie_volume = function (x, vol) {
    var volume = $('.serie_volume');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.serie_volume_bar').css('width', percentage + '%');
    series_video.volume = percentage / 100;
    serie_stored_volume = percentage;
    //change sound icon based on volume
    if (series_video.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (series_video.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};


//CURRENT TIME BAR
//current time bar event
var serie_current_time_drag = false;
$('.serie_progress').on('mousedown', function (e) {
    serie_current_time_drag = true;
    serie_update_curr_time(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (serie_current_time_drag) {
        serie_current_time_drag = false;
        serie_update_curr_time(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (serie_current_time_drag) {
        serie_update_curr_time(e.pageX);
    }
});

var serie_update_curr_time = function (x, currTime) {
    var progress = $('.serie_progress');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (currTime) {
        percentage = currTime * 100;
    } else {
        var position = x - progress.offset().left;
        percentage = 100 * position / progress.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //change song current time bar
    var elem = document.getElementById("serie_bar");
    $(".serie_bar").each( function () {
        var serie_bar = $(this);
        serie_bar.css("width", percentage + '%'
        )});
    series_video.currentTime = series_video.duration * percentage / 100;
    serie_width = percentage;
};
