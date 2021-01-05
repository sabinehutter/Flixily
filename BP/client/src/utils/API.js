// EXTERNAL OMDB CALL, WITH METHODS
// random movie return
// return based on ID 

import axios from "axios";
// Export an object containing methods we'll use for accessing the Dog.Ceo API
export default {
  getRandomMovie: function() {
    return axios.get("API CALL");
  },
  getMovie: function(movie) {
    return axios.get("API CALL" + movie);
  },
};