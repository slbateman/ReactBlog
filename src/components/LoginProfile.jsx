// import Users from "../data/Users";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const LoginProfile = ({
  email,
  loggedIn,
  userIndex,
  setLoggedIn,
  setUserIndex,
  userBase,
}) => {
  console.log("--Login Profile--");

  let isAuthor = false;
  if (userBase[userIndex].role === "author" || userBase[userIndex].role === "admin") {
    isAuthor = true;
  } else {
    isAuthor = false;
  }

  let history = useHistory();
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
          <Link to="/newArticle">
            <Button
              style={isAuthor ? { display: "block" } : { display: "none" }}
            >
              Add New Article
            </Button>
          </Link>
          <br />
          <br />
          <Form>
            <Form.Label htmlFor="inlineFormInputGroup">Username</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                placeholder="Username"
                value={userBase[userIndex].userName}
                readOnly
              />
            </InputGroup>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                placeholder="Admin"
                value={userBase[userIndex].role}
                readOnly
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="John"
                value={userBase[userIndex].fName}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Doe"
                value={userBase[userIndex].lName}
                readOnly
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userBase[userIndex].email}
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
