playerAPI = {};

playerAPI.playing = document.getElementById("playing");
playerAPI.width = 0;
playerAPI.current = document.getElementById("playing");
playerAPI.row = 0;
playerAPI.currentID = "id0";
playerAPI.muted = false;
playerAPI.stored_volume = 50;
playerAPI.tmpPlaylsit = {};
playerAPI.repeat_flag = false;
playerAPI.id_interval = -1;
playerAPI.mysongs = [];
playerAPI.songs = {
        "crowd": 13,
        "id0": {
            "file": "Shakira - Perro Fiel.mp3",
            "title": "Perro Fiel",
            "artist": "Shakira",
            "album": "Single",
            "release": "15 September 2017",
            "duration": "3:16",
            "genre": ["Latin pop", "reggaeton"],
            "img": "perro_fiel.png",

            "lyrics": "Aquí estás\n" +
            "Ya no puedes detenerte\n" +
            "¿Dónde vas?\n" +
            "Si estoy loco por tenerte\n" +
            "Cómo lo iba a saber\n" +
            "Que te vería otra vez\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Te hablo en serio mai, no estoy jugando\n" +
            "Tanto tiempo pasa y nada\n" +
            "Estas ganas no me aguanto\n" +
            "Y aunque tú me esquives, yo te sigo deseando\n" +
            "Dicen que tú eres peligrosa\n" +
            "No le hago caso a esas cosas\n" +
            "Dime qué está pasando\n" +
            "Me tienes como un loco, soy un loco enamorado, eh\n" +
            "Quiero saber cuánto me vas a insistir\n" +
            "Y hasta dónde llegarías por mí\n" +
            "Siento mucho la espera\n" +
            "Pero valdrá la pena cuando te esté besando\n" +
            "De la manera que te mueves así\n" +
            "Yo te lo juro me voy a derretir\n" +
            "Tú sabes que soy buena\n" +
            "Por más que yo te esquive me sigues deseando\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Enloque-que-quecer\n" +
            "Yo no pido nada extraordinario\n" +
            "Solo un hombre de verdad\n" +
            "Que se tire por mí al barro\n" +
            "Que cambie las bombillas o hasta que me lave el carro\n" +
            "Quiero un tipo atento y cariñoso\n" +
            "Pero que no sea muy celoso\n" +
            "Que en la calle sea un príncipe\n" +
            "Pero que en mi cama sea salvaje y peligroso\n" +
            "Puedes pedir lo que quieras de mí\n" +
            "Yo haría lo que fuera para ti\n" +
            "Siento mucho la espera\n" +
            "Pero valdrá la pena cuando te esté besando\n" +
            "Yo estoy seguro que estoy hecho pa' ti\n" +
            "Yo te lo juro no te haré sufrir\n" +
            "Como te dije nena\n" +
            "Por más que tú me esquives, te sigo deseando\n" +
            "Tú me confundes, no sé qué hacer\n" +
            "Yo lo que quiero es pasarla bien\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Si eso pasa yo seguiré\n" +
            "Contigo aquí como un perro fiel\n" +
            "Yo tengo miedo de que me guste\n" +
            "Y que vaya a enloquecer\n" +
            "Enloque-que-quecer\n" +
            "Aquí estás\n" +
            "Ya no puedes detenerte\n" +
            "¿Dónde vas? (¡Oh!)\n" +
            "Si estoy loco por tenerte"
        },
        "id1": {
            "file": "Fly Project - Like A Star.mp3",
            "title": "Like A Star",
            "artist": "Fly Project",
            "album": "Single",
            "release": "7 November 2005",
            "duration": "4:03",
            "genre": ["Soul", "downtempo"],
            "img": "like a star.jpg",

            "lyrics": "You can say that you love me,\n" +
            "Say that you need me,\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "You told me you want me\n" +
            "You told me you need me\n" +
            "You told me you love me\n" +
            "But I am leaving right now\n" +
            "\n" +
            "Say that you love me\n" +
            "Say that you need me\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]\n" +
            "\n" +
            "You can say that you love me,\n" +
            "Say that you need me,\n" +
            "Say that you hate me\n" +
            "And I am leaving right now\n" +
            "\n" +
            "You told me you want me\n" +
            "You told me you need me\n" +
            "You told me you love me\n" +
            "But I am leaving right now\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star.\n" +
            "\n" +
            "Gonna be, gonna be my lady\n" +
            "Tell me yes, tell me yes not maybe\n" +
            "Gonna be, gonna be my lady\n" +
            "I’m gonna treat you like a star\n" +
            "\n" +
            "Yo te canto, yo te canto\n" +
            "Yo te quiero ver bailando,\n" +
            "Yo te amo, yo te amo,\n" +
            "Ven a mi corazon [x2]"
        },
        "id2": {
            "file": "Ariana Grande - Side To Side.mp3",
            "title": "Side To Side",
            "artist": "Ariana Grande",
            "album": "Single",
            "release": "30 August 2016",
            "duration": "3:46",
            "genre": ["Reggae-pop"],
            "img": "side to side.png",

            "lyrics": "I've been here all night (Ariana)\n" +
            "I've been here all day (Nicki Minaj)\n" +
            "And boy, got me walkin' side to side\n" +
            "(Let them hoes know)\n" +
            "\n" +
            "I'm talkin' to ya\n" +
            "See you standing over there with your body\n" +
            "Feeling like I wanna rock with your body\n" +
            "And we don't gotta think 'bout nothin' ('Bout nothin')\n" +
            "I'm comin' at ya\n" +
            "'Cause I know you got a bad reputation\n" +
            "Doesn't matter, 'cause you give me temptation\n" +
            "And we don't gotta think 'bout nothin' ('Bout nothin')\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give you up\n" +
            "Can't hear them no, 'cause I\n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "Been tryna hide it\n" +
            "Baby what's it gonna hurt if they don't know?\n" +
            "Makin' everybody think that we solo\n" +
            "Just as long as you know you got me (You got me)\n" +
            "And boy I got ya\n" +
            "'Cause tonight I'm making deals with the devil\n" +
            "And I know it's gonna get me in trouble\n" +
            "Just as long as you know you got me\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give you up\n" +
            "Can't hear them no, 'cause \n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "I've been here all night\n" +
            "(Been here all night, baby)\n" +
            "I've been here all day\n" +
            "(Been here all day, baby)\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "This the new style with the fresh type of flow\n" +
            "Wrist icicle, ride dick bicycle\n" +
            "Come true yo, get you this type of blow\n" +
            "If you wanna menage I got a tricycle\n" +
            "\n" +
            "All these bitches, flows is my mini-me\n" +
            "Body smoking, so they call me young Nicki chimney\n" +
            "Rappers in they feelings cause they feelin' me\n" +
            "Uh, I-I give zero fucks and I got zero chill in me\n" +
            "Kissing me, copped the blue box that say Tiffany\n" +
            "Curry with the shot, just tell 'em to call me Stephanie\n" +
            "Gun pop and I make my gum pop\n" +
            "I'm the queen of rap, young Ariana run pop\n" +
            "\n" +
            "These friends keep talkin' way too much\n" +
            "Say I should give him up\n" +
            "Can't hear them no, 'cause I\n" +
            "\n" +
            "I've been here all night\n" +
            "I've been here all day\n" +
            "And boy, got me walkin' side to side (Side to side)\n" +
            "I've been here all night\n" +
            "(Been here all night baby)\n" +
            "I've been here all day\n" +
            "(Been here all day baby)\n" +
            "Boy, got me walkin' side to side (Side to side)\n" +
            "\n" +
            "This the new style with the fresh type of flow\n" +
            "Wrist icicle, ride dick bicycle\n" +
            "Come true yo, get you this type of blow\n" +
            "If you wanna menage I got a tricycle"
        },
        "id3": {
            "file": "Green Day Boulevard Of Broken Dreams.mp3",
            "title": "Boulevard Of Broken Dreams",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "29 November 2004",
            "duration": "4:20",
            "genre": ["Alternative rock"],
            "img": "boulevard of broken dreams.jpg",

            "lyrics": "I walk a lonely road\n" +
            "The only one that I have ever known\n" +
            "Don't know where it goes\n" +
            "But it's only me, and I walk alone\n" +
            "I walk this empty street\n" +
            "On the boulevard of broken dreams\n" +
            "Where the city sleeps\n" +
            "And I'm the only one, and I walk alone\n" +
            "I walk alone, I walk alone\n" +
            "I walk alone and I walk a\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone\n" +
            "Ah ah ah ah ah\n" +
            "Ah ah ah ah ah\n" +
            "I'm walking down the line\n" +
            "That divides me somewhere in my mind\n" +
            "On the border line of the edge\n" +
            "And where I walk alone\n" +
            "Read between the lines\n" +
            "What's fucked up and every thing's all right\n" +
            "Check my vital signs to know I'm still alive\n" +
            "And I walk alone\n" +
            "I walk alone, I walk alone\n" +
            "I walk alone and I walk a\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone\n" +
            "Ah ah ah ah ah\n" +
            "Ah ah ah ah ah\n" +
            "I walk alone, I walk a\n" +
            "I walk this empty street\n" +
            "On the boulevard of broken dreams\n" +
            "Where the city sleeps\n" +
            "And I'm the only one, and I walk alone\n" +
            "My shadow's the only one that walks beside me\n" +
            "My shallow heart's the only thing that's beating\n" +
            "Sometimes I wish someone out there will find me\n" +
            "Till then I walk alone"
        },
        "id4": {
            "file": "Green Day Holiday.mp3",
            "title": "Holiday",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "14 March 2005",
            "duration": "4:41",
            "genre": ["Punk rock", "pop punk"],
            "img": "holiday.jpg",

            "lyrics": "Say, hey!\n" +
            "\n" +
            "Hear the sound of the falling rain\n" +
            "Coming down like an Armageddon flame (Hey!)\n" +
            "The shame\n" +
            "The ones who died without a name\n" +
            "\n" +
            "Hear the dogs howling out of key\n" +
            "To a hymn called \"Faith and Misery\" (Hey!)\n" +
            "And bleed, the company lost the war today\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "On holiday\n" +
            "\n" +
            "Hear the drum pounding out of time\n" +
            "Another protester has crossed the line (Hey!)\n" +
            "To find, the money's on the other side\n" +
            "\n" +
            "Can I get another Amen? (Amen!)\n" +
            "There's a flag wrapped around a score of men (Hey!)\n" +
            "A gag, a plastic bag on a monument\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "On holiday\n" +
            "\n" +
            "(Hey!)\n" +
            "(Say, hey!)\n" +
            "\n" +
            "\"The representative from California has the floor\"\n" +
            "\n" +
            "Zieg Heil to the president Gasman\n" +
            "Bombs away is your punishment\n" +
            "Pulverize the Eiffel towers\n" +
            "Who criticize your government\n" +
            "Bang bang goes the broken glass and\n" +
            "Kill all the fags that don't agree\n" +
            "Trials by fire, setting fire\n" +
            "Is not a way that's meant for me\n" +
            "Just cause (hey, hey, hey), just cause, because we're outlaws yeah!\n" +
            "\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "I beg to dream and differ from the hollow lies\n" +
            "This is the dawning of the rest of our lives\n" +
            "\n" +
            "This is our lives on holiday"
        },
        "id5": {
            "file": "Green Day - American Idiot.mp3",
            "title": "American Idiot",
            "artist": "Green Day",
            "album": "American Idiot",
            "release": "31 August 2004",
            "duration": "2:54",
            "genre": ["Punk rock", "pop punk"],
            "img": "american idiot.jpg",

            "lyrics": "Don't wanna be an American idiot\n" +
            "Don't want a nation under the new media\n" +
            "And can you hear the sound of hysteria?\n" +
            "The subliminal mind-fuck America\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue\n" +
            "Well maybe I'm the faggot America\n" +
            "I'm not a part of a redneck agenda\n" +
            "Now everybody do the propaganda\n" +
            "And sing along to the age of paranoia\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue\n" +
            "Don't wanna be an American idiot\n" +
            "One nation controlled by the media\n" +
            "Information Age of hysteria\n" +
            "It's calling out to idiot America\n" +
            "Welcome to a new kind of tension\n" +
            "All across the alien nation\n" +
            "Where everything isn't meant to be okay\n" +
            "Television dreams of tomorrow\n" +
            "We're not the ones who're meant to follow\n" +
            "For that's enough to argue"
        },
        "id6": {
            "file": "Scorpions - Rock You Like A Hurricane.mp3",
            "title": "Rock You Like A Hurricane",
            "artist": "Scorpions",
            "album": "Comeblack",
            "release": "20 February 1984",
            "duration": "4:11",
            "genre": ["Hard Rock"],
            "img": "rock you like a hurricane.jpeg",

            "lyrics": "It's early morning, the sun comes out\n" +
            "Last night was shaking and pretty loud\n" +
            "My cat is purring, it scratches my skin\n" +
            "So what is wrong with another sin?\n" +
            "\n" +
            "The bitch is hungry, she needs to tell\n" +
            "So give her inches and feed her well\n" +
            "More days to come, new places to go\n" +
            "I've got to leave, it's time for a show\n" +
            "\n" +
            "Here I am\n" +
            "Rock you like a hurricane\n" +
            "Here I am\n" +
            "Rock you like a hurricane\n" +
            "\n" +
            "My body is burning, it starts to shout\n" +
            "Desire is coming, it breaks out loud\n" +
            "Lust is in cages till storm breaks loose\n" +
            "Just have to make it with someone I choose\n" +
            "\n" +
            "The night is calling, I have to go\n" +
            "The wolf is hungry, he runs the show\n" +
            "He's licking his lips, he's ready to win\n" +
            "On the hunt tonight for love at first sting\n" +
            "\n" +
            "Here I am\n" +
            "Rock you like a hurricane (Are you ready, baby?)\n" +
            "Here I am\n" +
            "Rock you like a hurricane\n" +
            "Here I am\n" +
            "Rock you like a hurricane (Come on, come on, baby)\n" +
            "Here I am\n" +
            "Rock you like a hurricane\n" +
            "\n" +
            "Rock you like a hurricane\n" +
            "\n" +
            "It's early morning, the sun comes out\n" +
            "Last night was shaking and pretty loud\n" +
            "My cat is purring, it scratches my skin\n" +
            "So what is wrong with another sin?\n" +
            "\n" +
            "The night is calling, I have to go\n" +
            "The wolf is hungry, he runs the show\n" +
            "He's licking his lips, he's ready to win\n" +
            "On the hunt tonight for love at first sting\n" +
            "\n" +
            "Here I am\n" +
            "Rock you like a hurricane (Are you ready, baby?)\n" +
            "Here I am\n" +
            "Rock you like a hurricane\n" +
            "Here I am\n" +
            "Rock you like a hurricane (Come on, come on, come on, come on)\n" +
            "Here I am\n" +
            "Rock you like a hurricane"},
        "id7": {
            "file": "Post Malone - rockstar.mp3",
            "title": "Rockstar",
            "artist": "Post Malone",
            "album": "Rockstar",
            "release": "15 September 2017",
            "duration": "3:38",
            "genre": ["Hip hop", "trap"],
            "img": "rockstar.jpg",

            "lyrics": "Ayy, I've been fuckin' hoes and poppin' pillies\n" +
            "Man, I feel just like a rockstar (star)\n" +
            "Ayy, ayy, all my brothers got that gas\n" +
            "And they always be smokin' like a Rasta\n" +
            "Fuckin' with me, call up on a Uzi\n" +
            "And show up, man them the shottas\n" +
            "When my homies pull up on your block\n" +
            "They make that thing go grrra-ta-ta-ta (pow, pow, pow)\n" +
            "\n" +
            "Ayy, ayy, switch my whip, came back in black\n" +
            "I'm startin' sayin', \"Rest in peace to Bon Scott\"\n" +
            "Ayy, close that door, we blowin' smoke\n" +
            "She ask me light a fire like I'm Morrison\n" +
            "Ayy, act a fool on stage\n" +
            "Prolly leave my fuckin' show in a cop car\n" +
            "Ayy, shit was legendary\n" +
            "Threw a TV out the window of the Montage\n" +
            "Cocaine on the table, liquor pourin', don't give a damn\n" +
            "Dude, your girlfriend is a groupie, she just tryna get in\n" +
            "Sayin', \"I'm with the band\"\n" +
            "Ayy, ayy, now she actin' outta pocket\n" +
            "Tryna grab up from my pants\n" +
            "Hundred bitches in my trailer say they ain't got a man\n" +
            "And they all brought a friend\n" +
            "Yeah, ayy\n" +
            "\n" +
            "Ayy, I've been fuckin' hoes and poppin' pillies\n" +
            "Man, I feel just like a rockstar (star)\n" +
            "Ayy, ayy, all my brothers got that gas\n" +
            "And they always be smokin' like a Rasta\n" +
            "Fuckin' with me, call up on a Uzi\n" +
            "And show up, man them the shottas\n" +
            "When my homies pull up on your block\n" +
            "They make that thing go grrra-ta-ta-ta (pow, pow, pow)\n" +
            "\n" +
            "I've been in the Hills fuckin' superstars\n" +
            "Feelin' like a pop star (21, 21, 21)\n" +
            "Drankin' Henny, bad bitches jumpin' in the pool\n" +
            "And they ain't got on no bra\n" +
            "Hit her from the back, pullin' on her tracks\n" +
            "And now she screamin' out, \"no más\" (yeah, yeah, yeah)\n" +
            "They like, \"Savage, why you got a 12 car garage\n" +
            "And you only got 6 cars?\" (21)\n" +
            "I ain't with the cakin', how you kiss that? (kiss that?)\n" +
            "Your wifey say I'm lookin' like a whole snack (big snack)\n" +
            "Green hundreds in my safe, I got old racks (old racks)\n" +
            "L.A. bitches always askin' where the coke at\n" +
            "Livin' like a rockstar, smash out on a cop car\n" +
            "Sweeter than a Pop-Tart, you know you are not hard\n" +
            "I done made the hot chart, 'member I used to trap hard\n" +
            "Livin' like a rockstar, I'm livin' like a rockstar\n" +
            "\n" +
            "Ayy, I've been fuckin' hoes and poppin' pillies\n" +
            "Man, I feel just like a rockstar (star)\n" +
            "Ayy, ayy, all my brothers got that gas\n" +
            "And they always be smokin' like a Rasta\n" +
            "Fuckin' with me, call up on a Uzi\n" +
            "And show up, man them the shottas\n" +
            "When my homies pull up on your block\n" +
            "They make that thing go grrra-ta-ta-ta (pow, pow, pow)\n" +
            "\n" +
            "Rockstar\n" +
            "Rockstar, feel just like a rock\n" +
            "Rockstar\n" +
            "Star\n" +
            "Rockstar\n" +
            "Feel just like a"},
        "id8": {
            "file": "Demi Lovato - Sorry Not Sorry.mp3",
            "title": "Sorry Not Sorry",
            "artist": "Demi Lovato",
            "album": "Tell Me You Love Me",
            "release": "11 July 2017",
            "duration": "3:23",
            "genre": ["pop"],
            "img": "Sorry_Not_Sorry.png",

            "lyrics": "Payback is a bad bitch\n" +
            "And baby, I'm the baddest\n" +
            "\n" +
            "Now I'm out here looking like revenge\n" +
            "Feelin' like a ten, the best I ever been\n" +
            "And yeah, I know how bad it must hurt\n" +
            "To see me like this, but it gets worse (wait a minute)\n" +
            "Now you're out here looking like regret\n" +
            "Ain't too proud to beg, second chance you'll never get\n" +
            "And yeah, I know how bad it must hurt to see me like this\n" +
            "But it gets worse (wait a minute)\n" +
            "\n" +
            "Now payback is a bad bitch\n" +
            "And baby, I'm the baddest\n" +
            "You fuckin' with a savage\n" +
            "Can't have this, can't have this (ah)\n" +
            "And it'd be nice of me to take it easy on ya, but nah\n" +
            "\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Being so bad got me feelin' so good\n" +
            "Showing you up like I knew that I would\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Feeling inspired 'cause the tables have turned\n" +
            "Yeah, I'm on fire and I know that it burns\n" +
            "\n" +
            "Baby, fineness is the way to kill\n" +
            "Tell me how it feel, bet it's such a bitter pill\n" +
            "And yeah, I know you thought you had bigger, better things\n" +
            "Bet right now this stings (wait a minute)\n" +
            "'Cause the grass is greener under me\n" +
            "Bright as technicolor, I can tell that you can see\n" +
            "And yeah, I know how bad it must hurt to see me like this\n" +
            "But it gets worse (wait a minute)\n" +
            "\n" +
            "Now payback is a bad bitch\n" +
            "And baby, I'm the baddest\n" +
            "You fuckin' with a savage\n" +
            "Can't have this, can't have this (ah)\n" +
            "And it'd be nice of me to take it easy on ya, but nah\n" +
            "\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Being so bad got me feelin' so good\n" +
            "Showing you up like I knew that I would\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Feeling inspired 'cause the tables have turned\n" +
            "Yeah, I'm on fire and I know that it burns\n" +
            "\n" +
            "Talk that talk, baby\n" +
            "Better walk, better walk that walk, baby\n" +
            "If you talk, if you talk that talk, baby\n" +
            "Better walk, better walk that walk, baby\n" +
            "Oh yeah\n" +
            "Talk that talk, baby\n" +
            "Better walk, better walk that walk, baby\n" +
            "If you talk, if you talk that talk, baby\n" +
            "Better walk, better walk that walk, baby\n" +
            "\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Being so bad got me feelin' so good\n" +
            "Showing you up like I knew that I would\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Baby, I'm sorry (I'm not sorry)\n" +
            "Feeling inspired 'cause the tables have turned\n" +
            "Yeah, I'm on fire and I know that it burns\n" +
            "\n" +
            "Payback is a bad bitch\n" +
            "And baby, I'm the baddest\n" +
            "I'm the baddest, I'm the baddest"},
        "id9": {
            "file": "Imagine Dragons - Thunder.mp3",
            "title": "Thunder",
            "artist": "Imagine Dragons",
            "album": "Evolve",
            "release": "27 April 2017",
            "duration": "3:07",
            "genre": ["Synth-pop"],
            "img": "thunder.jpg",

            "lyrics": "Just a young gun with a quick fuse\n" +
            "I was uptight, wanna let loose\n" +
            "I was dreaming of bigger things\n" +
            "And wanna leave my own life behind\n" +
            "Not a yes sir, not a follower\n" +
            "Fit the box, fit the mold\n" +
            "Have a seat in the foyer, take a number\n" +
            "I was lightning before the thunder\n" +
            "\n" +
            "Thunder, thunder\n" +
            "Thunder, thun', thunder\n" +
            "Thun-thun-thunder, thunder, thunder\n" +
            "Thunder, thun', thunder\n" +
            "Thun-thun-thunder, thunder\n" +
            "\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder\n" +
            "Thunder, thunder\n" +
            "Thunder\n" +
            "\n" +
            "Kids were laughing in my classes\n" +
            "While I was scheming for the masses\n" +
            "Who do you think you are?\n" +
            "Dreaming 'bout being a big star\n" +
            "You say you're basic, you say you're easy\n" +
            "You're always riding in the back seat\n" +
            "Now I'm smiling from the stage while\n" +
            "You were clapping in the nose bleeds\n" +
            "\n" +
            "Thunder\n" +
            "Thunder, thun', thunder\n" +
            "Thun-thun-thunder, thunder, thunder\n" +
            "Thunder, thun', thunder\n" +
            "Thun-thun-thunder, thunder\n" +
            "\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder\n" +
            "Thunder\n" +
            "\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder, thunder\n" +
            "\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder, thunder\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder, thunder\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder, thunder\n" +
            "Thunder, feel the thunder\n" +
            "Lightning and the thunder, thunder\n" +
            "\n" +
            "Thunder, thunder, thunder\n" +
            "Thun-thun-thunder, thunder\n" +
            "Thunder, thunder, thunder\n" +
            "Thun-thun-thunder, thunder\n" +
            "Thunder, thunder, thunder\n" +
            "Thun-thun-thunder, thunder\n" +
            "Thunder, thunder, thunder\n" +
            "Thun-thun-thunder, thunder"},
        "id10": {
            "file": "Foo Fighters - The Sky Is A Neighborhood.mp3",
            "title": "The Sky Is A Neighborhood",
            "artist": "Foo Fighters",
            "album": "Concrete and Gold",
            "release": "23 August 2017",
            "duration": "4:04",
            "genre": ["Alternative rock"],
            "img": "the sky is a neighborhood.jpg",

            "lyrics": "Ah ah \n" +
            "Ah ah\n" +
            "Ah ah\n" +
            "The sky is a neighborhood\n" +
            "So keep it down\n" +
            "heart is a storybook\n" +
            "A star burned out\n" +
            "The sky is a neighborhood\n" +
            "Don't make a sound\n" +
            "Lights coming up ahead\n" +
            "Don't look now\n" +
            "The sky is a neighborhood\n" +
            "The sky is a neighborhood\n" +
            "Don't look now\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "Mind is a battlefield\n" +
            "All hope is gone\n" +
            "Trouble to the right and left\n" +
            "Whose side you're on?\n" +
            "Thoughts like a minefield\n" +
            "I'm a ticking bomb\n" +
            "Maybe you should watch your step\n" +
            "Don't get lost\n" +
            "The sky is a neighborhood\n" +
            "The sky is a neighborhood\n" +
            "Don't get lost\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "The sky is a neighborhood\n" +
            "heart is a storybook\n" +
            "A star burned out\n" +
            "Something coming up ahead\n" +
            "Don't look now\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "Oh my dear Heaven is a big band now\n" +
            "Gotta get to sleep somehow (The sky is a neighborhood)\n" +
            "Bangin' on the ceiling\n" +
            "Bangin' on the ceiling\n" +
            "Keep it down\n" +
            "The sky is a neighborhood"},
        "id11": {
            "file": "Sam Smith - Too Good At Goodbyes.mp3",
            "title": "Too Good At Goodbyes",
            "artist": "Sam Smith",
            "album": "The Thrill of It All",
            "release": "8 September 2017",
            "duration": "3:21",
            "genre": ["Orchestral pop"],
            "img": "Too_Good_at_Goodbyes.jpg",

            "lyrics": "You must think that I'm stupid\n" +
            "You must think that I'm a fool\n" +
            "You must think that I'm new to this\n" +
            "But I have seen this all before\n" +
            "\n" +
            "I'm never gonna let you close to me\n" +
            "Even though you mean the most to me\n" +
            "'Cause every time I open up, it hurts\n" +
            "So I'm never gonna get too close to you\n" +
            "Even when I mean the most to you\n" +
            "In case you go and leave me in the dirt\n" +
            "\n" +
            "But every time you hurt me, the less that I cry\n" +
            "And every time you leave me, the quicker these tears dry\n" +
            "And every time you walk out, the less I love you\n" +
            "Baby, we don't stand a chance, it's sad but it's true\n" +
            "\n" +
            "I'm way too good at goodbyes\n" +
            "(I'm way too good at goodbyes)\n" +
            "I'm way too good at goodbyes\n" +
            "(I'm way too good at goodbyes)\n" +
            "\n" +
            "I know you're thinking I'm heartless\n" +
            "I know you're thinking I'm cold\n" +
            "I'm just protecting my innocence\n" +
            "I'm just protecting my soul\n" +
            "\n" +
            "I'm never gonna let you close to me\n" +
            "Even though you mean the most to me\n" +
            "'Cause every time I open up, it hurts\n" +
            "So I'm never gonna get too close to you\n" +
            "Even when I mean the most to you\n" +
            "In case you go and leave me in the dirt\n" +
            "\n" +
            "But every time you hurt me, the less that I cry\n" +
            "And every time you leave me, the quicker these tears dry\n" +
            "And every time you walk out, the less I love you\n" +
            "Baby, we don't stand a chance, it's sad but it's true\n" +
            "\n" +
            "I'm way to good at goodbyes\n" +
            "(I'm way to good at goodbyes)\n" +
            "I'm way too good at goodbyes\n" +
            "(I'm way too good at goodbyes)\n" +
            "No way that you'll see me cry\n" +
            "(No way that you'll see me cry)\n" +
            "I'm way too good at goodbyes\n" +
            "(I'm way too good at goodbyes)\n" +
            "\n" +
            "No\n" +
            "No, no, no, no, no (I'm way too good at goodbyes)\n" +
            "No, no, no, no\n" +
            "No, no, no (I'm way too good at goodbyes)\n" +
            "(No way that you'll see me cry)\n" +
            "(I'm way too good at goodbyes)\n" +
            "\n" +
            "'Cause every time you hurt me, the less that I cry\n" +
            "And every time you leave me, the quicker these tears dry\n" +
            "And every time you walk out, the less I love you\n" +
            "Baby, we don't stand a chance, it's sad but it's true\n" +
            "I'm way too good at goodbyes"},
        "id12": {
        "file": "Camila Cabello - Havana.mp3",
        "title": "Havana",
        "artist": "Camila Cabello",
        "album": "Single",
        "release": "8 September 2017",
        "duration": "3:36",
        "genre": ["Latin", "pop"],
        "img": "havana.png",

        "lyrics": "Hey\n" +
        "Havana, ooh na-na (ay)\n" +
        "Half of my heart is in Havana, ooh-na-na (ay, ay)\n" +
        "He took me back to East Atlanta, na-na-na\n" +
        "All of my heart is in Havana (ay)\n" +
        "There's somethin' 'bout his manners (uh huh)\n" +
        "Havana, ooh na-na (uh)\n" +
        "He didn't walk up with that \"how you doin'?\" (uh)\n" +
        "(When he came in the room)\n" +
        "He said there's a lot of girls I can do with (uh)\n" +
        "(But I can't without you)\n" +
        "I'm doin' forever in a minute (hey)\n" +
        "(That summer night in June)\n" +
        "And papa says he got malo in him (uh)\n" +
        "He got me feelin' like\n" +
        "Ooh-ooh-ooh, I knew it when I met him\n" +
        "I loved him when I left him\n" +
        "Got me feelin' like\n" +
        "Ooh-ooh-ooh, and then I had to tell him\n" +
        "I had to go, oh na-na-na-na-na\n" +
        "Havana, ooh na-na (ay, ay)\n" +
        "Half of my heart is in Havana, ooh-na-na (ay, ay)\n" +
        "He took me back to East Atlanta, na-na-na (uh huh)\n" +
        "All of my heart is in Havana (ay)\n" +
        "My heart is in Havana (ay)\n" +
        "Havana, ooh na-na\n" +
        "Jeffery\n" +
        "Just graduated, fresh on campus, mm\n" +
        "Fresh out East Atlanta with no manners, damn\n" +
        "Fresh out East Atlanta\n" +
        "Bump on her bumper like a traffic jam\n" +
        "Hey, I was quick to pay that girl like Uncle Sam (here you go, ay)\n" +
        "Back it on me, shawty cravin' on me\n" +
        "Get to diggin' on me (on me)\n" +
        "She waited on me (then what?)\n" +
        "Shawty cakin' on me, got the bacon on me (wait up)\n" +
        "This is history in the makin' on me (on me)\n" +
        "Point blank, close range, that B\n" +
        "If it cost a million, that's me (that's me)\n" +
        "I was gettin' mula, man they feel me\n" +
        "Havana, ooh na-na (ay, ay)\n" +
        "Half of my heart is in Havana, ooh-na-na (oh, ay, ay)\n" +
        "He took me back to East Atlanta, na-na-na (oh no)\n" +
        "All of my heart is in Havana (ay)\n" +
        "My heart is in Havana (ay)\n" +
        "Havana, ooh na-na\n" +
        "Ooh na-na, oh na-na-na (oo-ooh)\n" +
        "Take me back, back, back like\n" +
        "Ooh na-na, oh na-na-na (yeah, babe)\n" +
        "Take me back, back, back like\n" +
        "Ooh na-na, oh na-na-na (yea, yeah)\n" +
        "Take me back, back, back like\n" +
        "Ooh na-na, oh na-na-na (yea, babe)\n" +
        "Take me back, back, back\n" +
        "(Hey, hey)\n" +
        "Ooh-ooh-ooh\n" +
        "Ooh-ooh-ooh\n" +
        "Take me back to my Havana\n" +
        "Havana, ooh na-na\n" +
        "Half of my heart is in Havana, ooh-na-na (oh, yeah)\n" +
        "He took me back to East Atlanta, na-na-na (ay, ay)\n" +
        "All of my heart is in Havana\n" +
        "My heart is in Havana (ay)\n" +
        "Havana, ooh na-na\n" +
        "Uh huh\n" +
        "Oh na-na-na (oh na, yeah)\n" +
        "Oh na-na-na\n" +
        "Oh na-na-na\n" +
        "No, no, no, take me back\n" +
        "Oh na-na-na\n" +
        "Havana, ooh na-na"}
    };

