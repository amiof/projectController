const { model, default: mongoose } = require("mongoose")
const mongoose=require("mongoose")
const schema=require("mongoose").Schema
const teamSchema=new schema({
    name: {type :String},
    description: {type :String},
    users : {type :[mongoose.Types.ObjectId],default:[]},
    owner: {type : mongoose.Types.ObjectId, required:true},


},{
    timestamps:true
})
const teamModel= model("team", teamSchema)
module.exports={teamModel}
