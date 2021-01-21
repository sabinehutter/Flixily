import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/img/Flixily-Logo2.png"


const style = {
    color: "white"
}
const boxshadow = {
    boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
}

function NavBar(user) {
    console.log("in navbar comp", user);
    
    return (
       
        <>
         
            <Navbar className="color-nav" expand="lg" style={{boxshadow, height: "90px"}}>
            
                <Navbar.Brand className= "mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3" href="/explore">
                {/* <a href="/explore"> */}
                        <img className="FlixilyLogo"src={Logo} alt="Flixily logo" style={{ height: "70px", marginTop: "10px" }} />
                    {/* </a> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto row" style  =  {{marginTop : "5px"}}>
                   
                        <Link className="col NavHover" to="/explore" style={style}>Explore</Link>
                        <Link className="col NavHover" to="/favorites" style={style}>Favorites</Link>
                        <Link className="col NavHover" to="/user" style={style}>Profile</Link>
                    </Nav>
            </Navbar>
    
        </>
    )
}

export default NavBar