(function init() {
    playerAPI.playlist = [playerAPI.songs.crowd];
    for (i = 0; i < playerAPI.songs.crowd; i++) {
        playerAPI.playlist[i] = "id" + i;
    }

    playerAPI.row = 0;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
    $("#title_artist").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + " - " + playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
    $("#expand_player").find("div").find("img")[0].src = "../ressrc/songs_images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img;
    $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].title;
    $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist;
    $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].genre;
    $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].album;
    $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].release;
    $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].duration;
    $("#expand_lyrics").html("<pre>" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].lyrics + "</pre>");
    $("#playing")[0].load();
})();

playerAPI.playPause = function playPause() {
    if (playerAPI.playing.paused) {
        playerAPI.playing.play();
        $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf28c;";
    } else {
        playerAPI.playing.pause();
        $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
    }
};

playerAPI.next = function next() {

    isPaused = playerAPI.playing.paused;
    playerAPI.row = (playerAPI.row + 1) % playerAPI.playlist.length;
    $('#myBar').css('width', "0");
    playerAPI.width = 0;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
    $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
    $("#title_artist").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + " - " + playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
    $("#expand_player").find("div").find("img")[0].src = "../ressrc/songs_images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img;
    $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].title;
    $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist;
    $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].genre;
    $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].album;
    $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].release;
    $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].duration;
    $("#expand_lyrics").html("<pre>" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].lyrics + "</pre>");

    $("#add_from_expand").click(function() {
        $("#expand_player").removeClass("in");
        open_playlists_modal(playerAPI.playlist[playerAPI.row]);
    });

    $("#playing")[0].load();
    if(!isPaused) {
        $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf28c;";
        $("#playing")[0].play();
    } else {
        $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
    }
};

