movies = {
    "crowd": 13,
    "id0": {
        "file": "Spider-Man Homecoming.mp4",
        "title": "Spider-Man: Homecoming",
        "release": "6 July 2017",
        "rate": "7.6",
        "duration": "2:13:00",
        "genre": ["Action", "Adventure", "Science fiction", "Fantasy"],
        "img": "spider-man_homecoming.png"
    },
    "id1": {
        "file": "ANNABELLE CREATION.mp4",
        "title": "Annabelle: Creation",
        "release": "14 September 2017",
        "duration": "109 min",
        "rate": "6.6",
        "genre": ["Horror", "Mystery", "Thriller"],
        "img": "annabelle_creation.jpg",
        "description": "12 years after the tragic death of their little girl, a dollmaker and his wife welcome " +
        "a nun and several girls from a shuttered orphanage into their home, where they soon become the target " +
        "of the dollmaker's possessed creation, Annabelle."
    },
    "id2": {
        "file": "Pirates of the Caribbean Dead Men Tell No Tales.mp4",
        "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
        "release": "25 May 2017",
        "duration": "129 min",
        "rate": "6.7",
        "genre": ["Action", "Adventure", "Fantasy"],
        "img": "dead_men_tell_no_tales.jpg",
        "description": "Captain Jack Sparrow searches for the trident of Poseidon while being " +
        "pursued by an undead sea captain and his crew."
    },
    "id3": {
        "file": "The Hitmans Bodyguard Red Band.mp4",
        "title": "The Hitman's Bodyguard",
        "release": "17 August 2017",
        "duration": "118 min",
        "rate": "7.0",
        "genre": ["Action", "Comedy"],
        "img": "the_hitmans_bodyguard.jpg",
        "description": "The world's top bodyguard gets a new client, a hit man who must testify at the " +
        "International Criminal Court. They must put their differences aside and work together to make it to the trial on time."
    },
    "id4": {
        "file": "Valerian and the City of a Thousand Planets.mp4",
        "title": "Valerian and the City of a Thousand Planets",
        "release": "31 August 2017",
        "duration": "137 min",
        "rate": "6.6",
        "genre": ["Action", "Adventure", "Fantasy"],
        "img": "valerian_and_the_city_of_a_thousand_planets.jpg",
        "description": "A dark force threatens Alpha, a vast metropolis and home to species from a thousand planets. " +
        "Special operatives Valerian and Laureline must race to identify the marauding menace and safeguard not just " +
        "Alpha, but the future of the universe."
    },
    "id5": {
        "file": "WONDER WOMAN – Rise of the Warrior.mp4",
        "title": "Wonder Woman",
        "release": "8 June 2017",
        "duration": "141 min",
        "rate": "7.6",
        "genre": ["Action", "Adventure", "Fantasy"],
        "img": "wonder_woman.jpg",
        "description": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian " +
        "warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
    },
    "id6": {
        "file": "The Dark Knight.mp4",
        "title": "The Dark Knight",
        "release": "17 July 2008",
        "duration": "152 min",
        "rate": "9.0",
        "genre": ["Action", "Crime", "Drama"],
        "img": "the_dark_night.jpg",
        "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc " +
        "and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and " +
        "physical tests of his ability to fight injustice."
    },
    "id7": {
        "file": "Guardians of the Galaxy.mp4",
        "title": "Guardians of the Galaxy",
        "release": "4 September 2014",
        "duration": "121 min",
        "rate": "8.1",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "img": "guardians_of_the_galaxy.jpg",
        "description": "A group of intergalactic criminals are forced to work together to stop a fanatical " +
        "warrior from taking control of the universe."
    },
    "id8": {
        "file": "LOGAN LUCKY.mp4",
        "title": "Logan Lucky",
        "release": "31 August 2017",
        "duration": "118 min",
        "rate": "7.2",
        "genre": ["Comedy", "Crime", "Drama"],
        "img": "logan_lucky.jpg",
        "description": "Two brothers attempt to pull off a heist during a NASCAR race in North Carolina."
    },
    "id9": {
        "file": "Deadpool.mp4",
        "title": "Deadpool",
        "release": "18 February 2016",
        "duration": "98 min",
        "rate": "8.0",
        "genre": ["Action", "Adventure", "Comedy"],
        "img": "deadpool.jpg",
        "description": "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue " +
        "experiment that leaves him with accelerated healing powers and a quest for revenge."
    },
    "id10": {
        "file": "Suicide Squad.mp4",
        "title": "Suicide Squad",
        "release": " 25 August 2016",
        "duration": "123 min",
        "rate": "6.2",
        "genre": ["Action", "Adventure", "Fantasy"],
        "img": "suicide_squard.jpg",
        "description": "A secret government agency recruits some of the most dangerous incarcerated " +
        "super-villains to form a defensive task force. Their first mission: save the world from the apocalypse."
    },
    "id11": {
        "file": "it.mp4",
        "title": "IT",
        "release": "28 September 2017",
        "duration": "135 min",
        "rate": "7.7",
        "genre": ["Thriller", "Horror", "Drama"],
        "img": "it.jpg",
        "description": "A group of bullied kids band together when a shapeshifting monster, taking the " +
        "appearance of a clown, begins hunting children."
    },
    "id12": {
        "file": "It Comes At Night.mp4",
        "title": "It Comes At Night",
        "release": "7 September 2017",
        "duration": "91 min",
        "rate": "6.2",
        "genre": ["Horror", "Mystery"],
        "img": "it_comes_at_night.jpg",
        "description": "Secure within a desolate home as an unnatural threat terrorizes the world, a " +
        "man has established a tenuous domestic order with his wife and son. Then a desperate young " +
        "family arrives seeking refuge."
    }

};

