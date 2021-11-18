import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./store/Store"
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
import NewArticle from "./components/NewArticle";
import { useState, useEffect } from "react";
import Users from "./data/Users";
import ArticleList from "./data/ArticleList";

function App() {
  console.log("--App--");

  const [loggedIn, setLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  if (!userInfo) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "",
        loggedIn: false,
      })
    );
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }
  useEffect(() => {
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
      setUserInfo(JSON.parse(localStorage.getItem("user")));
    }
  }, [userInfo]);

  const [userBase, setUserBase] = useState(
    JSON.parse(localStorage.getItem("users"))
  );
  if (!userBase) {
    localStorage.setItem("users", JSON.stringify(Users));
    setUserBase(JSON.parse(localStorage.getItem("users")));
  } else {
    localStorage.setItem("users", JSON.stringify(userBase));
  }
  useEffect(() => {
    if (!userBase) {
      localStorage.setItem("users", JSON.stringify(Users));
      setUserBase(JSON.parse(localStorage.getItem("users")));
    } else {
      localStorage.setItem("users", JSON.stringify(userBase));
    }
  }, [userBase]);

  const [blogBase, setBlogBase] = useState(
    JSON.parse(localStorage.getItem("blogs"))
  );
  if (!blogBase) {
    localStorage.setItem("blogs", JSON.stringify(ArticleList));
    setBlogBase(JSON.parse(localStorage.getItem("blogs")));
  } else {
    localStorage.setItem("blogs", JSON.stringify(blogBase));
  }
  useEffect(() => {
    if (!blogBase) {
      localStorage.setItem("blogs", JSON.stringify(ArticleList));
      setBlogBase(JSON.parse(localStorage.getItem("blogs")));
    } else {
      localStorage.setItem("blogs", JSON.stringify(blogBase));
    }
  }, [blogBase]);

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
            <Blog
              blogBase={blogBase}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              userBase={userBase}
              setUserBase={setUserBase}
            />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              userBase={userBase}
              setUserBase={setUserBase}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          </Route>
          <Route path="/newArticle">
            <NewArticle
              blogBase={blogBase}
              setBlogBase={setBlogBase}
              userInfo={userInfo}
              userBase={userBase}
            />
          </Route>
        </Switch>
      </div>
      <TemFooter loggedIn={loggedIn} />
    </div>
  );
}

export default App;
