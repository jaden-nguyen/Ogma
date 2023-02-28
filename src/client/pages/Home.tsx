import React from "react";
import { Routes, Link, Route, NavLink } from "react-router-dom";
import Record from "./Record";
import Saved from "./Saved";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
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
        <Route path="/" element={<Record />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  );
}

const activeStyle = {
  // active link styling
  backgroundColor: "black",
  transition: "all 0.3s ease-in-out",
};
