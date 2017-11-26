series = {
    "crowd": 14,
    "id0": {
        "file": "The Punisher.mp4",
        "title": "The Punisher",
        "release": "2017 - present",
        "rate": "9.1",
        "duration": "44 min",
        "genre": ["Action", "Adventure", "Crime"],
        "img": "The Punisher.jpg",
        "description": "After the murder of his family, Marine veteran Frank Castle became a " +
        "vigilante known as \"The Punisher\" with only one goal in mind, to avenge them."
    },
    "id1": {
        "file": "The Defenders.mp4",
        "title": "The Defenders",
        "release": "2017 - present",
        "duration": "50 min",
        "rate": "7.7",
        "genre": ["Action", "Adventure", "Crime"],
        "img": "The Defenders.jpg",
        "description": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to fight crime in New York City."
    },
    "id2": {
        "file": "Emerald City.mp4",
        "title": "Emerald City",
        "release": "2016 - 2017",
        "duration": "60 min",
        "rate": "7.3",
        "genre": ["Adventure", "Drama", "Fantasy"],
        "img": "Emerald City.jpg",
        "description": "A modern reimagining of the stories that led to 'The Wizard of Oz'."
    },
    "id3": {
        "file": "Game of Thrones.mp4",
        "title": "Game of Thrones",
        "release": "2011 - present",
        "duration": "57 min",
        "rate": "9.5",
        "genre": ["Adventure", "Drama", "Fantasy"],
        "img": "Game of Thrones.jpg",
        "description": "Nine noble families fight for control over the mythical lands of Westeros, while a " +
        "forgotten race returns after being dormant for thousands of years."
    },
    "id4": {
        "file": "Breaking Bad.mp4",
        "title": "Breaking Bad",
        "release": "2008 - 2013",
        "duration": "49 min",
        "rate": "9.5",
        "genre": ["Crime", "Drama", "Thriller"],
        "img": "Breaking Bad.jpg",
        "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to " +
        "manufacturing and selling methamphetamine in order to secure his family's future."
    },
    "id5": {
        "file": "Stranger Things.mp4",
        "title": "Stranger Things",
        "release": "2016 - present",
        "duration": "51 min",
        "rate": "7.6",
        "genre": ["Drama", "Fantasy", "Horror"],
        "img": "Stranger Things.jpg",
        "description": "When a young boy disappears, his mother, a police chief, and his friends must " +
        "confront terrifying forces in order to get him back."
    },
    "id6": {
        "file": "Mindhunter.mp4",
        "title": "Mindhunter",
        "release": "2017 - present",
        "duration": "60 min",
        "rate": "8.7",
        "genre": ["Crime", "Drama", "Thriller"],
        "img": "Mindhunter.jpg",
        "description": "In the late 1970s two FBI agents expand criminal science by delving into the " +
        "psychology of murder and getting uneasily close to all-too-real monsters."
    },
    "id7": {
        "file": "Supernatural.mp4",
        "title": "Supernatural",
        "release": "2005 - present",
        "duration": "44 min",
        "rate": "8.6",
        "genre": ["Drama", "Fantasy", "Horror"],
        "img": "Supernatural.jpg",
        "description": "Two brothers follow their father's footsteps as \"hunters\", fighting evil " +
        "supernatural beings of many kinds, including monsters, demons, and gods that roam the earth."
    },
    "id8": {
        "file": "Friends.mp4",
        "title": "Friends",
        "release": "1994 - 2004",
        "duration": "22 min",
        "rate": "8.9",
        "genre": ["Comedy", "Romance"],
        "img": "Friends.jpg",
        "description": "Follows the personal and professional lives of six 20 to 30-something-year-old " +
        "friends living in Manhattan."
    },
    "id9": {
        "file": "Sherlock.mp4",
        "title": "Sherlock",
        "release": "2010 - 2017",
        "duration": "88 min",
        "rate": "9.2",
        "genre": ["Crime", "Drama", "Mystery"],
        "img": "Sherlock.jpg",
        "description": "A modern update finds the famous sleuth and his doctor partner solving crime in " +
        "21st century London."
    },
    "id10": {
        "file": "Arrow.mp4",
        "title": "Arrow",
        "release": "2012 - present",
        "duration": "42 min",
        "rate": "7.8",
        "genre": ["Action", "Adventure", "Crime"],
        "img": "Arrow.jpg",
        "description": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his " +
        "yacht is lost at sea. He returns five years later a changed man, determined to clean up the city " +
        "as a hooded vigilante armed with a bow."
    },
    "id11": {
        "file": "Mr. Robot.mp4",
        "title": "Mr. Robot",
        "release": "2015 - present",
        "duration": "49 min",
        "rate": "8.6",
        "genre": ["Crime", "Drama", "Thriller"],
        "img": "Mr. Robot.jpg",
        "description": "Follows Elliot, a young programmer working as a cyber-security engineer by day, " +
        "and a vigilante hacker by night."
    },
    "id12": {
        "file": "The Flash.mp4",
        "title": "The Flash",
        "release": "2014 - present",
        "duration": "43 min",
        "rate": "8.0",
        "genre": ["Action", "Adventure", "Drama"],
        "img": "The Flash.jpg",
        "description": "After being struck by lightning, Barry Allen wakes up from his coma to discover " +
        "he's been given the power of super speed, becoming the Flash, fighting crime in Central City."
    },
    "id13": {
        "file": "The Good Fight.mp4",
        "title": "The Good Fight",
        "release": "2017 - present",
        "duration": "45 min",
        "rate": "8.4",
        "genre": ["Drama"],
        "img": "The Good Fight.jpg",
        "description": "When Diane Lockhart's life savings are lost, she must start from scratch at a new firm."
    }

};

