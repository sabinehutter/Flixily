import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className= "mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3" href="/explore">Flixily</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto">
                        <Nav.Link href="/explore">Explore</Nav.Link>
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                        <Nav.Link href="/user">Profile</Nav.Link>
                    </Nav>
            </Navbar>
        </>
    )
}

export default NavBar