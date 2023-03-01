import React from "react";
import { Routes, Link, Route, NavLink } from "react-router-dom";
import Record from "./Record";
import Saved from "./Saved";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/home"
        >
          Record
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/saved"
        >
          Saved
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Record />} />
        <Route path="/saved" element={<Saved userId={1} />} />
      </Routes>
    </>
  );
}

const activeStyle = {
  // active link styling
  backgroundColor: "black",
  transition: "all 0.3s ease-in-out",
};
