const { UserController } = require("../http/controller/user.controller")
const { autoLogin } = require("../http/middleware/AutoLogin")

 const router=require("express").Router()

 router.get("/profile", autoLogin,UserController.getProfile)
 router.post("/profile/edit", autoLogin,UserController.editProfile)
 
 module.exports={
    userRoutes:router
 }