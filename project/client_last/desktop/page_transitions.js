$(document).ready(function () {
    function reset() {
        document.getElementById("movies_video").currentTime = 0;
        movie_width = 0;
        document.getElementById("movies_video").pause();
        $('.movie_volume_bar').css('width', '50%');
    }

    $('.to_lobby').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("lobby");
        playerAPI.playing.pause();
        PageTransitions.goToPage(33, 'lobby');
    });

    $('#to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        PageTransitions.goToPage(2, 'song_home');
    });

    $('.to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        PageTransitions.goToPage(2, 'song_home');
    });

	$('.to_mysongs').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_mysongs");
		PageTransitions.goToPage(2, 'song_mysongs');
		send_mysongs();
	});

	$('.display_song_by_genre').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_by_genre");
		PageTransitions.goToPage(2, 'song_by_genre');
	});

	$('.playlists').click(function () {
        reset();
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
                reset();
                $("#song_search").find(".keywords")[0].value = val;
			}
        });
	});

	$('#song_new_releases_link').click(function () {
        reset();
        set_song_new_releases();
        visitedPagesStack.setNewLastVisitedPage("song_new_releases");
        PageTransitions.goToPage(2, 'song_new_releases');
	});

    $('#song_charts_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_charts");
        PageTransitions.goToPage(2, 'song_charts');
    });

    $('#song_genres_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_genres");
        PageTransitions.goToPage(2, 'song_genres');
    });

    $('#song_recently_played_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_recently_played");
        PageTransitions.goToPage(2, 'song_recently_played');
    });


    /* MOVIES */

    $('#to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        PageTransitions.goToPage(32, 'movies_home');
    });

    $('.to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        PageTransitions.goToPage(2, 'movies_home');
    });

    $('#movies_news_link').click(function () {
        reset();
        set_movies_news();
        visitedPagesStack.setNewLastVisitedPage("movies_news");
        PageTransitions.goToPage(2, 'movies_news');
    });

    $('#movies_tops_link').click(function () {
        reset();
        set_movies_tops();
        visitedPagesStack.setNewLastVisitedPage("movies_tops");
        PageTransitions.goToPage(2, 'movies_tops');
    });

    $('#movies_genres_link').click(function () {
        reset();
        set_movies_genres();
        visitedPagesStack.setNewLastVisitedPage("movies_genres");
        PageTransitions.goToPage(2, 'movies_genres');
    });

    $('.to_mymovies').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_mymovies");
        PageTransitions.goToPage(2, 'movies_mymovies');
        send_mymovies();
    });

    $('.to_movies_search').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_search");
        PageTransitions.goToPage(2, 'movies_search');

        $(".movies_keywords").each(function () {
            val = this.value;
            if(val !== "") {
                reset();
                $("#movies_search").find(".movies_keywords")[0].value = val;
            }
        });
    });

    $('#movies_recently_watched_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_recently_watched");
        PageTransitions.goToPage(2, 'movies_recently_watched');
    });
});