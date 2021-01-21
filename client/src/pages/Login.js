import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

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
class Login extends Component {
  state = {
    email: "",
    password: ""
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
    event.preventDefault();
    if (this.state.email && this.state.password) {
      userAPI.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log("In handleFormSubmit", res)
          if (res.status === 200) {
            this.props.setUserState(res.data)
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <div className="Login">
            <Container >
              <div style = {{backgroundColor: "white", opacity: "0.95", borderRadius: '50px!important' , position: "relative"}}> 
              <Row>
                <Col size="12">
                <h1 style={{paddingLeft: "50px",paddingBottom: "10px", paddingTop: "100px", color: "#FFDD67"}}>Welcome!</h1>
                  <form style={formstyle}>
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

                    <FormBtn className="btn btn-warning" style  = {{color : "white"}}
                      disabled={!(this.state.email && this.state.password)}
                      onClick={this.handleFormSubmit}
                    >
                      <button className="btn btn-warning"   style  = {{color : "white"}} type="button">
                        Log in
                </button>
                    </FormBtn>
                    <Link to="/signup">
                      <FormBtn className="btn btn-warning" style  = {{color : "white"}}>
                        <button type="button"  style  = {{color : "white"}} className="btn btn-warning" >Signup
               </button></FormBtn>
                    </Link>
                  </form>
                </Col>
              </Row>
              </div>
            </Container>
      </div>
        );
      }
    }
    
export default Login;