myseries = [];

function display_serie_details(serie_id) {
    var serie = series[serie_id];
    new_background = 'url(\'../ressrc/series_images/background/' + serie.img + '\')';
    new_poster = '../ressrc/series_images/' + serie.img;

    $('#serie_full-screen').css('background-image', new_background);
    $('#serie_poster').attr('src', new_poster);
    $('#serie_title').text(serie.title);
    $('#serie_info').html(`
    ${series[serie_id].release.split(" ")[0]} • ${serie.duration} • ${serie.genre} • 
    <span><img width="30" height="15" src="../ressrc/series_images/imdb.png"></span> ${serie.rate}`);
    $('#serie_description').text(serie.description);

    $('#serie_display_play').click(function() {
        setSeriesPlayer(serie_id);
    });

    $('#serie_display_play_episode').click(function() {
        setSeriesPlayer(serie_id);
    });

    $('#serie_display_add').click(function() {
        add_to_myseries(serie_id);
    });

    PageTransitions.goToPage(2, 'serie_page');

    $("#serie_related_content").html("");

    counter = 0;
    common = [];
    common_counter = 0;
    for(i = 0; i < series.crowd; i++) {
        flag = false;
        for(j = 0; j < series["id" + i].genre.length; j++) {
            for(k = 0; k < serie.genre.length; k++) {
                if(counter === 4) return;
                if(!flag && serie_id !== ("id" + i) && (contains_word(series["id" + i].genre[j], serie.genre[k]) ||
                    contains_word(serie.genre[k], series["id" + i].genre[j]))) {
                    counter++;
                    common[common_counter++] = "id" + i;
                    flag = true;
                    $("#serie_related_content").append(
                        `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor:pointer" onclick="display_serie_details('id${i}')">
                            <div class="col-xs-4" style="padding-right:0">
                                <img class="img-serie-recently-watched" src="../ressrc/series_images/${series['id' + i].img}">
                            </div>
                            <div class="col-xs-8" style="padding-right: 0">
                                <p>${series['id' + i].title}</p>
                                <small>${series['id' + i].release.split(" ")[0]}</small>
                            </div>
                        </div>`)
                }
            }
        }
    }

    if(counter < 4) {
        for(let i = 0; i < series.crowd; i++) {
            if(counter === 4) return;
            if (("id" + i) !== serie_id && series["id" + i].release.split(" ")[0] === series[serie_id].release.split(" ")[0]) {
                $("#serie_related_content").append(
                    `<div class="col-xs-12" style="padding: 0 0 20px 0; cursor:pointer" onclick="display_serie_details('id${i}')">
                            <div class="col-xs-4" style="padding-right:0">
                                <img class="img-serie-recently-watched" src="../ressrc/series_images/${series['id' + i].img}">
                            </div>
                            <div class="col-xs-8" style="padding-right: 0">
                                <p>${series['id' + i].title}</p>
                                <small>${series['id' + i].release.split(" ")[0]}</small>
                            </div>
                        </div>`)
                if(counter++ % 4 == 0) {
                    $("#serie_related_content").append(`<div class="clearfix"></div>`)
                }
            }
        }
    }
}

