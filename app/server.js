const express = require('express')
const app =express()
const mongoose = require("mongoose")
const http = require("http")
const { allRoutes } = require('./routes/router.js')
class Application{
    constructor(port,URL_DB){
       this.configApplication()
       this.configDatabase(URL_DB)
       this.createServer(port)
       this.createRoutes()
       this.errorHandler()
    }
    configApplication(){
        const path= require("path")
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        app.use(express.static(path.join(__dirname,"..","public")))




    }
    createServer(port){
       const server= http.createServer(app)
       server.listen(port,()=>{
        console.log(`server > up in http://localhost:${port}`)
            
        })
    }
     
    configDatabase(URL_DB){
        mongoose.connect(URL_DB,(error)=>{
            if(error) throw {status:400,message:error}
            return console.log("connected to db successful")
        })

    }
    errorHandler(){
        app.use((req,res,next)=>{
            return res.status(404).json({

                status:404,
                success:false,
                message: "this page not found"
            }
            )
        })
        app.use((error, req,res,next)=>{
            const status =error?.status||500
            const message=error?.message|| "internal server error"
            return res.status(status).json({
                status,
                message,
            })
        })
    }
    createRoutes(){

        app.get("/",(req, res, next)=>{
            return res.json({
                message: "express server is up"
            })
        })
        app.use(allRoutes)
    }

}   
module.exports=Application