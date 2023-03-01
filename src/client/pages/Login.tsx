import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { User } from "../../../types";
import '../styles/LogSignUp.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<User | null>(userObj);
  const [password, setPassword] = useState<User | null>(userObj);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(prevUser => ({ ...prevUser, username: event.target.value }));
    console.log(username.username);
  }

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(prevUser => ({ ...prevUser, password: event.target.value }));
    console.log(password.password);
  }

  const handleLogIn = () => {
    console.log('logged in')
    setIsLoggedIn(true);
    navigate("/home");
  }

  return (
    <>
      <section className="login-container">
        <label htmlFor="username">Username</label>
        <input placeholder='Enter your username...' 
          type="text" 
          id="username" 
          value={username.username}
          onChange={(e) => handleUser(e)}> 
        </input>
        <label htmlFor="password">Password</label>
        <input placeholder='Enter your password...' 
          type="password" 
          id="password" 
          value={password.password}
          onChange={(e) => handlePass(e)}></input>
      </section> 
        <div className="button-container">
            <button className="login-btn" onClick={handleLogIn}>Login</button>
          <Link to="/signup">
            <button className="no-account-btn">Don't have an account?</button>
          </Link>
        </div>
    </>
  )
}

const userObj = {
  username: '',
  password: ''
}

export default Login;