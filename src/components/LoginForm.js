import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Users from "../data/Users"

function LoginForm({email, setEmail, setLoggedIn, userIndex, setUserIndex }) {
  const [password, setPassword] = useState("");

  const userAuth = () => {
    setUserIndex(Users.findIndex((element) => element.email === email))
    console.log(Users[userIndex].password)
    if (email === Users[userIndex].email) {
      console.log(email);
      if (password === Users[userIndex].password) {
        console.log(password);
        setLoggedIn(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: email,
            loggedIn: true,
          })
        );
        window.location.replace('/login/profile');
      } else console.log("password does not match provided email")
    } else console.log("user not in system")
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <Row className="justify-content-center">
        <Col >
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              userAuth();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <Link to="/login/newUser">signup now</Link>
        </Col>
      </Row>
    </div>
  );
}

export default LoginForm;
