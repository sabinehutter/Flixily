// EXTERNAL OMDB CALL, WITH METHODS
// random movie return
// return based on ID 

import randomMovie from "./moviesArray";


import axios from "axios";
// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
  getRandomMovie: function() {
    let movie = randomMovie();
    return axios.get("http://www.omdbapi.com/?apikey=79bf881d&t=" + movie);
  },
  getMovie: function(movie) {
    return axios.get("http://www.omdbapi.com/?apikey=79bf881d&t=" + movie);
  },
};