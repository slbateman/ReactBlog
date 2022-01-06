import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "./actions.js/articleActions";
import { getComments } from "./actions.js/commentActions";
import { getReplies } from "./actions.js/replyActions";
import { getUsers } from "./actions.js/userActions";

function App() {
  const dispatch = useDispatch()

  console.log("APP")

  useEffect(() => {
  dispatch(getArticles())
  dispatch(getComments())
  dispatch(getReplies())
  dispatch(getUsers())
  }, [dispatch])

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
        <TemNavbar />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog
            />
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
          <Route path="/newArticle">
            <NewArticle />
          </Route>
        </Switch>
      </div>
      <TemFooter />
    </div>
  );
}

export default App;
