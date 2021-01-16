import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const style = {
    color: "black"
}
const boxshadow = {
    boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
}

function NavBar(user) {
    console.log("in navbar comp", user);
    return (
        <>
            <Navbar bg="light" expand="lg" style={boxshadow}>
                <Navbar.Brand className= "mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3" href="/explore">Flixily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto row">
                   
                        <Link className="col" to="/explore" style={style}>Explore</Link>
                        <Link className="col" to="/favorites" style={style}>Favorites</Link>
                        <Link className="col" to="/user" style={style}>Profile</Link>
                    </Nav>
            </Navbar>
        </>
    )
}

export default NavBar