import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../../types";
import { LoginProps } from "../../../types";
import "../styles/LogSignUp.css";

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<User | null>(userObj);
  const [password, setPassword] = useState<User | null>(userObj);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((prevUser) => ({ ...prevUser, username: event.target.value }));
    console.log(username.username);
  };

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prevUser) => ({ ...prevUser, password: event.target.value }));
      
    console.log(password.password);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }

  const handleLogIn = () => {
    console.log("attempting login");
    // perform fetch 

    // if user is verified
      setIsLoggedIn(true);
      navigate("/home");

    // }
  };

  return (
    <>
      <section className="login-container">
        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter your username..."
          type="text"
          id="username"
          value={username.username}
          onChange={(e) => handleUser(e)}
          onKeyDown={handleKeyDown}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password..."
          type="password"
          id="password"
          value={password.password}
          onChange={(e) => handlePass(e)}
          onKeyDown={handleKeyDown}
        ></input>
      </section>
      <div className="button-container">
        <button className="login-btn" onClick={handleLogIn}>
          Login
        </button>
        <Link to="/signup">
          <button className="no-account-btn">Don't have an account?</button>
        </Link>
      </div>
    </>
  );
};

const userObj = {
  username: "",
  password: "",
};

export default Login;
