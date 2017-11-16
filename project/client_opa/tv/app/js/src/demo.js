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
	
	$('.to_mysongs').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_mysongs');
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

    $('.display_song_details').click(function () {
		// Tip: try other integers [1-67] at PageTransitions.goToPage function
		// and see different animations on changing pages
		PageTransitions.goToPage(2, 'song_details');
	});

  //#endregion
  //---------------------------------------

});