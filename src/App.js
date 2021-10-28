import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "../node_modules/react-bootstrap/Container";
import Col from "../node_modules/react-bootstrap/Col";
import Row from "../node_modules/react-bootstrap/Row";
import TemLogo from "./components/TemLogo";
import HomeLogo from "./components/HomeLogo";
import { Route, Switch } from "react-router-dom";
import TemNavbar from "./components/TemNavbar";
import TemFooter from "./components/TemFooter";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Authors from "./components/Authors";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Row>
        <Col lg="3">
          <Switch>
            <Route exact path="/">
              <HomeLogo />
            </Route>
            <Route path="/">
              <TemLogo />
            </Route>
          </Switch>
        </Col>
        <Col>
          <TemNavbar />
        </Col>
      </Row>
      <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      </div>
      <TemFooter />
    </div>
  );
}

export default App;
