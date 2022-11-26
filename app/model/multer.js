const multer = require("multer")
const path=require("path")
const { createPathUpload } = require("../module/functions")
const storage=multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null,createPathUpload())
    },
    filename: (req,file,cb)=>{
        const type =path.extname(file.originalname)
        
        cb(null,String(Date.now()+type))
    }


})
const uploadMulter=multer({storage})
module.exports={
    uploadMulter
}