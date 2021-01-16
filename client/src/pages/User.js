import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import API from "../utils/API";
import NavBar from "../components/NavBar"

// RENDER USER INFO

function User(props) {
  const [user, setUser] = useState({})
  console.log(props);
  // When this component mounts, grab the user with the _id of props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  // const match = useRouteMatch('/users/:id');
  // console.log(match);

  useEffect(() => {
    API.getUser(props._id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
               <ProfileCard 
               heading={user.username}
               id={user._id}
               email={user.email}>
               </ProfileCard>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link className="text-dark" to="/Explore">← Back to Explore</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default User;
