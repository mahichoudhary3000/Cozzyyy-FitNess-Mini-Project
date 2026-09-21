import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";
import Diet from "./pages/Diet";
import Meals from "./pages/Meals";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

export default function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute role="user"><Dashboard /></ProtectedRoute>} />
      <Route path="/bmi" element={<ProtectedRoute role="user"><BMI /></ProtectedRoute>} />
      <Route path="/diet" element={<ProtectedRoute role="user"><Diet /></ProtectedRoute>} />
      <Route path="/meals" element={<ProtectedRoute role="user"><Meals /></ProtectedRoute>} />
      <Route path="/history" element={<ProtectedRoute role="user"><History /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute role="user"><Profile /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute role="admin"><Admin /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>;
}
