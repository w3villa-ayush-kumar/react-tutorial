import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>{" "}
      <button onClick={goHome}>Go back Home</button>
    </div>
  );
};

export default Login;
