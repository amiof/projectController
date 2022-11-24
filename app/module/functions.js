const bcrypt=require("bcrypt")

const hashedPassword=(data)=>{
    const salt=bcrypt.genSaltSync(10)
    return bcrypt.hashSync(data,salt)
}
module.exports={
    hashedPassword
}