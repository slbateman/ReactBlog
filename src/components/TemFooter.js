import Navbar from "../../node_modules/react-bootstrap/Navbar";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import { Link } from "react-router-dom";

function TemFooter() {
  return (
    <div className="tem-footer">
      <Navbar
        className="justify-content-center"
        bg="dark"
        variant="dark"
        fixed="bottom"
      >
        <Row>
          <Col>
            <Navbar.Text>
              Copyright © 2021
              <br />
              Steve Bateman
            </Navbar.Text>
          </Col>
          <Col>
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
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default TemFooter;
