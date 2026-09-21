import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", email:"", password:"", age:"", gender:"", height:"", weight:"" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const change = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async e => {
    e.preventDefault(); setError(""); setSuccess("");
    if (!form.name || !form.email || !form.password || !form.age || !form.gender || !form.height || !form.weight) return setError("All fields are required.");
    if (form.password.length < 6) return setError("Password must contain at least 6 characters.");
    try {
      await api.signup({...form, age:Number(form.age), height:Number(form.height), weight:Number(form.weight)});
      setSuccess("Account created successfully. Redirecting to login...");
      setTimeout(() => navigate("/login"), 900);
    } catch (err) { setError(err.message); }
  };

  return <section className="form-page"><div className="form-card">
    <p className="eyebrow">JOIN US</p><h1>Create your account</h1><p>Start your simple fitness journey.</p>
    {error && <div className="error">{error}</div>}{success && <div className="success">{success}</div>}
    <form onSubmit={submit}>
      <div className="form-grid">
        <label>Full Name<input name="name" value={form.name} onChange={change} /></label>
        <label>Email<input type="email" name="email" value={form.email} onChange={change} /></label>
        <label>Password<input type="password" name="password" value={form.password} onChange={change} /></label>
        <label>Age<input type="number" min="1" name="age" value={form.age} onChange={change} /></label>
        <label>Gender<select name="gender" value={form.gender} onChange={change}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></label>
        <label>Height (cm)<input type="number" min="1" name="height" value={form.height} onChange={change} /></label>
        <label>Weight (kg)<input type="number" min="1" step="0.1" name="weight" value={form.weight} onChange={change} /></label>
      </div>
      <button className="btn primary full">Create Account</button>
    </form>
    <p className="center">Already registered? <Link to="/login">Login</Link></p>
  </div></section>;
}
