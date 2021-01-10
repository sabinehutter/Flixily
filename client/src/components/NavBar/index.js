import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const style = {
    color: "black"
}

function NavBar(user) {
    console.log("in navbar comp", user);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className= "mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3" href="/explore">Flixily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto">
            
                        <Link to="/explore" style={style}>Explore</Link>
                        <Link to="/favorites" style={style}>Favorites</Link>
                        <Link to="/user" style={style}>Profile</Link>
                    </Nav>
            </Navbar>
        </>
    )
}

export default NavBar