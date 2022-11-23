const express=require("express")
const { authRoutes } = require("./auth")
const { projectRoutes } = require("./project")
const { teamRoutes } = require("./team")
const { userRoutes } = require("./user")
const app= express()
const router=require("express").Router()

app.use("/auth",authRoutes)
app.use("/project",projectRoutes)
app.use("/team",teamRoutes)
app.use("/user",userRoutes)
module.exports={
   allRoutes:router
}