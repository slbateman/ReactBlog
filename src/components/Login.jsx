import LoginForm from "./LoginForm";
import LoginSignup from "./LoginSignup";
import LoginProfile from "./LoginProfile";
import LoginProfileEdit from "./LoginProfileEdit";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../store/Reducer";

function Login() {
  const userInfo = useSelector(selectUserInfo);
  const [email, setEmail] = useState("");
  
  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login">
          {userInfo.loggedIn ? (
            <Redirect to="/login/profile" />
          ) : (
            <LoginForm email={email} setEmail={setEmail} />
          )}
        </Route>
        <Route path="/login/newUser">
          <LoginSignup
            email={email}
            setEmail={setEmail}
          />
        </Route>
        <Route exact path="/login/profile">
          {userInfo.loggedIn ? (
            <LoginProfile />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/login/profile/edit">
          {userInfo.loggedIn ? (
            <LoginProfileEdit />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
