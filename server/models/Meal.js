const mongoose=require("mongoose");
const schema=new mongoose.Schema({name:{type:String,required:true},description:String,calories:Number,category:{type:String,enum:["breakfast","lunch","snack","dinner"]}});
module.exports=mongoose.model("Meal",schema);
