import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, updateUserInfo } from "../store/Reducer";
// import Users from "../data/Users"

function LoginForm({
  email,
  setEmail,
}) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  let history = useHistory();

  const userCheck = (e) => {
    setUser(users.find((element) => element.email === e));
  };

  const userAuth = () => {
    if (user) {
      if (password === user.password) {
        dispatch(
          updateUserInfo({
            userID: user.userID,
            loggedIn: true,
          })
        );
        history.push("/login/profile");
      } else console.log("password does not match provided email");
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
                  userCheck(e.target.value);
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
