
const {body}=require("express-validator")
const { userModel } = require("../../model/user")
 function registerValidate(){
    
    return[
        body("username").isLength({min:4}).custom(async (username,ctx)=>{
            if(username){
                const user=await userModel.findOne({username})
                if(user) throw "امکان ایجاد این نام کاربری وجود ندارد نام دیگری انتخاب نمایید"
                return true
            }
        } ),
        body("email").isEmail().withMessage("ایمیل وارد شده صحیح نمی باشد").custom( async (email,ctx)=>{
            if(email){
                const user=await userModel.findOne({email})
                if(user) throw "امکان ایجاد این ایمیل وجود ندارد ایمیل دیگری انتخاب نمایید"
            }
        }),

        body("mobile").notEmpty().isMobilePhone("fa-IR").withMessage("شماره وارد شده صحیح نمی باشد").custom( async (mobile,ctx)=>{
            if(mobile){
                const user=await userModel.findOne({mobile})
                if(user) throw "امکان ایجاد این شماره وجود ندارد شماره دیگری وارد نمایید"
            }
        }),
        body("password").isLength({min:6,max:10}).withMessage("رمز عیور باید حداقل 6 کاراکتر باشد و حداکثر10کاراکتر")
        .custom((value,ctx)=>{
            if(!value) throw "رمز عبور نمی تواند خالی باشد"
            if(value!==ctx?.req?.body?.confirm_password) throw "رمز عبور و تکرار آن یکسان نمی باشد"
            return true
        })
    ]
}
module.exports={
    registerValidate
}