import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function Meals(){
 const {user}=useAuth();const [meals,setMeals]=useState([]);const [records,setRecords]=useState([]);const [error,setError]=useState("");
 const load=async()=>{try{const m=await api.meals();const r=await api.mealRecords(user._id);setMeals(m.meals);setRecords(r.records)}catch(e){setError(e.message)}};useEffect(()=>{load()},[user]);
 const toggle=async meal=>{const old=records.find(r=>r.mealId===meal._id);try{if(old){await api.updateMealRecord(old._id,!old.completed)}else{await api.saveMealRecord({userId:user._id,mealId:meal._id,completed:true})}load()}catch(e){setError(e.message)}};
 const done=records.filter(r=>r.completed).length;
 return <section className="section"><div className="dashboard-head"><div><p className="eyebrow">DAILY MEALS</p><h1>Today's meal plan</h1><p className="lead">Progress: {done}/{meals.length} meals completed</p></div></div>{error&&<div className="error">{error}</div>}<div className="meal-grid">{meals.map(m=>{const r=records.find(x=>x.mealId===m._id);return <div className={`meal-card ${r?.completed?"completed":""}`} key={m._id}><div><span className="meal-category">{m.category}</span><h2>{m.name}</h2><p>{m.description}</p><b>Approx. {m.calories} kcal</b></div><button className="btn secondary" onClick={()=>toggle(m)}>{r?.completed?"Completed ✓":"Mark Complete"}</button></div>})}</div><div className="progress"><div style={{width:`${meals.length?done/meals.length*100:0}%`}} /></div></section>
}
