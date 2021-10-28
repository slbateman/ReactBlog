import Navbar from "../../node_modules/react-bootstrap/Navbar";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import { Link } from "react-router-dom";

function TemNavbar() {
  return (
    <div class="tem-navbar">
      <Navbar className="justify-content-center" bg="dark" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Container>
            <Nav className="justify-content-center"> 
              <Link className="nav-link" to="/">
                <Button variant="secondary">home</Button>
              </Link>
              <Link className="nav-link" to="/blog">
                <Button variant="secondary">blog</Button>
              </Link>
              <Link className="nav-link" to="/authors">
                <Button variant="secondary">authors</Button>
              </Link>
              <Link className="nav-link" to="/contact">
                <Button variant="secondary">contact</Button>
              </Link>
              <Link className="nav-link" to="/login">
                <Button variant="secondary">login</Button>
              </Link>
            </Nav>
            </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TemNavbar;