function set_series_news() {
    $("#series_news_content").html("");

    var counter = 1;
    for(let i = 0; i < series.crowd; i++) {
        if (series["id" + i].release.split(" ")[0] === (new Date()).getFullYear().toString()) {
            $("#series_news_content").append(`
                <div class="col-xs-3" onclick="display_serie_details('id' + ${i})">
                    <img class="img-responsive" src="../ressrc/series_images/${series["id" + i].img}"/>
                    <p>${series["id" + i].title}</p>
                    <small>${series["id" + i].release}</small>
                </div>
            `)
            if(counter++ % 4 == 0) {
                $("#series_news_content").append(`<div class="clearfix"></div>`)
            }
        }
    }
}

function set_series_tops() {
    $("#series_tops_content").html("");

    var counter = 1;
    for(let i = 0; i < series.crowd; i++) {
        if (parseFloat(series["id" + i].rate) >= 7.0) {
            $("#series_tops_content").append(`
                <div class="col-xs-3" onclick="display_serie_details('id' + ${i})">
                    <img class="img-responsive" src="../ressrc/series_images/${series["id" + i].img}"/>
                    <p>${series["id" + i].title}</p>
                    <small>${series["id" + i].release}</small>
                </div>
            `)

            if(counter++ % 4 == 0) {
                $("#series_tops_content").append(`<div class="clearfix"></div>`)
            }
        }
    }
}

function set_series_genres() {
    genres = [];
    genres_counter = 0;

    for(var i = 0; i < series.crowd; i++) {
        serie = series["id" + i];
        for(var j = 0; j < serie.genre.length; j++) {
            genres[genres_counter++] = serie.genre[j];
        }
    }

    // Filter duplicates
    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;

    $("#series_genres_content").html("");

    current_series = [];
    series_counter = 0;
    var counter = 1;
    console.log(genres);
    for(let i = 0; i < genres.length; i++) {
        for(let j = 0; j < series.crowd; j++) {
            if(current_series.indexOf("id" + j) == -1 && series["id" + j].genre.indexOf(genres[i]) > -1) {
                $("#series_genres_content").append(`
                    <div class="col-xs-3" onclick="set_series_by_genre('${genres[i]}')">
                        <img class="img-responsive" src="../ressrc/series_images/${series["id" + j].img}"/>
                        <p>${genres[i]}</p>
                    </div>
                `)

                if(counter++ % 4 == 0) {
                    $("#series_genres_content").append(`<div class="clearfix"></div>`)
                }
                current_series[series_counter++] = "id" + j;
                break;
            }
        }
    }
}

function set_series_by_genre(genre) {
    $("#series_by_genres_content").html("");

    let counter = 1;
    for(let i = 0; i < series.crowd; i++) {
        if(series["id" + i].genre.indexOf(genre) > -1) {
            $("#series_by_genres_content").append(`
                    <div class="col-xs-3" onclick="display_serie_details('${"id" + i}')">
                        <img class="img-responsive" src="../ressrc/series_images/${series["id" + i].img}"/>
                        <p>${series["id" + i].title}</p>
                    <small>${series["id" + i].release}</small>
                    </div>
                `);

            if(counter++ % 4 == 0) {
                $("#series_by_genres_content").append(`<div class="clearfix"></div>`)
            }
        }
    }

    visitedPagesStack.setNewLastVisitedPage("series_by_genres");
    PageTransitions.goToPage(2, 'series_by_genres');
}

