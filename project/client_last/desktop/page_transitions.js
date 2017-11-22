$(document).ready(function () {

	function reset_search_bar() {
        $(".keywords").each(function () {
            this.value = "";
        });
	}

    $('.to_lobby').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("lobby");
        playerAPI.playing.pause();
        PageTransitions.goToPage(2, 'lobby');
    });

	$('#to_song_home, .to_song_home').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_home");
		PageTransitions.goToPage(2, 'song_home');
	});
	
	$('.to_mysongs').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_mysongs");
		PageTransitions.goToPage(2, 'song_mysongs');
		send_mysongs();
	});

	$('.display_song_by_genre').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_by_genre");
		PageTransitions.goToPage(2, 'song_by_genre');
	});

	$('.playlists').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("playlists");
        PageTransitions.goToPage(2, 'playlists');
        get_playlists();
	});

	$('.to_songs_search').click(function () {
        visitedPagesStack.setNewLastVisitedPage("song_search");
        PageTransitions.goToPage(2, 'song_search');

        $(".keywords").each(function () {
        	val = this.value;
            if(val !== "") {
                reset_search_bar();
                $("#song_search").find(".keywords")[0].value = val;
			}
        });
	});

	$('#song_new_releases_link').click(function () {
        reset_search_bar();
        set_song_new_releases();
        visitedPagesStack.setNewLastVisitedPage("song_new_releases");
        PageTransitions.goToPage(2, 'song_new_releases');
	});

    $('#song_charts_link').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_charts");
        PageTransitions.goToPage(2, 'song_charts');
    });

    $('#song_genres_link').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_genres");
        PageTransitions.goToPage(2, 'song_genres');
    });

    $('#song_recently_played_link').click(function () {
        reset_search_bar();
        visitedPagesStack.setNewLastVisitedPage("song_recently_played");
        PageTransitions.goToPage(2, 'song_recently_played');
    });

  //#endregion
  //---------------------------------------

});