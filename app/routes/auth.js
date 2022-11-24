const { AuthController } = require("../http/controller/auth.controller")
const { registerValidate } = require("../http/validation/auth")

const Router=require("express")
const { checkErrorValidation } = require("../http/middleware/CheckError")
const router=Router()


router.post("/register",registerValidate(),checkErrorValidation, AuthController.register )

module.exports={
   authRoutes:router
}