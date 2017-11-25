let movies_video = document.getElementById("movies_video");

function setMoviesPlayer(movie_id) {
    PageTransitions.goToPage(2, 'movies_player');
    movie = movies[movie_id];
    $("#movies_video").find("source")[0].src = "../ressrc/movies/" + movie.file;
    $("#movie_player_img").click(function() {
        document.getElementById("movies_video").currentTime = 0;
        movie_width = 0;
        document.getElementById("movies_video").pause();
        $('.movie_volume_bar').css('width', '50%');
        display_movie_details(movie_id);
    });

    $("#movie_player_img").find("img").attr("src","../ressrc/movies_images/" + movie.img);
    $("#movie_player_title").html(movie.title + '<button onclick="add_to_mymovies(\'' + movie_id + '\')"><em class="fa">&#xf067;</em></button>');
    $("#movie_player_year").html(movie.release.split(" ")[2]);
    $("#movies_video").attr("poster", "../ressrc/movies_images/background/" + movie.img);
    movies_video.load();

    setTimeout(function(){
        if(movies_video.paused) {
            movies_video.play();
            $("#movies_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
        }
    }, 2500);

    $("#movies_bottom_menu").addClass("special_menu");
    $("#movies_bottom_menu").removeClass("special_menu_none");
}

movies_video.addEventListener('click', function(){
    $("#movies_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
    if(this.paused) {
        this.play();
    } else {
        this.pause();
    }
},false);

function playPauseMovie() {
    let movies_video = document.getElementById("movies_video");
    movie_width = 0;
    $("#movies_play_pause").toggleClass("fa-pause-circle-o", "fa-play-circle-o");
    if(movies_video.paused) {
        movies_video.play();
    } else {
        movies_video.pause();
    }
}

movies_video.oncanplay = function() {
    var min = parseInt(movies_video.duration / 60, 10);
    var sec = parseInt(movies_video.duration % 60);

    $(".movie_dur").text(min + ":" + sec);
};

movies_video.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(movies_video.currentTime / 60, 10);
    var sec = parseInt(movies_video.currentTime % 60);

    $(".movie_curr_dur").text(min + ":" + (sec > 9 ? sec : "0" + sec));

    $(".movie_bar").each( function () {
        percentage = movies_video.currentTime / movies_video.duration * 100;
        var movie_bar = $(this);
        movie_bar.css("width", percentage + '%'
        )});
    movie_width = percentage;
};

let movie_stored_volume = 50;
/*Song Volume*/
$('.movie_muted').click(function () {
    if(movies_video.muted) {
        $('.movie_volume_bar').css('width', movie_stored_volume + '%');
    } else {
        $('.movie_volume_bar').css('width', '0');
    }
    movies_video.muted = !movies_video.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var movie_volume_drag = false;
$('.movie_volume').on('mousedown', function (e) {
    movie_volume_drag = true;
    movies_video.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (movie_volume_drag) {
        movie_volume_drag = false;
        update_movie_volume(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (movie_volume_drag) {
        update_movie_volume(e.pageX);
    }
});

var update_movie_volume = function (x, vol) {
    var volume = $('.movie_volume');
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
    $('.movie_volume_bar').css('width', percentage + '%');
    movies_video.volume = percentage / 100;
    movie_stored_volume = percentage;
    //change sound icon based on volume
    if (movies_video.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (movies_video.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};


//CURRENT TIME BAR
//current time bar event
var movie_current_time_drag = false;
$('.movie_progress').on('mousedown', function (e) {
    movie_current_time_drag = true;
    movie_update_curr_time(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (movie_current_time_drag) {
        movie_current_time_drag = false;
        movie_update_curr_time(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (movie_current_time_drag) {
        movie_update_curr_time(e.pageX);
    }
});

var movie_update_curr_time = function (x, currTime) {
    var progress = $('.movie_progress');
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
    var elem = document.getElementById("movie_bar");
    $(".movie_bar").each( function () {
        var movie_bar = $(this);
        movie_bar.css("width", percentage + '%'
        )});
    movies_video.currentTime = movies_video.duration * percentage / 100;
    movie_width = percentage;
};
