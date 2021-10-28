import Navbar from "../../node_modules/react-bootstrap/Navbar";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import { Link } from "react-router-dom";

function TemFooter() {
  return (
    <div class="tem-footer">
      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row>
              <Col className="d-flex">
                <Navbar.Text>Copyright 2021 Steve Bateman</Navbar.Text>
              </Col>
              <Col >
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
              </Col>
            </Row>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TemFooter;
