import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import TemLogo from "./components/TemLogo";
import HomeLogo from "./components/HomeLogo";
import TemNavbar from "./components/TemNavbar";
import TemFooter from "./components/TemFooter";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Authors from "./components/Authors";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      setLoggedIn(userInfo.loggedIn);
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "",
          loggedIn: false,
        })
      );
    };
  }, [loggedIn]);

  return (
    <div className="App">
      <div className="logo">
        <Switch>
          <Route exact path="/">
            <HomeLogo />
          </Route>
          <Route path="/">
            <TemLogo />
          </Route>
        </Switch>
      </div>
      <div className="top-nav">
        <TemNavbar loggedIn={loggedIn} />
      </div>
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
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </div>
      <TemFooter loggedIn={loggedIn} />
    </div>
  );
}

export default App;
