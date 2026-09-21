import React from "react";

export default function About() {
  return <section className="section narrow">
    <p className="eyebrow">ABOUT</p>
    <h1>What is Cozzyyy FitNess?</h1>
    <p className="lead">Cozzyyy FitNess is a web-based Fitness Guide Assistant created as a college mini project integrating Advanced Web Technology, Database Management System and Software Engineering concepts.</p>
    <div className="info-grid">
      <div className="panel"><h3>Purpose</h3><p>Provide a simple place to calculate BMI, view basic educational recommendations, track meals and maintain fitness history.</p></div>
      <div className="panel"><h3>Technology</h3><p>React, JavaScript, CSS, Node.js, Express, REST APIs, MongoDB, bcrypt and JWT.</p></div>
      <div className="panel"><h3>Benefits</h3><p>Clean dashboard, database-backed records, CRUD operations, authentication and admin statistics.</p></div>
    </div>
    <div className="notice">Educational project only. BMI and diet information is general and should not be treated as medical advice.</div>
  </section>;
}