playerAPI.prev = function prev() {
    isPaused = playerAPI.playing.paused;
    playerAPI.row = (playerAPI.row - 1);
    if(playerAPI.row < 0) {
        playerAPI.row = playerAPI.playlist.length;
    }
    $('#myBar').css('width', "0");
    playerAPI.width = 0;
    $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
    $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
    $("#title_artist").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + " - " + playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
    $("#expand_player").find("div").find("img")[0].src = "../ressrc/songs_images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img;
    $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].title;
    $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist;
    $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].genre;
    $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].album;
    $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].release;
    $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].duration;
    $("#expand_lyrics").html("<pre>" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].lyrics + "</pre>");

    $("#add_from_expand").click(function() {
        $("#expand_player").removeClass("in");
        open_playlists_modal(playerAPI.playlist[playerAPI.row]);
    });

    $("#playing")[0].load();
    if(!isPaused) {
        $("#play_button").find("em")[0].innerHTML = "&#xf28c;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf28c;";
        $("#playing")[0].play();
    } else {
        $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
    }
};

playerAPI.shuffle = function shuffle() {
    for(var i = 0; i < 1 + (playerAPI.playlist.length / 2); i++) {
        do {
            var song1 = Math.floor(Math.random() * playerAPI.playlist.length);
            var song2 = Math.floor(Math.random() * playerAPI.playlist.length);
        } while (song1 !== playerAPI.row && song2 !== playerAPI.row);
        var tmp = playerAPI.playlist[song1];
        playerAPI.playlist[song1] = playerAPI.playlist[song2];
        playerAPI.playlist[song2] = tmp;
    }
};

