import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectUserInfo } from "../store/Reducer";

function TemFooter() {
  const userInfo = useSelector(selectUserInfo)
  let profile
  let profileLink
  userInfo.loggedIn ? profile = "profile" : profile = "login"
  userInfo.loggedIn ? profileLink = "/login/profile" : profileLink = "/login"

  return (
    <div className="tem-footer">
      <Navbar
        bg="dark"
        variant="dark"
        fixed="bottom"
      >
            <Navbar.Text className="p-3">
              Copyright © 2021
              <br />
              Steve Bateman
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex">
                <Link className="nav-link" to="/">
                  home
                </Link>
                <Link className="nav-link" to="/blog">
                  blog
                </Link>
                <Link className="nav-link" to="/authors">
                  authors
                </Link>
                <Link className="nav-link" to="/contact">
                  contact
                </Link>
                <Link className="nav-link" to={profileLink}>
                  {profile}
                </Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TemFooter;
