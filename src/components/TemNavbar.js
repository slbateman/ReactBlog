import Navbar from "../../node_modules/react-bootstrap/Navbar";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import { Link } from "react-router-dom";

function TemNavbar() {
  return (
    <div>
      <Navbar className="justify-content-center" bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
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
              <Link className="nav-link" to="/login">
                <Button variant="dark">login</Button>
              </Link>
            </Nav>
            </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TemNavbar;
