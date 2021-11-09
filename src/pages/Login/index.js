import React from "react";
import { LoginBackground } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBackground} alt="login" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Link
          title="Don't have an account yet? Please register"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
