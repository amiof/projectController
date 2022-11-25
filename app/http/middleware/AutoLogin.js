const { userModel } = require("../../model/user")
const { verifyJwtToken } = require("../../module/functions")

const autoLogin=async (req,res,next)=>{
  try{
        const err={status:401, message:"لطفا وارد حساب کاربری خود شوید"}
      const authorization=req?.headers?.authorization
      if(!authorization)throw err
       const splitAuth=authorization.split(" ")[1]
       if(!splitAuth) throw err
       const resultToken=await verifyJwtToken(splitAuth)
       if(resultToken?.username){

         const username=resultToken.username
         const user= await userModel.findOne({username},{password:0})
         req.user=user
         

       }

      
      next()
      }catch(error){
        next(error)
      }

  }

module.exports = {
    autoLogin
}    