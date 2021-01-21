import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import {  Redirect, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import  "../components/Background/Background.css";


const formstyle = {
  margin: "auto",
  width: "100%",
  boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)",
  height: "20REM",
  paddingRight: "50px",
  paddingLeft: "50px",
  // paddingBottom: "50px",
  color: "#FFDD67",
  // zIndex: "9998!important"
}


class Signup extends Component {
  state = {
    email: "1@1",
    username: "one",
    password: "1",
    passwordConf: "1"
  };
  

  componentDidMount() {
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("handleformsubmit");
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state)
      userAPI.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          console.log("handlesubmit.then");
          if(res.status === 200 ){
            this.props.authenticate();
            return <Redirect to="/explore" />
          }
        })
        .catch(err => {
          console.log(".catch");
          console.log(err.response.data)}
          );
        
    }
  };

 
  render() {
    return (
      <div className="Signup">

    
      <Container fluid>
      <div style = {{backgroundColor: "white", opacity: "0.95", borderRadius: '50px!important' , position: "relative"}}> 
        <Row>
          <Col size="12">
          <h1 style={{paddingLeft: "50px",paddingBottom: "10px", paddingTop: "100px", color: "#FFDD67"}}>Sign Up!</h1>
            <form style={formstyle}>
            <div className="SignupCard">
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="(required)"
                type="password"
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="(required)"
                type="password"
              />
                         
              <FormBtn className="btn btn-warning" style  = {{color : "white"}}
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                <button type="button" className="btn btn-warning" style  = {{color : "white"}}>
                Sign Up
                </button>
              </FormBtn>
              <Link to="/">
              
               <FormBtn className="btn btn-warning" style  = {{color : "white"}} > 
               <button type="button" className="btn btn-warning" style  = {{color : "white"}}>
                 Login 
                 </button>
                 </FormBtn>
               
             </Link>
             </div> 
            </form>

          </Col>
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/explore'/>: <div></div>}

      </div>
      </Container>
      </div>
    );
  }
}


export default Signup;