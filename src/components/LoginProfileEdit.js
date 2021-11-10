import Users from "../data/Users";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";

const LoginProfileEdit = ({ userIndex }) => {
  const [firstName, setFirstName] = useState(Users[userIndex].fName);
  const [lastName, setLastName] = useState(Users[userIndex].lName);
  const [email, setEmail] = useState(Users[userIndex].email);
  const [oldPassword, setOldPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const userUpdate = () => {
    if (oldPassword === "") {
      window.location.replace("/login/profile");
    } else if (
      oldPassword === Users[userIndex].password &&
      password1 === password2
    ) {
      window.location.replace("/login/profile");
    } else {
      console.log("passwords are incorrect");
      window.location.replace("/login/profile");
    }
  };

  return (
    <div className="login-profile-edit">
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={() => userUpdate()}>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
            <Button className="m-1" variant="success" type="submit">
              Submit Changes
            </Button>
            <br />
            <br/>
            <Button className="m-1" variant="danger" type="submit">
              Delete Account
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginProfileEdit;
