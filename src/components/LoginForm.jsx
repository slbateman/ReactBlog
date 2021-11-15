import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import Users from "../data/Users"

function LoginForm({
  email,
  setEmail,
  setLoggedIn,
  loggedIn,
  userIndex,
  setUserIndex,
  userBase,
}) {

  console.log("--Login Form--")

  const [password, setPassword] = useState("");
  let history = useHistory();

  const indexCheck = (e) => {
    setUserIndex(userBase.findIndex((element) => element.email === e));
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: e,
        loggedIn: false,
      })
    );
  };

  const userAuth = () => {
    if (userIndex >= 0) {
      if (email === userBase[userIndex].email) {
        console.log(email);
        if (password === userBase[userIndex].password) {
          console.log(password);
          setLoggedIn(true);
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: email,
              loggedIn: true,
            })
          );
          history.push("/login/profile");
        } else console.log("password does not match provided email");
      } else console.log("user not in system");
    } else console.log("user does not exist");
  };

  return (
    <div className="login-form">
      <Row className="justify-content-center">
        <Col>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  indexCheck(e.target.value);
                }}
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