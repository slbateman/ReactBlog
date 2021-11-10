import LoginForm from "./LoginForm";
import LoginSignup from "./LoginSignup";
import { Route, Switch } from "react-router-dom";
import {useState} from "react"

function Login() {
  const [email, setEmail] = useState("");
  
  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login">
          <LoginForm email={email} setEmail={setEmail} />
        </Route>
        <Route path="/login/newUser">
      <LoginSignup email={email} setEmail={setEmail} />
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
