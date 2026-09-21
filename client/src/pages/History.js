import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function History(){const {user}=useAuth();const [records,setRecords]=useState([]);useEffect(()=>{api.bmiHistory(user._id).then(r=>setRecords(r.records)).catch(()=>{})},[user]);return <section className="section"><p className="eyebrow">HISTORY</p><h1>Your BMI history</h1><div className="table-wrap"><table><thead><tr><th>Date</th><th>Height</th><th>Weight</th><th>BMI</th><th>Category</th></tr></thead><tbody>{records.map(r=><tr key={r._id}><td>{new Date(r.createdAt).toLocaleDateString()}</td><td>{r.height} cm</td><td>{r.weight} kg</td><td>{r.bmi.toFixed(2)}</td><td><span className="badge">{r.category}</span></td></tr>)}</tbody></table>{!records.length&&<p className="empty">No BMI records yet.</p>}</div></section>}
