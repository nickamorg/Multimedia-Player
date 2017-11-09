/*Song play/pause*/
var playing = document.getElementById("playing");
var width = 0;
function playPause() {
    if (playing.paused) {
        playing.play();
        $("#controls").find("button").find("em")[2].innerHTML = "&#xf28c;";
        var elem = document.getElementById("myBar");

        var id = setInterval(frame, 10000 * 100 / parseInt(playing.duration));

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else if (!playing.paused) {
                width++;
                elem.style.width = width + '%';
            }
        }
    } else {
        playing.pause();
        $("#controls").find("button").find("em")[2].innerHTML = "&#xf01d;";
    }
}


/*Song duration*/
var playing = document.getElementById("playing");

playing.oncanplay = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playing.duration / 60, 10);
    var sec = parseInt(playing.duration % 60);

    $("#dur").text(min + ":" + sec);
}

playing.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playing.currentTime / 60, 10);
    var sec = parseInt(playing.currentTime % 60);

    $("#curr").text(min + ":" + (sec > 9 ? sec : "0" + sec));
}

 /*Song Volume*/
var playing = document.getElementById("playing");


$('.muted').click(function () {
    playing.muted = !playing.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    playing.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
var updateVolume = function (x, vol) {
    var volume = $('.volume');
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
    $('.volumeBar').css('width', percentage + '%');
    playing.volume = percentage / 100;

    //change sound icon based on volume
    if (playing.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (playing.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};