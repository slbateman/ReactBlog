import LoginForm from "./LoginForm";
import LoginSignup from "./LoginSignup";
import LoginProfile from "./LoginProfile";
import LoginProfileEdit from "./LoginProfileEdit";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
// import Users from "../data/Users";

function Login({ loggedIn, setLoggedIn, userBase, setUserBase, userInfo, setUserInfo }) {
  console.log("--Login--")
  const [email, setEmail] = useState("");
  // setUserInfo(JSON.parse(localStorage.getItem("user")));
  const [userIndex, setUserIndex] = useState(
    userBase.findIndex((element) => element.email === userInfo.email)
  );

  useEffect(() => {
    setUserIndex(userBase.findIndex((element) => element.email === userInfo.email))
  }, [userBase, userInfo])

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
              userBase={userBase}
              setUserBase={setUserBase}
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
            userBase={userBase}
            setUserBase={setUserBase}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
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
              userBase={userBase}
              setUserBase={setUserBase}
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
              userBase={userBase}
              setUserBase={setUserBase}
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
