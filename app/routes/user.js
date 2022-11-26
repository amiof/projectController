const { UserController } = require("../http/controller/user.controller")
const { autoLogin } = require("../http/middleware/AutoLogin")
const { uploadMulter } = require("../model/multer")

 const router=require("express").Router()

 router.get("/profile", autoLogin,UserController.getProfile)
 router.post("/profile/edit", autoLogin,UserController.editProfile)
 router.post("/profile/uploadImageProfile", autoLogin,uploadMulter.single('image'), UserController.editProfileImage)
 
 module.exports={
    userRoutes:router
 }