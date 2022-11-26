const bcrypt=require("bcrypt")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const { userModel } = require("../model/user")
const fs=require("fs")
const path=require("path")
const { dirname } = require("path")
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
const createPathUpload=()=>{
    const date=new Date()
    const year=date.getFullYear()
    const month=date.getMonth()
    const day=date.getDate()
    const pathDir=path.join(__dirname,"..","..","public","upload",String(year),String(month),String(day))
    fs.mkdirSync(String(pathDir),{recursive:true})
    
    return path.join("public","upload",String(year),String(month),String(day))
}
module.exports={
    createToken,
    hashedPassword,
    verifyJwtToken,
    createPathUpload
}