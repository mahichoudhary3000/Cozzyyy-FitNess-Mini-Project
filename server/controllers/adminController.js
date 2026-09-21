const User=require("../models/User");const BMI=require("../models/BMIRecord");const MealRecord=require("../models/MealRecord");
exports.stats=async(req,res)=>res.json({users:await User.countDocuments(),bmiRecords:await BMI.countDocuments(),mealRecords:await MealRecord.countDocuments()});
exports.bmi=async(req,res)=>res.json({records:await BMI.find().populate("userId","name email").sort({createdAt:-1})});
exports.meals=async(req,res)=>res.json({records:await MealRecord.find().populate("userId","name").populate("mealId","name").sort({date:-1})});
exports.aggregation=async(req,res)=>{const data=await BMI.aggregate([{$group:{_id:"$category",count:{$sum:1},averageBMI:{$avg:"$bmi"}}},{$sort:{_id:1}}]);res.json({data})};
