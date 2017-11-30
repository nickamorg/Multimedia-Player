$(document).ready(function () {

    function reset() {
        // document.getElementById("movies_video").currentTime = 0;
        // movie_width = 0;
        // document.getElementById("movies_video").pause();
        // $('.movie_volume_bar').css('width', '50%');
        //
        // document.getElementById("series_video").currentTime = 0;
        // serie_width = 0;
        // document.getElementById("series_video").pause();
        // $('.serie_volume_bar').css('width', '50%');
    }

    $('.to_lobby').click(function () {
        reset();
        visitedPagesStack = new VisitedPagesStack();
        playerAPI.playing.pause();
        PageTransitions.goToPage(1, 'lobby');
    });

    $('#to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        PageTransitions.goToPage(1, 'song_home');
    });

    $('.to_song_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_home");
        PageTransitions.goToPage(1, 'song_home');
    });

    $('.to_mysongs').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_mysongs");
        PageTransitions.goToPage(1, 'song_mysongs');
        $(".container").addClass("clickableElement");
        $(".container").removeClass("container");
        send_mysongs();
    });
expand_filter()
    $('.display_song_by_genre').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_by_genre");
        PageTransitions.goToPage(1, 'song_by_genre');
    });

    $('.playlists').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_playlists");
        PageTransitions.goToPage(1, 'song_playlists');
        get_playlists();
    });

    $('#to_tv_series_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_home");
        PageTransitions.goToPage(1, 'series_home');
    });

    $('.to_songs_search').click(function () {
        visitedPagesStack.setNewLastVisitedPage("song_search");
        PageTransitions.goToPage(1, 'song_search');

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
        // set_song_new_releases();
        visitedPagesStack.setNewLastVisitedPage("song_new_releases");
        PageTransitions.goToPage(1, 'song_new_releases');
    });

    $('#song_charts_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_charts");
        PageTransitions.goToPage(1, 'song_charts');
    });

    $('#song_genres_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_genres");
        PageTransitions.goToPage(1, 'song_genres');
    });

    $('#song_recently_played_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("song_recently_played");
        PageTransitions.goToPage(1, 'song_recently_played');
    });


    /* MOVIES */

    $('#to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        PageTransitions.goToPage(1, 'movies_home');
    });

    $('.to_movies_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_home");
        PageTransitions.goToPage(1, 'movies_home');
    });

    $('#movies_news_link').click(function () {
        reset();
        set_movies_news();
        visitedPagesStack.setNewLastVisitedPage("movies_news");
        PageTransitions.goToPage(1, 'movies_news');
    });

    $('#movies_tops_link').click(function () {
        reset();
        set_movies_tops();
        visitedPagesStack.setNewLastVisitedPage("movies_tops");
        PageTransitions.goToPage(1, 'movies_tops');
    });

    $('#movies_genres_link').click(function () {
        reset();
        set_movies_genres();
        visitedPagesStack.setNewLastVisitedPage("home_movies_genres");
        PageTransitions.goToPage(1, 'home_movies_genres');
    });

    $('.to_mymovies').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_mymovies");
        PageTransitions.goToPage(1, 'movies_mymovies');
        send_mymovies();
    });

    $('.to_movies_search').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("movies_search");
        PageTransitions.goToPage(1, 'movies_search');

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
        PageTransitions.goToPage(1, 'movies_recently_watched');
    });


    /* SERIES */

    $('#to_series_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_home");
        PageTransitions.goToPage(1, 'series_home');
    });

    $('.to_series_home').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_home");
        PageTransitions.goToPage(1, 'series_home');
    });

    $('#series_news_link').click(function () {
        reset();
        set_series_news();
        visitedPagesStack.setNewLastVisitedPage("series_news");
        PageTransitions.goToPage(1, 'series_news');
    });

    $('#series_tops_link').click(function () {
        reset();
        set_series_tops();
        visitedPagesStack.setNewLastVisitedPage("series_tops");
        PageTransitions.goToPage(1, 'series_tops');
    });

    $('#series_genres_link').click(function () {
        reset();
        set_series_genres();
        visitedPagesStack.setNewLastVisitedPage("home_series_genres");
        PageTransitions.goToPage(1, 'home_series_genres');
    });

    $('.to_myseries').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_myseries");
        PageTransitions.goToPage(1, 'series_myseries');
        send_myseries();
    });

    $('.to_series_details').click(function () {
        PageTransitions.goToPage(1, 'series_details');
    });

    $('.to_series_search').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_search");
        PageTransitions.goToPage(1, 'series_search');

        $(".series_keywords").each(function () {
            val = this.value;
            if(val !== "") {
                reset();
                $("#series_search").find(".series_keywords")[0].value = val;
            }
        });
    });

    $('.season').click(function() {
        visitedPagesStack.setNewLastVisitedPage("series_episodes");
        PageTransitions.goToPage(22, 'series_episodes');
    });

    $('#series_recently_watched_link').click(function () {
        reset();
        visitedPagesStack.setNewLastVisitedPage("series_recently_watched");
        PageTransitions.goToPage(1, 'series_recently_watched');
    });
});