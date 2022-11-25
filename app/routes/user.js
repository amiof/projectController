const { UserController } = require("../http/controller/user.controller")
const { autoLogin } = require("../http/middleware/AutoLogin")

 const router=require("express").Router()

 router.get("/profile", autoLogin,UserController.getProfile)
 
 module.exports={
    userRoutes:router
 }