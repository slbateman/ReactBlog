import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, selectUsers, updateUsers } from "../store/Reducer";

const LoginProfileEdit = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const users = useSelector(selectUsers);
  const user = users.find((e) => e.userID === userInfo.userID);

  const [firstName, setFirstName] = useState(user.fName);
  const [lastName, setLastName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  let history = useHistory();

  const userUpdate = () => {
    if (oldPassword === "") {
      dispatch(
        updateUsers({
          userID: user.userID,
          userName: user.userName,
          fName: firstName,
          lName: lastName,
          email: email,
          password: user.password,
          role: user.role,
          avatar: user.avatar,
          bio: user.bio,
        })
      );
      history.push("/login/profile");
    } else if (oldPassword === user.password && password1 === password2) {
      dispatch(
        updateUsers({
          userID: user.userID,
          userName: user.userName,
          fName: firstName,
          lName: lastName,
          email: email,
          password: password1,
          role: user.role,
          avatar: user.avatar,
          bio: user.bio,
        })
      );
      history.push("/login/profile");
    } else {
      console.log("passwords are incorrect");
      history.push("/login/profile");
    }
  };

  return (
    <div className="login-profile-edit">
      <Row className="justify-content-center">
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              userUpdate();
            }}
          >
            <Form.Label htmlFor="inlineFormInputGroup">Username</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                placeholder="Username"
                value={user.userName}
                readOnly
              />
            </InputGroup>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control placeholder="Admin" value={user.role} readOnly />
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
            <br />
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
