// EXTERNAL OMDB CALL, WITH METHODS
// random movie return
// return based on ID 

import randomMovie from "./moviesArray";
import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
  getRandomMovie: function() {
    let movie = randomMovie();
    return axios.get("https://www.omdbapi.com/?apikey=79bf881d&t=" + movie);
  },
  getMovie: function(movie) {
    return axios.get("https://www.omdbapi.com/?apikey=79bf881d&t=" + movie);
  },

  likeMovie: function(movie) {
    return axios.post("/api/like/", movie)
  },

  // Gets all comments
  getMovies: function() {
    console.log("getting movies")
    return axios.get("/api/saved/");
  },
  

  rateMovie: function(id, rating) {
    console.log("tryna change the rate", rating);
    return axios.post("/api/saved/rate/" + id, {id: id, rating: rating});
  },

  deleteMovie: function(id) {
    return axios.delete("/api/saved/delete/" + id);
  }
};