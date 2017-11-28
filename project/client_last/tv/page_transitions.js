$(document).ready(function () {

  //---------------------------------------
  //#region Demo Button Clicks

	$('.demoBtn').click(function () {
		$(this).toggleClass('checked')
	});

	$('.demoBtn2').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(1, 'page2');
	});

	$('.demoBtn3').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'page1');
	});

	$('#to_song_home, .to_song_home').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_home');
	});

	$('.to_movie_details').click(function () {
		PageTransitions.goToPage(21, 'movie_details');
	});

	$('.to_movies_home').click(function () {
		PageTransitions.goToPage(2, 'movies_home');
	});

	$('.to_mymovies').click(function () {
		PageTransitions.goToPage(21, 'movies_mymovies');
	});

	$('#to_movies_home').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(1, 'movies_home');
	});
	
	$('.to_mysongs').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_mysongs');
        $(".container").addClass("clickableElement");
        $(".container").removeClass("container");
		send_mysongs();
	});
	
	$('.to_lobby').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'lobby');
	});
	
	$('.to_song_explore').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_explore');
		playerAPI.explore_genres();
	});
	
	$('.display_song_by_genre').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_by_genre');
	});

	$('.to_new_releases').click(function () {
		PageTransitions.goToPage(2, 'song_new_releases');
	});

    $('.display_song_details').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_details');
	});

    $('.playlists').click(function () {
        // Tip: try other integers [1-67] at PageTransitions.goToPage function
        // and see different animations on changing pages
        PageTransitions.goToPage(2, 'playlists');
        get_playlists();
    });

    $('#christmas').click(function () {
    	PageTransitions.goToPage(2, 'song_playlist');
    });

    $('#to_tv_series_home').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'tv_series_home');
	});

    $('.to_songs_search').click(function () {
        // Tip: try other integers [1-67] at PageTransitions.goToPage function
        // and see different animations on changing pages
        search_songs($("#keywords").val());
        apply_filters_search();
        PageTransitions.goToPage(2, 'song_search');
    });



  //#endregion
  //---------------------------------------

});