$(document).ready(function () {

    function reset() {
        document.getElementById("movies_video").currentTime = 0;
        movie_width = 0;
        document.getElementById("movies_video").pause();
        $('.movie_volume_bar').css('width', '50%');

        document.getElementById("series_video").currentTime = 0;
        serie_width = 0;
        document.getElementById("series_video").pause();
        $('.serie_volume_bar').css('width', '50%');
    }

    $('.to_lobby').click(function () {
        reset();
        visitedPagesStack = new VisitedPagesStack();
        playerAPI.playing.pause();
        goToPage('lobby');
    });

    $('#to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        goToPage('song_home');
    });

    $('.to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        goToPage('song_home');
    });

	$('.to_mysongs').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_mysongs");
		goToPage('song_mysongs');
		send_mysongs();
	});

	$('.display_song_by_genre').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_by_genre");
		goToPage('song_by_genre');
	});

	$('.playlists').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("playlists");
        goToPage('playlists');
        get_playlists();
	});

	$('.to_songs_search').click(function () {
        visitedPagesStack.setNewLastVisitedPage("song_search");
        goToPage('song_search');

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
        goToPage('song_new_releases');
	});

    $('#song_charts_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_charts");
        goToPage('song_charts');
    });

    $('#song_genres_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_genres");
        goToPage('song_genres');
    });

    $('#song_recently_played_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_recently_played");
        goToPage('song_recently_played');
    });


    /* MOVIES */

    $('#to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        goToPage('movies_home');
    });

    $('.to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        goToPage('movies_home');
    });

    $('#movies_news_link').click(function () {
        reset();
        set_movies_news();
        visitedPagesStack.setNewLastVisitedPage("movies_news");
        goToPage('movies_news');
    });

    $('#movies_tops_link').click(function () {
        reset();
        set_movies_tops();
        visitedPagesStack.setNewLastVisitedPage("movies_tops");
        goToPage('movies_tops');
    });

    $('#movies_genres_link').click(function () {
        reset();
        set_movies_genres();
        visitedPagesStack.setNewLastVisitedPage("movies_genres");
        goToPage('movies_genres');
    });

    $('.to_mymovies').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_mymovies");
        goToPage('movies_mymovies');
        send_mymovies();
    });

    $('.to_movies_search').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_search");
        goToPage('movies_search');

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
        goToPage('movies_recently_watched');
    });


    /* SERIES */

    $('#to_series_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_home");
        goToPage('series_home');
    });

    $('.to_series_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_home");
        goToPage('series_home');
    });

    $('#series_news_link').click(function () {
        reset();
        set_series_news();
        visitedPagesStack.setNewLastVisitedPage("series_news");
        goToPage('series_news');
    });

    $('#series_tops_link').click(function () {
        reset();
        set_series_tops();
        visitedPagesStack.setNewLastVisitedPage("series_tops");
        goToPage('series_tops');
    });

    $('#series_genres_link').click(function () {
        reset();
        set_series_genres();
        visitedPagesStack.setNewLastVisitedPage("series_genres");
        goToPage('series_genres');
    });

    $('.to_myseries').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_myseries");
        goToPage('series_myseries');
        send_myseries();
    });

    $('.to_series_search').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_search");
        goToPage('series_search');

        $(".series_keywords").each(function () {
            val = this.value;
            if(val !== "") {
                reset();
                $("#series_search").find(".series_keywords")[0].value = val;
            }
        });
    });

    $('#series_recently_watched_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_recently_watched");
        goToPage('series_recently_watched');
    });

});