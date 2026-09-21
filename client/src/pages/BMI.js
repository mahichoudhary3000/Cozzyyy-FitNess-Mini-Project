import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

function category(bmi){if(bmi<18.5)return"Underweight";if(bmi<25)return"Normal";if(bmi<30)return"Overweight";return"Obese";}
export default function BMI(){
  const {user}=useAuth(); const [height,setHeight]=useState(user.height||"");const [weight,setWeight]=useState(user.weight||"");const [result,setResult]=useState(null);const [error,setError]=useState("");
  const submit=async e=>{e.preventDefault();setError("");const h=Number(height),w=Number(weight);if(!h||!w)return setError("Please enter valid height and weight.");const bmi=w/((h/100)**2);const cat=category(bmi);setResult({bmi,category:cat});try{await api.bmi({userId:user._id,height:h,weight:w,bmi,category:cat});}catch(err){setError(err.message);}};
  return <section className="section narrow"><p className="eyebrow">BMI CALCULATOR</p><h1>Know your BMI</h1><p className="lead">Enter your height and weight. Your result is saved to your history.</p>
    <div className="split"><div className="panel"><form onSubmit={submit}><label>Height (cm)<input type="number" min="1" value={height} onChange={e=>setHeight(e.target.value)}/></label><label>Weight (kg)<input type="number" min="1" step="0.1" value={weight} onChange={e=>setWeight(e.target.value)}/></label>{error&&<div className="error">{error}</div>}<button className="btn primary full">Calculate & Save</button></form></div>
    <div className="result-card">{result?<><span className="eyebrow">RESULT</span><strong>{result.bmi.toFixed(2)}</strong><h2>{result.category}</h2><p>{result.category==="Normal"?"Your BMI is in the Normal range. Maintain a balanced diet and regular physical activity.":"Use this result as general educational information and focus on balanced habits."}</p></>:<p>Your BMI result will appear here.</p>}</div></div>
    <div className="notice">BMI is an educational screening calculation for this student project and is not a medical diagnosis or professional medical advice.</div>
  </section>;
}
