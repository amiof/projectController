const { AuthController } = require("../http/controller/auth.controller")
const { registerValidate } = require("../http/validation/auth")

const Router=require("express")
const { checkErrorValidation } = require("../http/middleware/CheckError")
const { autoLogin } = require("../http/middleware/AutoLogin")
const router=Router()


router.post("/register",autoLogin,registerValidate(),checkErrorValidation, AuthController.register )
router.post("/login",autoLogin, AuthController.login)
module.exports={
   authRoutes:router
}