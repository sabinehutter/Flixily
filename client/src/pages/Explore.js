import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, Switch, Router, Route } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";
import ReactCardFlip from 'react-card-flip';

import NavBar from "../components/NavBar"



import SwipingCard from "../components/SwipingCard"
import User from "./User";


function Explore() {
  // const [comment, setComment] = useState({})
  // When this component mounts, grab the comment with the _id of props.match.params.id
  // e.g. localhost:3000/explore/599dcb67f0f16317844583fc  

  return (
    <>
      {/* <NavBar /> */}
      <Router>
      <Switch>
        <Route exact path = "/user"  component= {User}/> 
       
      </Switch>
      </Router>
      {/* <SwipingCard /> */}
    </>
    );
  }


export default Explore;