playerAPI.repeat = function repeat() {
    if(playerAPI.repeat_flag) {
        $("#controls").find("button").find("em")[4].style.color = "#9999a5";
    } else {
        $("#controls").find("button").find("em")[4].style.color = "#ffffff";
    }

    playerAPI.repeat_flag = !playerAPI.repeat_flag;
};

playerAPI.explore_genres = function explore_genres() {
    let genres = [];
    let counter = 0;
    for(let i = 0; i < playerAPI.songs.crowd; i++) {
        for(let j = 0; j < playerAPI.songs["id" + i].genre.length; j++) {
            genres[counter++] = playerAPI.songs["id" + i].genre[j];
        }
    }

    tmp = genres.filter(function(item, pos) {
        return genres.indexOf(item) == pos;
    });
    genres = tmp;
    $("#explore").html('<h1 style="margin:0 0 50px 0; padding:20px 0 20px 0; background-color:#000000">Explore</h1>');
    for(let i = 0; i < genres.length; i++) {
        $("#explore").append(
            `<div class="col-xs-6 text-center">
                <button onclick="set_songs_by_genre('${genres[i]}')"><p style="background-color: brown; height:40vw; width:40vw; line-height:40vw">${genres[i].toUpperCase()}</p></button>
            </div>`);
    }
};

