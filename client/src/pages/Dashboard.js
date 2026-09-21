import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const {user}=useAuth(); const [latest,setLatest]=useState(null); const [progress,setProgress]=useState({done:0,total:0});
  useEffect(()=>{api.bmiHistory(user._id).then(r=>setLatest(r.records[0]||null));api.meals().then(async m=>{const r=await api.mealRecords(user._id);setProgress({done:r.records.filter(x=>x.completed).length,total:m.meals.length});}).catch(()=>{});},[user]);
  return <section className="section">
    <div className="dashboard-head"><div><p className="eyebrow">DASHBOARD</p><h1>Welcome, {user.name.split(" ")[0]}.</h1><p className="lead">Keep your routine simple and consistent.</p></div><Link to="/bmi" className="btn primary">Calculate BMI</Link></div>
    <div className="stats-grid">
      <div className="stat"><span>Current BMI</span><strong>{latest ? latest.bmi.toFixed(2) : "—"}</strong><small>{latest?.category || "No record yet"}</small></div>
      <div className="stat"><span>Latest Weight</span><strong>{latest ? latest.weight : user.weight}</strong><small>kg</small></div>
      <div className="stat"><span>Meal Progress</span><strong>{progress.total ? `${progress.done}/${progress.total}` : "—"}</strong><small>today</small></div>
    </div>
    <div className="card-grid four">
      {[["BMI Calculator","Measure and save your BMI.","/bmi"],["Diet Plan","See simple food guidance.","/diet"],["Daily Meals","Track today's meals.","/meals"],["Fitness History","Review previous records.","/history"]].map(([t,d,l])=><Link className="feature-card action-card" to={l} key={t}><h3>{t}</h3><p>{d}</p><b>Open →</b></Link>)}
    </div>
  </section>;
}
