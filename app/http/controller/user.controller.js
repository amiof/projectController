const { userModel } = require("../../model/user")
const { makeLInkImage } = require("../../module/functions")


class UserController{
    getProfile(req,res,next){
        try{
            const user=req.user

            res.status(200).json({
                status:200,
                success:true,
                user,
                imageLink:makeLInkImage(user.profile_image)
            })
        }catch(error){
            next(error)
        }

    }
  async  editProfile(req,res,next){
        try {
            let data=req.body
            const fields=["first_name", "last_name", "skills"]
            const userId=req.user._id
            const badValue=[" ",null ,undefined,"",".","*",NaN]
             Object.entries(data).forEach(([key,value]) => {
                if(!fields.includes(key)) delete data[key]
                if(badValue.includes(value)) delete data[key]
                
             });
            console.log(data)
            const result =await userModel.updateOne({_id:userId}, {$set:data})
            if(Object.keys(data).length===0) throw {status:400, message:"بروزرسانی با انجام نشد"}
            return res.status(200).json({
                status:200,
                success:true,
                message:"بروزرسانی با موفقیت انجام شد"
            })

        } catch (error) {
            next(error)
        }
    }
    async editProfileImage(req,res,next){
        try {
            if(Object.keys(req.file).length==0)throw {status:400, message:"لطفا یک فایل انتخاب کنید"}
            const filepath=req.file?.path.replace(/[\\\\]/gm ,"/")
            const userId=req.user._id
            const result= await userModel.updateOne({_id:userId},{$set:{profile_image:filepath}})
            if(!result)throw {status:400, message:"آپدیت انجام نشد"}
            const userFind=await userModel.findOne({_id:userId})
           
            const imageLInk="http://localhost:3500/"+ userFind.profile_image
            res.status(200).json({
                status:200,
                success:true,
                message:"اپدیت باموفقیت انجام شد",
                profile_image:imageLInk
            })
        } catch (error) {
            next(error)
        }
    }
    addSkills(){

    }
    editSills(){

    }
    acceptInviteInTeam(){

    }
    rejectInviteInTeam(){

    }
}
module.exports={
    UserController:new UserController()
}