playerAPI.playing.oncanplay = function() {
    var min = parseInt(playerAPI.playing.duration / 60, 10);
    var sec = parseInt(playerAPI.playing.duration % 60);

    $("#dur").text(min + ":" + sec);
};

playerAPI.playing.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playerAPI.playing.currentTime / 60, 10);
    var sec = parseInt(playerAPI.playing.currentTime % 60);

    $("#curr").text(min + ":" + (sec > 9 ? sec : "0" + sec));
};

playerAPI.playing.ontimeupdate = function() {
    var playing = document.getElementById("playing");
    var min = parseInt(playerAPI.playing.currentTime / 60, 10);
    var sec = parseInt(playerAPI.playing.currentTime % 60);

    $("#curr").text(min + ":" + (sec > 9 ? sec : "0" + sec));

    percentage = playing.currentTime / playing.duration * 100;
    $("#myBar").css("width", percentage + '%');
};

playerAPI.playing.onended = function() {
    $("#curr").text("0:00");

    $("#myBar").css("width", "0");

    if(playerAPI.playlist.length > playerAPI.row || playerAPI.repeat_flag) {
        playerAPI.row = (playerAPI.row + 1) % playerAPI.playlist.length;
        $("#playing").find("source")[0].src = "../ressrc/songs/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].file;
        $("#playing")[0].load();
        $("#playing")[0].play();
        $("#title_artist").html(playerAPI.songs[playerAPI.playlist[playerAPI.row]].title + " - " + playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist);
        $("#expand_player").find("div").find("img")[0].src = "../ressrc/songs_images/" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].img;
        $("#expand_player").find("div").find("p")[6].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].title;
        $("#expand_player").find("div").find("p")[7].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].artist;
        $("#expand_player").find("div").find("p")[8].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].genre;
        $("#expand_player").find("div").find("p")[9].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].album;
        $("#expand_player").find("div").find("p")[10].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].release;
        $("#expand_player").find("div").find("p")[11].innerHTML = playerAPI.songs[playerAPI.playlist[playerAPI.row]].duration;
        $("#expand_lyrics").html("<pre>" + playerAPI.songs[playerAPI.playlist[playerAPI.row]].lyrics + "</pre>");
    } else {
        $("#play_button").find("em")[0].innerHTML = "&#xf01d;";
        $("#curr_play_button").find("em")[0].innerHTML = "&#xf01d;";
    }
};

