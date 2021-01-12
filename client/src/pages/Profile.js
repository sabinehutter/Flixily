import React, { Component } from "react";
import API from "../utils/API";
import User from "./User";

import NavBar from "../components/NavBar"
import { restart } from "nodemon";

class ProfileCard extends Component {
  state = {
    id: '',
    username: '',
  }

componentDidMount() {
  this.getUser()
};

getUser = () => {
  API.getUserInfo()
    .then(res =>
      console.log(res)
      this.setState({ 
        id: res.data.id,
        username: res.data.username,
      })
    });
};

render() {
  return (
    

      <div>
      <NavBar />
      {/* Can I just return user below? */}
      <User />
      </div>
      
    
    );
  }


export default ProfileCard;