function send_myseries() {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = "myseries";

        ws.send(message);
        ws.onmessage = function(message) {
            myseries = message.data.split("\n");

            var rates = [];
            var genres = [];
            var genres_counter = 0;
            var dates = [];
            $("#myseries_content").html("");

            var index = myseries.indexOf("");
            myseries.splice(index, 1);

            for(var i = 0; i < myseries.length; i++) {
                id = "id" + parseInt(myseries[i].substring(2));
                serie = series[id];


                for(var j = 0; j < serie.genre.length; j++) {
                    genres[genres_counter++] = serie.genre[j];
                }

                dates[i] = parseInt(serie.release.split(" ")[0]);
                rates[i] = parseFloat(serie.rate);
                $("#myseries_content").append(
                    `<div class="col-xs-4 container">
                        <img class="img-responsive" src="../ressrc/series_images/${serie.img}"/>
                        <p>${serie.title}</p>
                        <div class="overlay">
                            <h3 class="text-center">${serie.title}</h3>
                            <div class="options">
                                <div class="col-xs-12" onclick="display_serie_details('${id}')">
                                    <em class="fa fa-external-link" aria-hidden="true"><span style="padding-left:10px">Open series' page</span></em>
                                </div>
                                
                                <div class="col-xs-12" onclick="setSeriesPlayer('${id}')">
                                    <em class="fa fa-play-circle-o" aria-hidden="true"><span style="padding-left:10px">Play the serie</span></em>
                                </div>
                                
                                <div class="col-xs-12" onclick="remove_from_myseries('${id}', this)">
                                    <em class="fa fa-minus" aria-hidden="true"><span style="padding-left:10px">Remove from My series</span></em>
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

            $("#myseries_genres_content").html("");
            for(i = 0; i < genres.length; i++) {
                $("#myseries_genres_content").append('<input onchange="apply_filters_myseries()" type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
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

            $("#myseries_release_from").html("");
            $("#myseries_release_to").html("");
            $("#myseries_release_from").append('<option value=\"' + "none" + '\"></option>');
            $("#myseries_release_to").append('<option value=\"' + "none" + '\"></option>');
            for(i = 0; i < dates.length; i++) {
                $("#myseries_release_from").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
                $("#myseries_release_to").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
            }

            $("#myseries_rate_from").html("");
            $("#myseries_rate_to").html("");
            $("#myseries_rate_from").append('<option value=\"' + "none" + '\"></option>');
            $("#myseries_rate_to").append('<option value=\"' + "none" + '\"></option>');
            for(i = 0; i < rates.length; i++) {
                $("#myseries_rate_from").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
                $("#myseries_rate_to").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
            }
        };
    };
}

function remove_from_myseries(serie_id, this_elem) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "remove from myseries", "serie_id":"' + serie_id + '"}';

        ws.send(message);
    };

    $(this_elem).parentsUntil("#myseries_content").remove();
}

function apply_filters_myseries() {
    let genres = [];
    let counter = 0;

    for(i = 0; i < $("#myseries_genres_content").find("input").length; i++) {
        if($("#myseries_genres_content").find("input")[i].checked) {
            genres[counter++] = $("#myseries_genres_content").find("input")[i].value;
        }
    }

    let release_from = $( "#myseries_release_from option:selected" ).text();
    if(release_from === "") {
        release_from = 0;
    }
    let release_to = $( "#myseries_release_to option:selected" ).text();
    if(release_to === "") {
        release_to = (new Date).getFullYear();
    }

    let rate_from = $( "#myseries_rate_from option:selected" ).text();
    if(rate_from === "") {
        rate_from = 0;
    }
    let rate_to = $( "#myseries_rate_to option:selected" ).text();
    if(rate_to === "") {
        rate_to = (new Date).getFullYear();
    }

    let check = [];

    for(let i = 0; i < myseries.length; i++) {
        check[i] = true;
    }

    if(genres.length > 0) {
        for(let i = 0; i < myseries.length; i++) {
            let flag = false;
            for(let j = 0; j < genres.length; j++) {
                id = "id" + parseInt(myseries[i].substring(2));
                for(let k = 0; k < series[id].genre.length; k++) {
                    if(series[id].genre[k] === genres[j]) {
                        flag = true;
                        break;
                    }
                }
            }
            check[i] = flag;
        }
    }


    for(let i = 0; i < myseries.length; i++) {
        id = "id" + parseInt(myseries[i].substring(2));
        if(parseFloat(series[id].release.split(" ")[0]) < release_from ||
            parseFloat(series[id].release.split(" ")[0]) > release_to) {
            check[i] = false;
        }
    }

    for(let i = 0; i < myseries.length; i++) {
        id = "id" + parseInt(myseries[i].substring(2));
        if(parseFloat(series[id].rate) < rate_from ||
            parseFloat(series[id].rate) > rate_to) {
            check[i] = false;
        }
    }

    if($("#myseries_input_keywords").val() !== "") {
        words = $("#myseries_input_keywords").val().split(" ");
        for(let i = 0; i < myseries.length; i++) {
            id = "id" + parseInt(myseries[i].substring(2));
            flag = false;
            for(let j = 0; j < words.length; j++) {
                if(contains_word(series[id].title, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(series[id].release, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(series[id].rate, words[j]) && check[i]) {
                    flag = true;
                    break;
                }

                if(!flag && contains_word(series[id].genre.toString(), words[j]) && check[i]) {
                    flag = true;
                    break;
                }
            }
            check[i] = flag;
        }
    }


    $("#myseries_content").html("");
    for(var i = 0; i < myseries.length; i++) {

        if(check[i]) {
            id = "id" + parseInt(myseries[i].substring(2));
            serie = series[id];

            $("#myseries_content").append(
                `<div class="col-xs-4 container">
                            <img class="img-responsive" src="../ressrc/series_images/${serie.img}"/>
                            <p>${serie.title}</p>
                            <div class="overlay">
                                <h3 class="text-center">${serie.title}</h3>
                                <div class="options">
                                    <div class="col-xs-12" onclick="display_serie_details('${id}')">
                                        <em class="fa fa-external-link" aria-hidden="true"><span style="padding-left:10px">Open series' page</span></em>
                                    </div>
                                    
                                    <div class="col-xs-12" onclick="display_serie_details('${id}')">
                                        <em class="fa fa-play-circle-o" aria-hidden="true"><span style="padding-left:10px">Play the serie</span></em>
                                    </div>
                                    
                                    <div class="col-xs-12" onclick="remove_from_myseries('${id}', this)">
                                        <em class="fa fa-minus" aria-hidden="true"><span style="padding-left:10px">Remove from My series</span></em>
                                    </div>
                                </div>
                            </div>
                        </div>`);

        }
    }
}

function search_series_filters() {
    var rates = [];
    var genres = [];
    var genres_counter = 0;
    var dates = [];
    for(var i = 0; i < series.crowd; i++) {
        id = "id" + i;
        serie = series[id];

        for(var j = 0; j < serie.genre.length; j++) {
            genres[genres_counter++] = serie.genre[j];
        }

        dates[i] = parseInt(serie.release.split(" ")[0]);
        rates[i] = parseFloat(serie.rate);

    }

    // Filter duplicates
    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;

    $("#search_series_genres_content").html("");
    for(i = 0; i < genres.length; i++) {
        $("#search_series_genres_content").append('<input type="checkbox" name="genre" value="' + genres[i] + '">' + genres[i] + '<br>');
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

    $("#earch_series_release_from").html("");
    $("#search_series_release_to").html("");
    $("#search_series_release_from").append('<option value=\"' + "none" + '\"></option>');
    $("#search_series_release_to").append('<option value=\"' + "none" + '\"></option>');
    for(i = 0; i < dates.length; i++) {
        $("#search_series_release_from").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
        $("#search_series_release_to").append('<option value=\"' + dates[i] + '\">' + dates[i] + '</option>');
    }

    $("#search_series_rate_from").html("");
    $("#search_series_rate_to").html("");
    $("#search_series_rate_from").append('<option value=\"' + "none" + '\"></option>');
    $("#search_series_rate_to").append('<option value=\"' + "none" + '\"></option>');
    for(i = 0; i < rates.length; i++) {
        $("#search_series_rate_from").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
        $("#search_series_rate_to").append('<option value=\"' + rates[i] + '\">' + rates[i] + '</option>');
    }
}

function add_to_myseries(serie_id) {
    var ws = new WebSocket('ws://' + "localhost" + ':6556');

    ws.onopen = function() {
        message = '{ "type": "add to my series", "serie_id":"' + serie_id + '" }';

        ws.send(message);
    };
}