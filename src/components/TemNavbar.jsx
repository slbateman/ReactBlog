import Navbar from "react-bootstrap/esm/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function TemNavbar({ loggedIn }) {
  const [profile, setProfile] = useState("login");
  const [profileLink, setProfileLink] = useState("/login")

  useEffect(() => {
    loggedIn ? setProfile("profile"): setProfile("login")
    loggedIn ? setProfileLink("/login/profile"): setProfileLink("/login")
  }, [loggedIn]);

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