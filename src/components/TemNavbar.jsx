import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../store/Reducer";


function TemNavbar() {
  const userInfo = useSelector(selectUserInfo)
  let profile
  let profileLink
  userInfo.loggedIn ? profile = "profile" : profile = "login"
  userInfo.loggedIn ? profileLink = "/login/profile" : profileLink = "/login"

  return (
    <div>
      <Navbar
        className="justify-content-center"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="justify-content-center">
              <Link className="nav-link" to="/">
                <Button variant="dark">home</Button>
              </Link>
              <Link className="nav-link" to="/blog">
                <Button variant="dark">blog</Button>
              </Link>
              <Link className="nav-link" to="/authors">
                <Button variant="dark">authors</Button>
              </Link>
              <Link className="nav-link" to="/contact">
                <Button variant="dark">contact</Button>
              </Link>
              <Link className="nav-link" to={profileLink}>
                <Button variant="dark">{profile}</Button>
              </Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TemNavbar;
