import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../../types";
import "../styles/LogSignUp.css";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<User | null>(userObj);
  const [password, setPassword] = useState<User | null>(userObj);
  const [categories, setCategories] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const navigate = useNavigate();

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((prevUser) => ({ ...prevUser, username: event.target.value }));
    console.log(username.username);
  };

  const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prevUser) => ({ ...prevUser, password: event.target.value }));
    
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/;
      if (regex.test(password.password)) setCategories(true);
      else setCategories(false);
      
      if (username.username.length > 1 && 
        password.password !== username.username) setCheckPass(true);
      else setCheckPass(false);
    console.log(password.password);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }
  const handleSignUp = () => {
    console.log("signing up!");
    if (!(categories && checkPass && password.password.length >= 8)) {
      alert('Please fill out all of the password requirements.');
    } else {
      navigate('/home');
    }
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
          onChange={handleUser}
          onKeyDown={handleKeyDown}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password..."
          type="password"
          id="password"
          value={password.password}
          onChange={handlePass}
          onKeyDown={handleKeyDown}
        ></input>
      </section>
      <section className="password-requirements">
        <p id="pass-categories" style={{ color: categories ? passStyleActive.color: passStyle.color }}>
            Your password must use characters from at all of these categories: uppercase letters, lowercase letters, numbers, symbols.</p>
        <p id="pass-length" 
          style={{ color: password.password.length >= 8 ? passStyleActive.color: passStyle.color }}>
            Your password must at least 8 characters long.
        </p>
        <p id="pass-name" style={{ color: checkPass ? passStyleActive.color: passStyle.color }}>
            Your password cannot contain your name (or a portion of your name).</p>
      </section>
      <div className="button-container">
        <button className="login-btn" onClick={handleSignUp}>
          Register
        </button>
        <Link to="/">
          <button className="no-account-btn">Already have an account?</button>
        </Link>
      </div>
    </>
  );
};

const userObj = {
  username: "",
  password: "",
};

const passStyle = {
  color: "#FF0000", //red
  transition: "all 0.3s ease-in-out",
}

const passStyleActive = {
  color: "#90EE90", //green
  transition: "all 0.3s ease-in-out",
}

export default SignUp;
