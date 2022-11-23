const { model, default: mongoose } = require("mongoose")
const mongoose=require("mongoose")
const schema=require("mongoose").Schema
const projectSchema=new schema({
    title: {type :String},
    text: {type :String},
    image: {type : [mongoose.Types.ObjectId],default: "./defaults/default.jpg"},
    owner: {type : mongoose.Types.ObjectId, required:true},
    private: {type : Boolean, default:true},
    team: {type : mongoose.Types.ObjectId, required:true},
    


},{
    timestamps:true
})
const projectModel= model("project", projectSchema)
module.exports={projectModel}
