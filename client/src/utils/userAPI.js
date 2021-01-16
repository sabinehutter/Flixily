import axios from "axios";

export default {
  loginUser: function (user) {
    return axios.post("/api/user/login", user)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate/")
  },
  getUser: function() {
    console.log("getting user")
    return axios.get("/api/user/");
  }

};