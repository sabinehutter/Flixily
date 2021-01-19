import React, { Component } from "react";

import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const formstyle= {
margin: "auto",
width: "50%",
boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)"
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
          if(res.status === 200 ){
             this.props.setUserState(res.data)
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    
    return (
      <div className="Signup">
      <Container fluid>
        <Row>
          <Col size="12">
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
              
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                <button type="button" className="btn btn-outline-warning" data-mdb-ripple-color="dark">
                Log in
                </button>
              </FormBtn>
             <Link to="/signup">
               <FormBtn> 
               <button type="button" className="btn btn-outline-warning" data-mdb-ripple-color="light">Signup 
               </button></FormBtn>
             </Link>
            </form>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Login;