mymovies = [];

function display_movie_details(movie_id) {
    var movie = movies[movie_id];
    new_background = 'url(\'../ressrc/movies_images/background/' + movie.img + '\')';
    new_poster = '../ressrc/movies_images/' + movie.img;

    $('#full-screen').css('background-image', new_background);
    $('#movie_poster').attr('src', new_poster);
    $('#movie_title').text(movie.title);
    $('#movie_info').html(`
    ${movies[movie_id].release.split(" ")[2]} • ${movie.duration} • ${movie.genre} • 
    <span><img width="30" height="15" src="../ressrc/movies_images/imdb.png"></span> ${movie.rate}`);
    $('#movie_description').text(movie.description);

    $('#movie_display_play').click(function() {
        setMoviesPlayer(movie_id);
    });

    $('#movie_display_add').click(function() {
        add_to_mymovies(movie_id);
    });

    PageTransitions.goToPage(2, 'movie_page');

    $("#movie_related_content").html("");

    counter = 0;
    common = [];
    common_counter = 0;
    for(i = 0; i < movies.crowd; i++) {
        flag = false;
        for(j = 0; j < movies["id" + i].genre.length; j++) {
            for(k = 0; k < movie.genre.length; k++) {
                if(counter === 4) return;
                if(!flag && movie_id !== ("id" + i) && (contains_word(movies["id" + i].genre[j], movie.genre[k]) ||
                    contains_word(movie.genre[k], movies["id" + i].genre[j]))) {
                    counter++;
                    common[common_counter++] = "id" + i;
                    flag = true;
                    $("#movie_related_content").append(
                        `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor:pointer" onclick="display_movie_details('id${i}')">
                            <div class="col-xs-4" style="padding-right:0">
                                <img class="img-movie-recently-watched" src="../ressrc/movies_images/${movies['id' + i].img}">
                            </div>
                            <div class="col-xs-8" style="padding-right: 0">
                                <p>${movies['id' + i].title}</p>
                                <small>${movies['id' + i].release.split(" ")[2]}</small>
                            </div>
                        </div>`)
                }
            }
        }
    }

    if(counter < 4) {
        for(let i = 0; i < movies.crowd; i++) {
            if(counter === 4) return;
            if (("id" + i) !== movie_id && movies["id" + i].release.split(" ")[2] === movies[movie_id].release.split(" ")[2]) {
                $("#movie_related_content").append(
                    `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor:pointer" onclick="display_movie_details('id${i}')">
                            <div class="col-xs-4" style="padding-right:0">
                                <img class="img-movie-recently-watched" src="../ressrc/movies_images/${movies['id' + i].img}">
                            </div>
                            <div class="col-xs-8" style="padding-right: 0">
                                <p>${movies['id' + i].title}</p>
                                <small>${movies['id' + i].release.split(" ")[2]}</small>
                            </div>
                        </div>`)
                if(counter++ % 4 == 0) {
                    $("#movie_related_content").append(`<div class="clearfix"></div>`)
                }
            }
        }
    }
}

