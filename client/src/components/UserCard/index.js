import React from "react";
import { Link} from "react-router-dom";
import {Row} from "../Grid";
import "../ProfileCard/profileStyle.css";

function UserCard(props) {
    return (
        <div>
            <Row>
                <div className="pro col rounded text-center bg-yellow mt-4 mb-4 p-4">
                    <h1>Your Profile</h1>
                </div>
            </Row>
            <div className="cardd-container">
                <div className="card-container">
                    <br>
                    </br>
                    <h3 className="h3-v2">{props.username}</h3>
                    <h6 className="h3-v2">{props.email}</h6>
                    <br />
                    <br />
                    Update your FLIXSTER bio!
          <br>
                    </br>
                    <form>
                        {/* <label for="Update your FLIXSTER bio!"></label> */}
                        <input type="text"></input>
                        <input type="submit"></input>
                    </form>
                    <div className="buttons">
                        <Link to="/Explore">
                            <button className="buttons-primary">
                                Browse Flix
        </button>
                        </Link>
                    </div>
                    <div className="skills">
                        <h6>FLIXSTER Milestones</h6>
                        <ul>
                            <li>Movies Rated</li>
                            <li>Average Rating</li>
                            <li>Movies Liked</li>
                            <li>Movies Disliked</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserCard;