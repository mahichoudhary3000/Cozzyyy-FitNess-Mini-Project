import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return <div>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">COZZYYY FITNESS</p>
        <h1>Build Better Habits.<br />Feel Better. Live Better.</h1>
        <p>Track your BMI, explore simple meal ideas, and build consistent daily fitness habits in one easy dashboard.</p>
        <div className="hero-actions">
          <Link to="/signup" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn secondary">Calculate BMI</Link>
        </div>
      </div>
      <div className="hero-card">
        <div className="pulse">♥</div>
        <h3>Small steps. Daily progress.</h3>
        <p>Simple tools designed for a college mini project and easy everyday tracking.</p>
      </div>
    </section>
    <section className="section">
      <div className="section-heading"><p className="eyebrow">FEATURES</p><h2>Everything in one place</h2></div>
      <div className="card-grid">
        {[
          ["01","BMI Calculator","Calculate BMI and save your fitness history."],
          ["02","Diet Guide","Get simple category-based food suggestions."],
          ["03","Meal Tracker","Mark daily meals complete and monitor progress."],
          ["04","Fitness History","Review previous BMI records in a clean table."]
        ].map(([n,t,d]) => <div className="feature-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </section>
  </div>;
}