function set_movies_news() {
    $("#movies_news_content").html("");

    var counter = 1;
    for(let i = 0; i < movies.crowd; i++) {
        if (movies["id" + i].release.split(" ")[2] === (new Date()).getFullYear().toString()) {
            $("#movies_news_content").append(`
                <div class="col-xs-3" onclick="display_movie_details('id' + ${i})">
                    <img class="img-responsive" src="../ressrc/movies_images/${movies["id" + i].img}"/>
                    <p>${movies["id" + i].title}</p>
                    <small>${movies["id" + i].release}</small>
                </div>
            `)
            if(counter++ % 4 == 0) {
                $("#movies_news_content").append(`<div class="clearfix"></div>`)
            }
        }
    }
}

function set_movies_tops() {
    $("#movies_tops_content").html("");

    var counter = 1;
    for(let i = 0; i < movies.crowd; i++) {
        if (parseFloat(movies["id" + i].rate) >= 7.0) {
            $("#movies_tops_content").append(`
                <div class="col-xs-3" onclick="display_movie_details('id' + ${i})">
                    <img class="img-responsive" src="../ressrc/movies_images/${movies["id" + i].img}"/>
                    <p>${movies["id" + i].title}</p>
                    <small>${movies["id" + i].release}</small>
                </div>
            `)

            if(counter++ % 4 == 0) {
                $("#movies_tops_content").append(`<div class="clearfix"></div>`)
            }
        }
    }
}

function set_movies_genres() {
    genres = [];
    genres_counter = 0;

    for(var i = 0; i < movies.crowd; i++) {
        movie = movies["id" + i];
        for(var j = 0; j < movie.genre.length; j++) {
            genres[genres_counter++] = movie.genre[j];
        }
    }

    // Filter duplicates
    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;

    $("#movies_genres_content").html("");

    current_movies = [];
    movies_counter = 0;
    var counter = 1;
    console.log(genres);
    for(let i = 0; i < genres.length; i++) {
        for(let j = 0; j < movies.crowd; j++) {
            if(current_movies.indexOf("id" + j) == -1 && movies["id" + j].genre.indexOf(genres[i]) > -1) {
                $("#movies_genres_content").append(`
                    <div class="col-xs-3" onclick="set_movies_by_genre('${genres[i]}')">
                        <img class="img-responsive" src="../ressrc/movies_images/${movies["id" + j].img}"/>
                        <p>${genres[i]}</p>
                    </div>
                `)

                if(counter++ % 4 == 0) {
                    $("#movies_genres_content").append(`<div class="clearfix"></div>`)
                }
                current_movies[movies_counter++] = "id" + j;
                break;
            }
        }
    }
}

function set_movies_by_genre(genre) {
    $("#movies_by_genres_content").html("");

    let counter = 1;
    for(let i = 0; i < movies.crowd; i++) {
        if(movies["id" + i].genre.indexOf(genre) > -1) {
            $("#movies_by_genres_content").append(`
                    <div class="col-xs-3" onclick="display_movie_details('${"id" + i}')">
                        <img class="img-responsive" src="../ressrc/movies_images/${movies["id" + i].img}"/>
                        <p>${movies["id" + i].title}</p>
                    <small>${movies["id" + i].release}</small>
                    </div>
                `);

            if(counter++ % 4 == 0) {
                $("#movies_by_genres_content").append(`<div class="clearfix"></div>`)
            }
        }
    }

    visitedPagesStack.setNewLastVisitedPage("movies_by_genres");
    PageTransitions.goToPage(2, 'movies_by_genres');
}

