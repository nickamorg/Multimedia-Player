playerAPI = {};

playerAPI.playing = document.getElementById("playing");
playerAPI.width = 0;
playerAPI.current = document.getElementById("playing");
playerAPI.row = 0;
playerAPI.playlist = ["Loca", "Alvaro Soler - Sofia", "Ariana Grande - Side To Side", "Baby K - Roma - Bangkok",
"Fly Project - Like A Star", "Shakira - Perro Fiel"];

 playerAPI.playPause = function playPause() {
    if (playerAPI.playing.paused) {
        playerAPI.playing.play();
        $("#controls").find("button").find("em")[2].innerHTML = "&#xf28c;";
        var elem = document.getElementById("myBar");

        var id = setInterval(frame, 10000 * 100 / parseInt(playerAPI.playing.duration));

        function frame() {
            if (playerAPI.width >= 100) {
                clearInterval(id);
            } else if (!playerAPI.playing.paused) {
                playerAPI.width++;
                elem.style.width = playerAPI.width + '%';
            }
        }
    } else {
        playerAPI.playing.pause();
        $("#controls").find("button").find("em")[2].innerHTML = "&#xf01d;";
    }
};

playerAPI.next = function next() {
    playing = document.getElementById("playing");
    isPaused = playerAPI.playing.paused;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.playlist[++playerAPI.row % playerAPI.playlist.length] + ".mp3"
    $("#playing")[0].load();
    if(!isPaused) {
        $("#playing")[0].play();
    }
};

playerAPI.prev = function prev() {
    playing = document.getElementById("playing");
    isPaused = playerAPI.playing.paused;
    if(playerAPI.row === 0) {
        playerAPI.row = playerAPI.playlist.length;
    }

    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.playlist[--playerAPI.row] + ".mp3"
    $("#playing")[0].load();
    if(!isPaused) {
        $("#playing")[0].play();
    }
};

playerAPI.shuffle = function shuffle() {
    for(var i = 0; i < 1 + (playerAPI.playlist.length / 2); i++) {
        do {
            var song1 = Math.floor(Math.random() * playerAPI.playlist.length);
            var song2 = Math.floor(Math.random() * playerAPI.playlist.length);
        } while (song1 !== playerAPI.row && song2 !== playerAPI.row);
        var tmp = playerAPI.playlist[song1];
        playerAPI.playlist[song1] = playerAPI.playlist[song2];
        playerAPI.playlist[song2] = tmp;
    }
};

playerAPI.playing.oncanplay = function() {
    var min = parseInt(playerAPI.playing.duration / 60, 10);
    var sec = parseInt(playerAPI.playing.duration % 60);

    $("#dur").text(min + ":" + sec);
}

playerAPI.playing.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playerAPI.playing.currentTime / 60, 10);
    var sec = parseInt(playerAPI.playing.currentTime % 60);

    $("#curr").text(min + ":" + (sec > 9 ? sec : "0" + sec));
}

/*Song Volume*/
$('.muted').click(function () {
    playerAPI.playing.muted = !playerAPI.playing.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    playerAPI.playing.muted = false;
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
    playerAPI.playing.volume = percentage / 100;

    //change sound icon based on volume
    if (playerAPI.playing.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (playerAPI.playing.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};