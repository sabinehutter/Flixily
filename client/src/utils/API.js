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

  likeMovie: function(movie) {
    return axios.post("/api/like/", movie)
  },

  // Gets all comments
  getMovies: function() {
    console.log("getting movies")
    return axios.get("/api/saved/");
  },
  
  // Deletes the comment with the given id
  rateMovie: function(id, rating) {
    return axios.post("/api/list/rate/" + id, rating);
  },
};