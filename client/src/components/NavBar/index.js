import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/img/Flixily-Logo.png'

const style = {
    color: "black"
}

function NavBar(user) {
    console.log("in navbar comp", user);
    return (
        <>
            <Navbar style= {{backgroundColor: "#FFDD67"}}  expand="lg">
                <Navbar.Brand className="" href="/explore">
                    <a href="/explore">
                        <img src={Logo} style={{ width: 100, marginTop: -7 }} />
                    </a>
                </Navbar.Brand>

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