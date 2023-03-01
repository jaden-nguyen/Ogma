import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../types";
import '../styles/LogSignUp.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<User | null>(userObj);
  const [password, setPassword] = useState<User | null>(userObj);

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(prevUser => ({ ...prevUser, username: event.target.value }));
  }

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(prevUser => ({ ...prevUser, password: event.target.value }));
  }

  return (
    <>
      <section className="login-container">
        <label htmlFor="username">Username</label>
        <input placeholder='Enter your username...' 
          type="text" 
          id="username" 
          value={username.username}
          onChange={handleUser}> 
        </input>
        <label htmlFor="password">Password</label>
        <input placeholder='Enter your password...' 
          type="password" 
          id="password" 
          value={password.password}
          onChange={handlePass}></input>
      </section> 
        <div className="button-container">
          <Link to="/home">
            <button className="login-btn">Login</button>
          </Link>
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