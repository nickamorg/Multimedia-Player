$(document).ready(function () {

    function reset() {

        setTimeout(function(){
            $("movies_bottom_menu").removeClass("special_menu");
        }, 2500);

        $("#movies_bottom_menu").addClass("special_menu_none");

        document.getElementById("movies_video").currentTime = 0;
        movie_width = 0;
        document.getElementById("movies_video").pause();
        $('.movie_volume_bar').css('width', '50%');

    }
	$('#to_song_home, .to_song_home').click(function () {
        reset();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
    	$("#bottom_menu").show();
		PageTransitions.goToPage(2, 'song_home');
	});
	
	$('.to_mysongs').click(function () {
        reset();
		PageTransitions.goToPage(2, 'song_mysongs');
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		send_mysongs();
	});
	
	$('.to_lobby').click(function () {
        reset();
        document.getElementById("playing").pause();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        $("#bottom_menu").hide();
        PageTransitions.goToPage(2, 'lobby');
	});
	
	$('.to_song_explore').click(function () {
        reset();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_explore');
		playerAPI.explore_genres();
	});
	
	$('.display_song_by_genre').click(function () {
        reset();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_by_genre');
	});

    $('.playlists').click(function () {
        reset();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        get_playlists();
        PageTransitions.goToPage(2, 'playlists');
    });

    $('.to_songs_search').click(function () {
        reset();
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        search_songs();
        PageTransitions.goToPage(2, 'song_search');
    });

    $('#song_new_releases_link').click(function () {
        reset();
        set_song_new_releases();
        PageTransitions.goToPage(2, 'song_new_releases');
    });

    $('#song_charts_link').click(function () {
        reset();
        PageTransitions.goToPage(2, 'song_charts');
    });

    $('#song_genres_link').click(function () {
        reset();
        PageTransitions.goToPage(2, 'song_genres');
    });

    $('#to_movies_home, .to_movies_home').click(function () {
        reset();
        $("#movies_bottom_menu").show();
        PageTransitions.goToPage(2, 'movies_home');
    });

    $('#movies_news_link').click(function () {
        reset();
        set_movies_news();
        PageTransitions.goToPage(2, 'movies_news');
    });

    $('#movies_tops_link').click(function () {
        reset();
        set_movies_tops();
        PageTransitions.goToPage(2, 'movies_tops');
    });

    $('#movies_genres_link').click(function () {
        reset();
        set_movies_genres();
        PageTransitions.goToPage(2, 'movies_genres');
    });

    $('.to_mymovies').click(function () {
        reset();
        PageTransitions.goToPage(2, 'movies_mymovies');
        send_mymovies();
    });

    $('#movies_recently_watched_link').click(function () {
        reset();
        PageTransitions.goToPage(2, 'movies_recently_watched');
    });

});