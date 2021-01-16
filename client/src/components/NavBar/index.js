import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/img/Flixily-Logo.png'

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
            <Navbar style= {{backgroundColor: "#FFDD67", boxshadow}} expand="lg" >
            <Navbar.Brand className="" href="/explore">
                    <a href="/explore">
                        <img src={Logo} style={{ width: 100, marginTop: -7 }} />
                    </a>
                </Navbar.Brand>                
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