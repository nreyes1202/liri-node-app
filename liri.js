// Dependencies

require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
console.log(keys.spotify)
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment")

// Grab user info
var command = process.argv[2];
console.log(command)

var query = process.argv.slice(3).join(" ");
console.log(query);

// Use Axios to get back results from bands in town (Concert-This)

// if/else

if (command == "concert-this") {

    var queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    console.log(queryURL);

    axios.get(queryURL).then(
        function (bandResponse) {
            console.log("Venue: " + bandResponse.data[0].venue.name);
            console.log("City: " + bandResponse.data[0].venue.city);
            console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
        });
} else if (command == "spotify-this-song") { 
    query = query || "The Sign by Ace of Base";
    spotify.search({ type: 'track', query: query }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items);
    });
} else if (command == "movie-this") {
    query = query || "Mr. Nobody";

    var queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + query;
    console.log(queryURL);

    axios.get(queryURL).then(
        function (movieResponse) {
            console.log(movieResponse.data);
            // console.log("City: " + bandResponse.data[0].venue.city);
            // console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
        });


}


// look into fs package
// npm init to get package.json
//require fs package



;


// Use switch-case statements?
// define bandName