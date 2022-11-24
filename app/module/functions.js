const bcrypt=require("bcrypt")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const { userModel } = require("../model/user")

const hashedPassword=(data)=>{
    const salt=bcrypt.genSaltSync(10)
    return bcrypt.hashSync(data,salt)
}

const createToken=(payload)=>{
    return jwt.sign(payload,process.env.PRIVATE_KEY,{expiresIn: "3 days"})
}


const checkHashPass=async (username,pass)=>{
    const user=await userModel.findOne({username})
    if(user?.password){
        return bcrypt.compareSync(pass,user.password)
        
    }

}

module.exports={
    createToken,
    hashedPassword,
}