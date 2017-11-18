playerAPI = {};

playerAPI.playing = document.getElementById("playing");
playerAPI.width = 0;
playerAPI.current = document.getElementById("playing");
playerAPI.row = 0;
playerAPI.muted = false;
playerAPI.stored_volume = 50;
playerAPI.tmpPlaylsit = {};
playerAPI.repeat_flag = false;
playerAPI.id_interval = -1;
playerAPI.mysongs = [];
playerAPI.songs = {
        "crowd": 6,
        "id0": {
            "file": "Shakira - Perro Fiel.mp3",
            "title": "Perro Fiel",
            "artist": "Shakira",
            "album": "Single",
            "release": "15 September 2017",
            "duration": "3:16",
            "genre": ["Latin pop", "reggaeton"],
            "img": "perro_fiel.png",

            "lyrics": "Aquí estás\n" +
            "Ya no puedes detenerte\n" +
            "¿Dónde vas?\n" +
            "Si estoy loco por tenerte\n" +
            "Cómo lo iba a saber\n" +
            "Que te vería otra vez\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Te hablo en serio mai, no estoy jugando\n" +
            "Tanto tiempo pasa y nada\n" +
            "Estas ganas no me aguanto\n" +
            "Y aunque tú me esquives, yo te sigo deseando\n" +
            "Dicen que tú eres peligrosa\n" +
            "No le hago caso a esas cosas\n" +
            "Dime qué está pasando\n" +
            "Me tienes como un loco, soy un loco enamorado, eh\n" +
            "Quiero saber cuánto me vas a insistir\n" +
            "Y hasta dónde llegarías por mí\n" +
            "Siento mucho la espera\n" +
            "Pero valdrá la pena cuando te esté besando\n" +
            "De la manera que te mueves así\n" +
            "Yo te lo juro me voy a derretir\n" +
            "Tú sabes que soy buena\n" +
            "Por más que yo te esquive me sigues deseando\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Enloque-que-quecer\n" +
            "Yo no pido nada extraordinario\n" +
            "Solo un hombre de verdad\n" +
            "Que se tire por mí al barro\n" +
            "Que cambie las bombillas o hasta que me lave el carro\n" +
            "Quiero un tipo atento y cariñoso\n" +
            "Pero que no sea muy celoso\n" +
            "Que en la calle sea un príncipe\n" +
            "Pero que en mi cama sea salvaje y peligroso\n" +
            "Puedes pedir lo que quieras de mí\n" +
            "Yo haría lo que fuera para ti\n" +
            "Siento mucho la espera\n" +
            "Pero valdrá la pena cuando te esté besando\n" +
            "Yo estoy seguro que estoy hecho pa' ti\n" +
            "Yo te lo juro no te haré sufrir\n" +
            "Como te dije nena\n" +
            "Por más que tú me esquives, te sigo deseando\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Enloque-que-quecer\n" +
            "Aquí estás\n" +
            "Ya no puedes detenerte\n" +
            "¿Dónde vas? (¡Oh!)\n" +
            "Si estoy loco por tenerte"
        },
        "id1": {
            "file": "Fly Project - Like A Star.mp3",
            "title": "Like A Star",
            "artist": "Fly Project",
            "album": "Single",
            "release": "7 November 2005",
            "duration": "4:03",
            "genre": ["Soul", "downtempo"],
            "img": "like a star.jpg",

            "lyrics": "You can say that you love me,\n" +
            "Say that you need me,\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "You told me you want me\n" +
            "You told me you need me\n" +
            "You told me you love me\n" +
            "But I am leaving right now\n" +
            "\n" +
            "Say that you love me\n" +
            "Say that you need me\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]\n" +
            "\n" +
            "You can say that you love me,\n" +
            "Say that you need me,\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "You told me you want me\n" +
            "You told me you need me\n" +
            "You told me you love me\n" +
            "But I am leaving right now\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]"
        },
        "id2": {
            "file": "Ariana Grande - Side To Side.mp3",
            "title": "Side To Side",
            "artist": "Ariana Grande",
            "album": "Single",
            "release": "30 August 2016",
            "duration": "3:46",
            "genre": ["Reggae-pop"],
            "img": "side to side.png",

            "lyrics": "I've been here all night (Ariana)\n" +
            "I've been here all day (Nicki Minaj)\n" +
            "And boy, got me walkin' side to side\n" +
            "(Let them hoes know)\n" +
            "\n" +
            "I'm talkin' to ya\n" +
            "See you standing over there with your body\n" +
            "Feeling like I wanna rock with your body\n" +
            "And we don't gotta think 'bout nothin' ('Bout nothin')\n" +
            "I'm comin' at ya\n" +
            "'Cause I know you got a bad reputation\n" +
            "Doesn't matter, 'cause you give me temptation\n" +
            "And we don't gotta think 'bout nothin' ('Bout nothin')\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give you up\n" +
            "Can't hear them no, 'cause I\n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "Been tryna hide it\n" +
            "Baby what's it gonna hurt if they don't know?\n" +
            "Makin' everybody think that we solo\n" +
            "Just as long as you know you got me (You got me)\n" +
            "And boy I got ya\n" +
            "'Cause tonight I'm making deals with the devil\n" +
            "And I know it's gonna get me in trouble\n" +
            "Just as long as you know you got me\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give you up\n" +
            "Can't hear them no, 'cause \n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "I've been here all night\n" +
            "(Been here all night, baby)\n" +
            "I've been here all day\n" +
            "(Been here all day, baby)\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "This the new style with the fresh type of flow\n" +
            "Wrist icicle, ride dick bicycle\n" +
            "Come true yo, get you this type of blow\n" +
            "If you wanna menage I got a tricycle\n" +
            "\n" +
            "All these bitches, flows is my mini-me\n" +
            "Body smoking, so they call me young Nicki chimney\n" +
            "Rappers in they feelings cause they feelin' me\n" +
            "Uh, I-I give zero fucks and I got zero chill in me\n" +
            "Kissing me, copped the blue box that say Tiffany\n" +
            "Curry with the shot, just tell 'em to call me Stephanie\n" +
            "Gun pop and I make my gum pop\n" +
            "I'm the queen of rap, young Ariana run pop\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give him up\n" +
            "Can't hear them no, 'cause I\n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "I've been here all night\n" +
            "(Been here all night baby)\n" +
            "I've been here all day\n" +
            "(Been here all day baby)\n" +
            "Boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "This the new style with the fresh type of flow\n" +
            "Wrist icicle, ride dick bicycle\n" +
            "Come true yo, get you this type of blow\n" +
            "If you wanna menage I got a tricycle"
        },
        "id3": {
            "file": "Green Day Boulevard Of Broken Dreams.mp3",
            "title": "Boulevard Of Broken Dreams",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "29 November 2004",
            "duration": "4:20",
            "genre": ["Alternative rock"],
            "img": "boulevard of broken dreams.jpg",

            "lyrics": "I walk a lonely road\n" +
            "The only one that I have ever known\n" +
            "Don't know where it goes\n" +
            "But it's only me, and I walk alone\n" +
            "I walk this empty street\n" +
            "On the boulevard of broken dreams\n" +
            "Where the city sleeps\n" +
            "And I'm the only one, and I walk alone\n" +
            "I walk alone, I walk alone\n" +
            "I walk alone and I walk a\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone\n" +
            "Ah ah ah ah ah\n" +
            "Ah ah ah ah ah\n" +
            "I'm walking down the line\n" +
            "That divides me somewhere in my mind\n" +
            "On the border line of the edge\n" +
            "And where I walk alone\n" +
            "Read between the lines\n" +
            "What's fucked up and every thing's all right\n" +
            "Check my vital signs to know I'm still alive\n" +
            "And I walk alone\n" +
            "I walk alone, I walk alone\n" +
            "I walk alone and I walk a\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone\n" +
            "Ah ah ah ah ah\n" +
            "Ah ah ah ah ah\n" +
            "I walk alone, I walk a\n" +
            "I walk this empty street\n" +
            "On the boulevard of broken dreams\n" +
            "Where the city sleeps\n" +
            "And I'm the only one, and I walk alone\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone"
        },
        "id4": {
            "file": "Green Day Holiday.mp3",
            "title": "Holiday",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "14 March 2005",
            "duration": "4:41",
            "genre": ["Punk rock", "pop punk"],
            "img": "holiday.jpg",

            "lyrics": "Say, hey!\n" +
            "\n" +
            "Hear the sound of the falling rain\n" +
            "Coming down like an Armageddon flame (Hey!)\n" +
            "The shame\n" +
            "The ones who died without a name\n" +
            "\n" +
            "Hear the dogs howling out of key\n" +
            "To a hymn called \"Faith and Misery\" (Hey!)\n" +
            "And bleed, the company lost the war today\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "On holiday\n" +
            "\n" +
            "Hear the drum pounding out of time\n" +
            "Another protester has crossed the line (Hey!)\n" +
            "To find, the money's on the other side\n" +
            "\n" +
            "Can I get another Amen? (Amen!)\n" +
            "There's a flag wrapped around a score of men (Hey!)\n" +
            "A gag, a plastic bag on a monument\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "On holiday\n" +
            "\n" +
            "(Hey!)\n" +
            "(Say, hey!)\n" +
            "\n" +
            "\"The representative from California has the floor\"\n" +
            "\n" +
            "Zieg Heil to the president Gasman\n" +
            "Bombs away is your punishment\n" +
            "Pulverize the Eiffel towers\n" +
            "Who criticize your government\n" +
            "Bang bang goes the broken glass and\n" +
            "Kill all the fags that don't agree\n" +
            "Trials by fire, setting fire\n" +
            "Is not a way that's meant for me\n" +
            "Just cause (hey, hey, hey), just cause, because we're outlaws yeah!\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "\n" +
            "This is our lives on holiday"
        },
        "id5": {
            "file": "Green Day - American Idiot.mp3",
            "title": "American Idiot",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "31 August 2004",
            "duration": "2:54",
            "genre": ["Punk rock", "pop punk"],
            "img": "american idiot.jpg",

            "lyrics": "Don't wanna be an American idiot\n" +
            "Don't want a nation under the new media\n" +
            "And can you hear the sound of hysteria?\n" +
            "The subliminal mind-fuck America\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue\n" +
            "Well maybe I'm the faggot America\n" +
            "I'm not a part of a redneck agenda\n" +
            "Now everybody do the propaganda\n" +
            "And sing along to the age of paranoia\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue\n" +
            "Don't wanna be an American idiot\n" +
            "One nation controlled by the media\n" +
            "Information Age of hysteria\n" +
            "It's calling out to idiot America\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue"
        }
    };