/*Song Volume*/
$('.muted').click(function () {
    if(playerAPI.playing.muted) {
        $('.volumeBar').css('width', playerAPI.stored_volume + '%');
    } else {
        $('.volumeBar').css('width', '0');
    }
    playerAPI.playing.muted = !playerAPI.playing.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    playerAPI.playing.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});

var updateVolume = function (x, vol) {
    var volume = $('.volume');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.volumeBar').css('width', percentage + '%');
    playerAPI.playing.volume = percentage / 100;
    playerAPI.stored_volume = percentage;
    //change sound icon based on volume
    if (playerAPI.playing.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (playerAPI.playing.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};


//CURRENT TIME BAR
//current time bar event
var currentTimeDrag = false;
$('#myProgress').on('mousedown', function (e) {
    currentTimeDrag = true;
    updateCurrTime(e.pageX);
});

$(document).on('mouseup', function (e) {
    if (currentTimeDrag) {
        currentTimeDrag = false;
        updateCurrTime(e.pageX);
    }
});

$(document).on('mousemove', function (e) {
    if (currentTimeDrag) {
        updateCurrTime(e.pageX);
    }
});

var updateCurrTime = function (x, currTime) {
    var progress = $('#myProgress');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (currTime) {
        percentage = currTime * 100;
    } else {
        var position = x - progress.offset().left;
        percentage = 100 * position / progress.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //change song current time bar
    var elem = document.getElementById("myBar");
    $('#myBar').css('width', percentage + '%');
    playerAPI.playing.currentTime = playerAPI.playing.duration * percentage / 100;
    playerAPI.width = percentage;
};

$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});

function toggle_class_in(elem) {
    $(elem).toggleClass("in");
}

function contains_word(str, substr) {
    expr = new RegExp(substr.toLowerCase());
    return expr.test(str.toLowerCase());
}