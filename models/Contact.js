const mongoose=require("mongoose")

const ContactSchema=new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String,
        unique:true
    },
    tel:{
        type:Number
    },
    dateOfCreation:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("contacts",ContactSchema)