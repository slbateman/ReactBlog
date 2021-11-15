import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginSignup({
  email,
  setEmail,
  userBase,
  userInfo,
  setUserInfo,
  setUserBase,
  userIndex,
  setUserIndex,
  loggedIn,
  setLoggedIn,
}) {

  console.log("--SignUp--")

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  let history = useHistory();

  const userCreate = () => {
    if (password1 === password2) {
      console.log(userName);
      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(password1);
      console.log(password2);
      let newUserArr = [
        ...userBase,
        {
          userName: userName,
          fName: firstName,
          lName: lastName,
          email: email,
          password: password1,
          role: "user",
          avatar: "",
        },
      ];
      localStorage.setItem("users", JSON.stringify(newUserArr));
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          loggedIn: true,
        })
      );
      setUserInfo(JSON.parse(localStorage.getItem("user")));
      setUserBase(newUserArr);
      setLoggedIn(true);
      history.push("/");
    } else {
      console.log(userName);
      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(password1);
      console.log(password2);
      console.log("passwords do not match");
    }
  };

  return (
    <div className="login-signup">
      <Row className="justify-content-center">
        <Col>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              userCreate();
            }}
          >
            <Form.Label htmlFor="inlineFormInputGroup">Username</Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </InputGroup>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  setUserIndex(
                    userBase.findIndex(
                      (element) => element.email === e.target.value
                    )
                  );
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default LoginSignup;