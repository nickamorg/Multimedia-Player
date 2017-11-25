$(document).ready(function () {

	$('#to_song_home, .to_song_home').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
    	$("#bottom_menu").show();
		PageTransitions.goToPage(2, 'song_home');
	});
	
	$('.to_mysongs').click(function () {
		PageTransitions.goToPage(2, 'song_mysongs');
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		send_mysongs();
	});
	
	$('.to_lobby').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        $("#bottom_menu").hide();
        PageTransitions.goToPage(2, 'lobby');
	});
	
	$('.to_song_explore').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_explore');
		playerAPI.explore_genres();
	});
	
	$('.display_song_by_genre').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_by_genre');
	});

    $('.playlists').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        get_playlists();
        PageTransitions.goToPage(2, 'playlists');
    });

    $('.to_songs_search').click(function () {
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        search_songs();
        PageTransitions.goToPage(2, 'song_search');
    });

    $('#song_new_releases_link').click(function () {
        set_song_new_releases();
        PageTransitions.goToPage(2, 'song_new_releases');
    });

    $('#song_charts_link').click(function () {
        PageTransitions.goToPage(2, 'song_charts');
    });

    $('#song_genres_link').click(function () {
        PageTransitions.goToPage(2, 'song_genres');
    });

    $('#to_movies_home, .to_movies_home').click(function () {
        $("#movies_bottom_menu").show();
        PageTransitions.goToPage(2, 'movies_home');
    });

    $('#movies_news_link').click(function () {
        set_movies_news();
        PageTransitions.goToPage(2, 'movies_news');
    });

    $('#movies_tops_link').click(function () {
        set_movies_tops();
        PageTransitions.goToPage(2, 'movies_tops');
    });

    $('#movies_genres_link').click(function () {
        set_movies_genres();
        PageTransitions.goToPage(2, 'movies_genres');
    });

    $('#movies_recently_watched_link').click(function () {
        PageTransitions.goToPage(2, 'movies_recently_watched');
    });

});