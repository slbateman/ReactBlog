import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, selectUsers, updateUserInfo } from "../store/Reducer";

const LoginProfile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const users = useSelector(selectUsers);
  const user = users.find((element) => element.userID === userInfo.userID);

  let isAuthor = false;
  let history = useHistory();

  if (user.role === "author" || user.role === "admin") {
    isAuthor = true;
  } else {
    isAuthor = false;
  }

  if (userInfo.loggedIn === false) {
    history.push("/login");
  }

  const logout = () => {
    dispatch(
      updateUserInfo({
        userID: 0,
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
              <Form.Control placeholder="John" value={user.fName} readOnly />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Doe" value={user.lName} readOnly />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user.email}
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
