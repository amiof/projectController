
const { userModel } = require("../../model/user")
const { hashedPassword } = require("../../module/functions")

class AuthController{
  async  register(req,res,next){
        try{
            const {mobile,username,password,email}=req.body
        const passHashed = hashedPassword(password)
       
            const user=await userModel.create({mobile,username,email, password:passHashed})
          return  res.json(user)
        }catch(error){
            next(error)
        }
    }
    login(){

    }
    resetPassword(){

    }

}
module.exports={
    AuthController: new AuthController()
}