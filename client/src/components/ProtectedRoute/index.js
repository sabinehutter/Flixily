import React from "react";
import { Route, Redirect } from "react-router-dom";

// check the redirect to "/" code in line 11, caused issues during testing
const ProtectedRoute = ({ children }) => {
   console.log("Inside ProtectedRoute", children)
   return (
   <Route >
      {children.props._id
       ? children
       : <Redirect to='/' />}
   </Route>
)}
 export default ProtectedRoute;