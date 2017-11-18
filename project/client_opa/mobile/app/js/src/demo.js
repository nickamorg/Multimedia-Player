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
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_home');
	});
	
	$('.to_mysongs').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_mysongs');
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		send_mysongs();
	});
	
	$('.to_lobby').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'lobby');
	});
	
	$('.to_song_explore').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_explore');
		playerAPI.explore_genres();
	});
	
	$('.display_song_by_genre').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
		PageTransitions.goToPage(2, 'song_by_genre');
	});

    $('.playlists').click(function () {
        // Tip: try other integers [1-67] at PageTransitions.goToPage function
        // and see different animations on changing pages
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        get_playlists();
        PageTransitions.goToPage(2, 'playlists');
    });

    $('.to_songs_search').click(function () {
        // Tip: try other integers [1-67] at PageTransitions.goToPage function
        // and see different animations on changing pages
        $("#expand_lyrics").removeClass("in");
        $("#expand_player").removeClass("in");
        search_songs();
        PageTransitions.goToPage(2, 'song_search');
    });

  //#endregion
  //---------------------------------------

});