const { model, default: mongoose } = require("mongoose")

const schema=require("mongoose").Schema
const UserSchema=new schema({
    first_name: {type :String},
    last_name: {type :String},
    username : {type :String,required:true, unique:true},
    mobile: {type :String, required:true, unique:true},
    password: {type :String, required:true,},
    profile_image: {type :String,},
    email: {type :String,required:true, unique:true},
    skills: {type :[String], default: []},
    team: {type :[mongoose.Types.ObjectId], default: []},
    role: {type :[String], default:["USER"]},
    token: {type :String, default:""},


},{
    timestamps:true
})
const userModel= model("user",UserSchema)
module.exports= {userModel}