playerAPI.init = function init() {
    playerAPI.playlist = [playerAPI.songs.crowd];
    for (i = 0; i < playerAPI.songs.crowd; i++) {
        playerAPI.playlist[i] = playerAPI.songs["id" + i].file;
    }
};

playerAPI.init();

$("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.playlist[0];
$("#playing")[0].load();

playerAPI.playPause = function playPause() {
    if (playerAPI.playing.paused) {
        playerAPI.playing.play();
		$(".controls").each( function () {
			var play_pause = $(this);
			play_pause.find("button").find("em")[2].innerHTML = "&#xf28c;";
		});
        playerAPI.id_interval = setInterval(frame, 10 * parseInt(playerAPI.playing.duration));

        function frame() {
            if (playerAPI.width >= 100) {

                if(playerAPI.playlist.length > playerAPI.row || playerAPI.repeat_flag) {
                    $("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.playlist[++playerAPI.row % playerAPI.playlist.length];

                    $("#playing")[0].load();
                    $("#playing")[0].play();
                    playerAPI.id_interval = setInterval(frame, 10 * parseInt(playerAPI.playing.duration));
                } else {
                    $(".controls").find("button").find("em")[2].innerHTML = "&#xf01d;";
                }
                clearInterval(playerAPI.id_interval);
                playerAPI.width = 0;
				$( ".myBar" ).each( function () {
					var myBar = $(this);
					myBar.css("width", playerAPI.width + '%'
				)});
            } else if (!playerAPI.playing.paused) {
                playerAPI.width++;
				$( ".myBar" ).each( function () {
					var myBar = $(this);
					myBar.css("width", playerAPI.width + '%'
				)});
            }
        }
    } else {
        playerAPI.playing.pause();
		$(".controls").each( function () {
			var play_pause = $(this);
			play_pause.find("button").find("em")[2].innerHTML = "&#xf01d;";
		});
    }
};

playerAPI.next = function next() {
    isPaused = playerAPI.playing.paused;
    playerAPI.row = (playerAPI.row + 1) % playerAPI.playlist.length;
    $("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
    $('#myBar').css('width', "0");
    playerAPI.width = 0;
    $(".title").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + '<button><em style="font-size:24px" class="fa">&#xf067;</em></button>');
    $(".artist").text(playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
    $(".img").attr("src", "ressrc/images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img);

    $("#playing")[0].load();
    if(!isPaused) {
        $("#playing")[0].play();
    }
};

playerAPI.prev = function prev() {
    isPaused = playerAPI.playing.paused;
    playerAPI.row = (playerAPI.row - 1);
    if(playerAPI.row < 0) {
        playerAPI.row = playerAPI.playlist.length;
    }

    $("#playing").find("source")[0].src = "ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
    $('#myBar').css('width', "0");
    playerAPI.width = 0;
    $(".title").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + '<button><em style="font-size:24px" class="fa">&#xf067;</em></button>');
    $(".artist").text(playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
    $(".img").attr("src", "ressrc/images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img);

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

playerAPI.repeat = function repeat() {
    if(playerAPI.repeat_flag) {
        $(".controls").find("button").find("em")[4].style.color = "#9999a5";
    } else {
        $(".controls").find("button").find("em")[4].style.color = "#ffffff";
    }

    playerAPI.repeat_flag = !playerAPI.repeat_flag;
};

playerAPI.explore_genres = function explore_genres() {
    let genres = [];
    let counter = 0;
    for(let i = 0; i < playerAPI.songs.crowd; i++) {
        for(let j = 0; j < playerAPI.songs["id" + i].genre.length; j++) {
            genres[counter++] = playerAPI.songs["id" + i].genre[j];
        }
    }

    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;
    $("#explore").html("<div class='col-xs-12'><h1>Explore music by genre</h1></div>");
    for(let i = 0; i < genres.length; i++) {
        $("#explore").append(
            `<div class="col-xs-3 text-center">
                <button class="display_song_by_genre" onclick="set_songs_by_genre('${genres[i]}')"><p style="background-color: brown; height:20vw; width:20vw; line-height:20vw">${genres[i].toUpperCase()}</p></button>
            </div>`);
    }
};

playerAPI.playing.oncanplay = function() {
    var min = parseInt(playerAPI.playing.duration / 60, 10);
    var sec = parseInt(playerAPI.playing.duration % 60);

    $(".dur").text(min + ":" + sec);
};

playerAPI.playing.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playerAPI.playing.currentTime / 60, 10);
    var sec = parseInt(playerAPI.playing.currentTime % 60);

    $(".curr").text(min + ":" + (sec > 9 ? sec : "0" + sec));
};

/*Song Volume*/
$('.muted').click(function () {
    if(playerAPI.playing.muted) {
        $('.volumeBar').css('width', playerAPI.stored_volume + '%');
    } else {
        $('.volumeBar').css('width', '0');
    }
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
    playerAPI.stored_volume = percentage;
    //change sound icon based on volume
    if (playerAPI.playing.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (playerAPI.playing.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};


//CURRENT TIME BAR
//current time bar event
var currentTimeDrag = false;
$('.myProgress').on('mousedown', function (e) {
    currentTimeDrag = true;
    updateCurrTime(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (currentTimeDrag) {
        currentTimeDrag = false;
        updateCurrTime(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (currentTimeDrag) {
        updateCurrTime(e.pageX);
    }
});

var updateCurrTime = function (x, currTime) {
    var progress = $('.myProgress');
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
    var elem = document.getElementById("myBar");
	$( ".myBar" ).each( function () {
		var myBar = $(this);
		myBar.css("width", percentage + '%'
	)});
    playerAPI.playing.currentTime = playerAPI.playing.duration * percentage / 100;
    playerAPI.width = percentage;
};

