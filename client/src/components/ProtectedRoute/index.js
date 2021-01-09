import React from "react";
import { Route, Redirect } from "react-router-dom";

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