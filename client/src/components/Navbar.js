import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span>CF</span> Cozzyyy FitNess
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        {user && user.role === "user" && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}

        {user && user.role === "admin" && (
          <NavLink to="/admin">Admin</NavLink>
        )}

        {!user && <NavLink to="/login">Login</NavLink>}

        {!user && (
          <Link className="nav-cta" to="/signup">
            Get Started
          </Link>
        )}

        {user && (
          <button className="link-button" onClick={signOut}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}