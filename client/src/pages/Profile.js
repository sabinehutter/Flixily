import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link, useRouteMatch, Switch, Router, Route } from "react-router-dom";
import User from "./User";

import NavBar from "../components/NavBar"


function Profile() {

  return (
    //return inputs here from the user details
        // in the pages file we are importing components that will be used to render the page
          // we then import the page into the app.js file to combine everything together
            // the index.js file then renders the app with all of its pages and components using the reactDom.render method
    

      <div>
      <NavBar />
      {/* Can I just return user below? */}
      <User />
      </div>
      
    
    );
  }


export default Profile;
