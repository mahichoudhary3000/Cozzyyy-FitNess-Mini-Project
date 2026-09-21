import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
  const { login } = useAuth(); const navigate=useNavigate();

  const submit=async e=>{e.preventDefault();setError("");try{const user=await login({email,password});navigate(user.role==="admin"?"/admin":"/dashboard");}catch(err){setError(err.message);}};
  return <section className="form-page"><div className="form-card small">
    <p className="eyebrow">WELCOME BACK</p><h1>Login</h1><p>Access your fitness dashboard.</p>
    {error && <div className="error">{error}</div>}
    <form onSubmit={submit}>
      <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
      <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
      <button className="btn primary full">Login</button>
    </form>
    <p className="center">New user? <Link to="/signup">Create an account</Link></p>
  </div></section>;
}
