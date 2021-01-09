import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

// RENDER USER INFO

function User() {
  const [user, setUser] = useState({})
  // When this component mounts, grab the user with the _id of props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  const match = useRouteMatch('/users/:id');
   
  useEffect(() => {
    API.getUser(match.params.id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [match.params.id])

  return (
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
               <Card heading={user.username}>
                  {user.body}
               </Card>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link className="text-dark" to="/users">← Back to all users</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default User;
