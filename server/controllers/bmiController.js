const BMI=require("../models/BMIRecord");
exports.create=async(req,res)=>{try{const {userId,height,weight,bmi,category}=req.body;if(req.user._id.toString()!==userId&&req.user.role!=="admin")return res.status(403).json({message:"Not allowed"});const record=await BMI.create({userId,height,weight,bmi,category});res.status(201).json({record})}catch(e){res.status(500).json({message:"Unable to save BMI record"})}};
exports.history=async(req,res)=>{if(req.user._id.toString()!==req.params.userId&&req.user.role!=="admin")return res.status(403).json({message:"Not allowed"});res.json({records:await BMI.find({userId:req.params.userId}).sort({createdAt:-1})})};
exports.remove=async(req,res)=>{await BMI.findByIdAndDelete(req.params.id);res.json({message:"BMI record deleted"})};
