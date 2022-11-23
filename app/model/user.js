const { model } = require("mongoose")

const schema=require("mongoose").Schema
const UserSchema=new schema({
    first_name: {type :String},
    last_name: {type :String},
    username : {type :String,required:true, unique:true},
    mobile: {type :String, required:true, unique:true},
    password: {type :String, required:true,},
    email: {type :String,required:true, unique:true},
    skills: {type :String, default: []},
    team: {type :String, default: []},
    role: {type :String, default:["USER"]},


},{
    timestamps:true
})
const userModel= model("user",UserSchema)
module.exports={userModel}
