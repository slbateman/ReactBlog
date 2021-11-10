import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({email, setEmail}) {
  const [password, setPassword] = useState("");

  const userAuth = () => {
    console.log(email);
    console.log(password);
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