function send_mymovies() {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = "mymovies";

        ws.send(message);
        ws.onmessage = function(message) {
            mymovies = message.data.split("\n");

            var rates = [];
            var genres = [];
            var genres_counter = 0;
            var dates = [];
            $("#mymovies_content").html("");

            var index = mymovies.indexOf("");
            mymovies.splice(index, 1);

            for(var i = 0; i < mymovies.length; i++) {
                id = "id" + parseInt(mymovies[i].substring(2));
                movie = movies[id];


                for(var j = 0; j < movie.genre.length; j++) {
                    genres[genres_counter++] = movie.genre[j];
                }

                dates[i] = parseInt(movie.release.split(" ")[2]);
                rates[i] = parseFloat(movie.rate);
                $("#mymovies_content").append(
                    `<div class="col-xs-4 container">
                        <img class="img-responsive" src="../ressrc/movies_images/${movie.img}"/>
                        <p>${movie.title}</p>
                        <div class="overlay">
                            <h3 class="text-center">${movie.title}</h3>
                            <div class="options">
                                <div class="col-xs-12" onclick="display_movie_details('${id}')">
                                    <em class="fa fa-external-link" aria-hidden="true"><span style="padding-left:10px">Open movies' page</span></em>
                                </div>
                                
                                <div class="col-xs-12" onclick="setMoviesPlayer('${id}')">
                                    <em class="fa fa-play-circle-o" aria-hidden="true"><span style="padding-left:10px">Play the movie</span></em>
                                </div>
                                
                                <div class="col-xs-12" onclick="remove_from_mymovies('${id}', this)">
                                    <em class="fa fa-minus" aria-hidden="true"><span style="padding-left:10px">Remove from My movies</span></em>
                                </div>
                            </div>
                        </div>
                    </div>`);
            }

            // Filter duplicates
            tmp = genres.filter(function(item, pos) {
                return genres.indexOf(item) == pos;
            });
            genres = tmp;

            $("#mymovies_genres_content").html("");
            for(i = 0; i < genres.length; i++) {
                $("#mymovies_genres_content").append('<input onchange="apply_filters_mymovies()" type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
            }

            tmp = dates.filter(function(item, pos) {
                return dates.indexOf(item) == pos;
            });
            dates = tmp;
            dates = dates.sort(function (a, b) {  return b - a;  });

            tmp = rates.filter(function(item, pos) {
                return rates.indexOf(item) == pos;
            });
            rates = tmp;
            rates = rates.sort(function (a, b) {  return b - a;  });

            $("#mymovies_release_from").html("");
            $("#mymovies_release_to").html("");
            $("#mymovies_release_from").append('<option value=\"' + "none" + '\"></option>');
            $("#mymovies_release_to").append('<option value=\"' + "none" + '\"></option>');
            for(i = 0; i < dates.length; i++) {
                $("#mymovies_release_from").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
                $("#mymovies_release_to").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
            }

            $("#mymovies_rate_from").html("");
            $("#mymovies_rate_to").html("");
            $("#mymovies_rate_from").append('<option value=\"' + "none" + '\"></option>');
            $("#mymovies_rate_to").append('<option value=\"' + "none" + '\"></option>');
            for(i = 0; i < rates.length; i++) {
                $("#mymovies_rate_from").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
                $("#mymovies_rate_to").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
            }
        };
    };
}

function remove_from_mymovies(movie_id, this_elem) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "remove from mymovies", "movie_id":"' + movie_id + '"}';

        ws.send(message);
    };

    $(this_elem).parentsUntil("#mymovies_content").remove();
}

