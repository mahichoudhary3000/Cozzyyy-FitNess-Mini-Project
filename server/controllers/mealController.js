const Meal=require("../models/Meal");const MealRecord=require("../models/MealRecord");
exports.list=async(req,res)=>res.json({meals:await Meal.find().sort({category:1})});
exports.create=async(req,res)=>res.status(201).json({meal:await Meal.create(req.body)});
exports.update=async(req,res)=>res.json({meal:await Meal.findByIdAndUpdate(req.params.id,req.body,{new:true})});
exports.remove=async(req,res)=>{await Meal.findByIdAndDelete(req.params.id);res.json({message:"Meal deleted"})};
exports.records=async(req,res)=>{if(req.user._id.toString()!==req.params.userId&&req.user.role!=="admin")return res.status(403).json({message:"Not allowed"});const start=new Date();start.setHours(0,0,0,0);res.json({records:await MealRecord.find({userId:req.params.userId,date:{$gte:start}})})};
exports.saveRecord=async(req,res)=>{const {userId,mealId,completed}=req.body;if(req.user._id.toString()!==userId)return res.status(403).json({message:"Not allowed"});const start=new Date();start.setHours(0,0,0,0);let r=await MealRecord.findOne({userId,mealId,date:{$gte:start}});if(r){r.completed=completed;await r.save()}else r=await MealRecord.create({userId,mealId,completed});res.status(201).json({record:r})};
exports.updateRecord=async(req,res)=>{const r=await MealRecord.findById(req.params.id);if(!r)return res.status(404).json({message:"Meal record not found"});if(req.user._id.toString()!==r.userId.toString()&&req.user.role!=="admin")return res.status(403).json({message:"Not allowed"});r.completed=req.body.completed;await r.save();res.json({record:r})};
exports.removeRecord=async(req,res)=>{await MealRecord.findByIdAndDelete(req.params.id);res.json({message:"Meal record deleted"})};
