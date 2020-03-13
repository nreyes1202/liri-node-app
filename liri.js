require("dotenv").config();
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
console.log(keys.spotify)
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment")

// Grab user info
var command = process.argv[2];
console.log(process.argv[2])

var query = process.argv[3];
console.log(process.argv[3]);
// check info
// depending on info execute some code
// calculator activity