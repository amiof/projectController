const bcrypt=require("bcrypt")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const { userModel } = require("../model/user")

const hashedPassword=(data)=>{
    const salt=bcrypt.genSaltSync(10)
    return bcrypt.hashSync(data,salt)
}

const createToken=(payload)=>{
    return jwt.sign(payload,process.env.PRIVATE_KEY,{ expiresIn :"1y"})
}
const verifyJwtToken=(token)=>{
  
        const resultToken= jwt.verify(token, process.env.PRIVATE_KEY)
        if(!resultToken.username)throw {status:401,message:"وارد حساب کاربری خود شوید"}
        return resultToken
    
}



module.exports={
    createToken,
    hashedPassword,
    verifyJwtToken
}