function apply_filters_mymovies() {
    let genres = [];
    let counter = 0;

    for(i = 0; i < $("#mymovies_genres_content").find("input").length; i++) {
        if($("#mymovies_genres_content").find("input")[i].checked) {
            genres[counter++] = $("#mymovies_genres_content").find("input")[i].value;
        }
    }

    let release_from = $( "#mymovies_release_from option:selected" ).text();
    if(release_from === "") {
        release_from = 0;
    }
    let release_to = $( "#mymovies_release_to option:selected" ).text();
    if(release_to === "") {
        release_to = (new Date).getFullYear();
    }

    let rate_from = $( "#mymovies_rate_from option:selected" ).text();
    if(rate_from === "") {
        rate_from = 0;
    }
    let rate_to = $( "#mymovies_rate_to option:selected" ).text();
    if(rate_to === "") {
        rate_to = (new Date).getFullYear();
    }

    let check = [];

    for(let i = 0; i < mymovies.length; i++) {
        check[i] = true;
    }

    if(genres.length > 0) {
        for(let i = 0; i < mymovies.length; i++) {
            let flag = false;
            for(let j = 0; j < genres.length; j++) {
                id = "id" + parseInt(mymovies[i].substring(2));
                for(let k = 0; k < movies[id].genre.length; k++) {
                    if(movies[id].genre[k] === genres[j]) {
                        flag = true;
                        break;
                    }
                }
            }
            check[i] = flag;
        }
    }


    for(let i = 0; i < mymovies.length; i++) {
        id = "id" + parseInt(mymovies[i].substring(2));
        if(parseFloat(movies[id].release.split(" ")[2]) < release_from ||
            parseFloat(movies[id].release.split(" ")[2]) > release_to) {
            check[i] = false;
        }
    }

    for(let i = 0; i < mymovies.length; i++) {
        id = "id" + parseInt(mymovies[i].substring(2));
        if(parseFloat(movies[id].rate) < rate_from ||
            parseFloat(movies[id].rate) > rate_to) {
            check[i] = false;
        }
    }

    if($("#mymovies_input_keywords").val() !== "") {
        words = $("#mymovies_input_keywords").val().split(" ");
        for(let i = 0; i < mymovies.length; i++) {
            id = "id" + parseInt(mymovies[i].substring(2));
            flag = false;
            for(let j = 0; j < words.length; j++) {
                if(contains_word(movies[id].title, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(movies[id].release, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(movies[id].rate, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(movies[id].genre.toString(), words[j]) && check[i]) {
                    flag = true;
                    break;
                }
            }
            check[i] = flag;
        }
    }


    $("#mymovies_content").html("");
    for(var i = 0; i < mymovies.length; i++) {

        if(check[i]) {
            id = "id" + parseInt(mymovies[i].substring(2));
            movie = movies[id];

            $("#mymovies_content").append(
                `<div class="col-xs-4 container">
                            <img class="img-responsive" src="../ressrc/movies_images/${movie.img}"/>
                            <p>${movie.title}</p>
                            <div class="overlay">
                                <h3 class="text-center">${movie.title}</h3>
                                <div class="options">
                                    <div class="col-xs-12" onclick="display_movie_details('${id}')">
                                        <em class="fa fa-external-link" aria-hidden="true"><span style="padding-left:10px">Open movies' page</span></em>
                                    </div>
                                    
                                    <div class="col-xs-12" onclick="display_movie_details('${id}')">
                                        <em class="fa fa-play-circle-o" aria-hidden="true"><span style="padding-left:10px">Play the movie</span></em>
                                    </div>
                                    
                                    <div class="col-xs-12" onclick="remove_from_mymovies('${id}', this)">
                                        <em class="fa fa-minus" aria-hidden="true"><span style="padding-left:10px">Remove from My movies</span></em>
                                    </div>
                                </div>
                            </div>
                        </div>`);

        }
    }
}

function search_movies_filters() {
    var rates = [];
    var genres = [];
    var genres_counter = 0;
    var dates = [];
    for(var i = 0; i < movies.crowd; i++) {
        id = "id" + i;
        movie = movies[id];

        for(var j = 0; j < movie.genre.length; j++) {
            genres[genres_counter++] = movie.genre[j];
        }

        dates[i] = parseInt(movie.release.split(" ")[2]);
        rates[i] = parseFloat(movie.rate);

    }

    // Filter duplicates
    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;

    $("#search_movies_genres_content").html("");
    for(i = 0; i < genres.length; i++) {
        $("#search_movies_genres_content").append('<input type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
    }

    tmp = dates.filter(function(item, pos) {
        return dates.indexOf(item) == pos;
    });
    dates = tmp;
    dates = dates.sort(function (a, b) {  return b - a;  });

    tmp = rates.filter(function(item, pos) {
        return rates.indexOf(item) == pos;
    });
    rates = tmp;
    rates = rates.sort(function (a, b) {  return b - a;  });

    $("#earch_movies_release_from").html("");
    $("#search_movies_release_to").html("");
    $("#search_movies_release_from").append('<option value=\"' + "none" + '\"></option>');
    $("#search_movies_release_to").append('<option value=\"' + "none" + '\"></option>');
    for(i = 0; i < dates.length; i++) {
        $("#search_movies_release_from").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
        $("#search_movies_release_to").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
    }

    $("#search_movies_rate_from").html("");
    $("#search_movies_rate_to").html("");
    $("#search_movies_rate_from").append('<option value=\"' + "none" + '\"></option>');
    $("#search_movies_rate_to").append('<option value=\"' + "none" + '\"></option>');
    for(i = 0; i < rates.length; i++) {
        $("#search_movies_rate_from").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
        $("#search_movies_rate_to").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
    }
}

function add_to_mymovies(movie_id) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "add to my movies", "movie_id":"' + movie_id + '" }';

        ws.send(message);
    };
}