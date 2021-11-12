import LoginForm from "./LoginForm";
import LoginSignup from "./LoginSignup";
import LoginProfile from "./LoginProfile";
import LoginProfileEdit from "./LoginProfileEdit";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Users from "../data/Users";

function Login({ loggedIn, setLoggedIn }) {
  
  const [email, setEmail] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"))
  const [userIndex, setUserIndex] = useState(Users.findIndex((element) => element.email === userInfo.email));

  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login">
          {loggedIn ? (
            <Redirect to="/login/profile" />
          ) : (
            <LoginForm
              email={email}
              setEmail={setEmail}
              setLoggedIn={setLoggedIn}
              userIndex={userIndex}
              setUserIndex={setUserIndex}
            />
          )}
        </Route>
        <Route path="/login/newUser">
          <LoginSignup
            email={email}
            setEmail={setEmail}
            setLoggedIn={setLoggedIn}
            userIndex={userIndex}
            setUserIndex={setUserIndex}
          />
        </Route>
        <Route exact path="/login/profile">
          {loggedIn ? (
            <LoginProfile
              email={email}
              setEmail={setEmail}
              loggedIn={loggedIn}
              userIndex={userIndex}
              setUserIndex={setUserIndex}
              setLoggedIn={setLoggedIn}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/login/profile/edit">
          {loggedIn ? (
            <LoginProfileEdit
              loggedIn={loggedIn}
              userIndex={userIndex}
              setUserIndex={setUserIndex}
              setLoggedIn={setLoggedIn}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
