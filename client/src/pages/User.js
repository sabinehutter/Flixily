import React from "react";
import { Link } from "react-router-dom";
import "../components/ProfileCard/profileStyle.css";
import UserPic from  "../assets/img/User@3x.png"


// RENDER USER INFO

function User(props) {

  return (
    <div className="card" style = {{margin : "auto",  top : "50px"}}>

      <div className="card-header">
        <img src={UserPic} alt="movie"/>
      </div>
      <div className="card-content">
        <h3>Welcome {props.username} !</h3>
        <h4>Your account is currently linked to {props.email}</h4>
        <div className="buttons">
          <Link to="/Explore">
            <button style={{ color: "white" }} className="btn btn-warning">
              Get Back to Liking!
        </button>
          </Link>
        </div>
      </div>
      </div >
      )}
    
    
    export default User;
