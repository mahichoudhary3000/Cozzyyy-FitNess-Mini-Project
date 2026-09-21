require("dotenv").config();const express=require("express");const cors=require("cors");const connectDB=require("./config/db");
const app=express();app.use(cors());app.use(express.json());
app.get("/api/health",(req,res)=>res.json({status:"ok",message:"Cozzyyy FitNess API is running"}));
app.use("/api/auth",require("./routes/authRoutes"));app.use("/api/users",require("./routes/userRoutes"));app.use("/api/bmi",require("./routes/bmiRoutes"));app.use("/api/meals",require("./routes/mealRoutes"));app.use("/api/meal-records",require("./routes/mealRecordRoutes"));app.use("/api/admin",require("./routes/adminRoutes"));
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:"Server error"});});
const port=process.env.PORT||5000;
connectDB().then(()=>app.listen(port,()=>console.log(`API running on http://localhost:${port}`))).catch(err=>{console.error("MongoDB connection failed:",err.message);process.exit(1)});
