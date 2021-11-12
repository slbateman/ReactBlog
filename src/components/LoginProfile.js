import Users from "../data/Users";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const LoginProfile = ({ email, loggedIn, userIndex, setLoggedIn, setUserIndex }) => {
  
  let history = useHistory()
    console.log(userIndex);
  useEffect(() => {
    if (loggedIn === false) {
      history.push("/login");
    }
  }, [loggedIn, history]);

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "",
        loggedIn: false,
      })
    );
    history.push("/login");
  };

  return (
    <div className="login-profile">
      <Row className="justify-content-center">
        <Col>
          <Form>
            <Form.Label htmlFor="inlineFormInputGroup">Username</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                placeholder="Username"
                value={Users[userIndex].userName}
                readOnly
              />
            </InputGroup>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                placeholder="Admin"
                value={Users[userIndex].role}
                readOnly
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="John"
                value={Users[userIndex].fName}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Doe"
                value={Users[userIndex].lName}
                readOnly
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={Users[userIndex].email}
                readOnly
              />
            </Form.Group>
            <Link to="/login/profile/edit">
              <Button className="m-1" variant="primary">
                Edit Profile
              </Button>
            </Link>
            <br />
            <Button className="m-1" variant="primary" onClick={() => logout()}>
              Log out
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginProfile;
