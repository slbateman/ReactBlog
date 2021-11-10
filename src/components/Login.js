import LoginForm from "./LoginForm";
import LoginSignup from "./LoginSignup";
import LoginProfile from "./LoginProfile";
import LoginProfileEdit from "./LoginProfileEdit";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function Login({ loggedIn, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [userIndex, setUserIndex] = useState(0);

  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login">
          <LoginForm
            email={email}
            setEmail={setEmail}
            setLoggedIn={setLoggedIn}
            userIndex={userIndex}
            setUserIndex={setUserIndex}
          />
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
          <LoginProfile
            loggedIn={loggedIn}
            userIndex={userIndex}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="/login/profile/edit">
          <LoginProfileEdit
            loggedIn={loggedIn}
            userIndex={userIndex}
            setLoggedIn={setLoggedIn}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
