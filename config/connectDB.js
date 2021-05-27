const mongoose=require("mongoose")
const config=require("config")

// const connectDB=()=>{
//     mongoose.connect(config.get("MONGOURI"),{ useUnifiedTopology: true,useNewUrlParser: true })
//     .then(()=>console.log("mongoose connected"))
//     .catch(err=> console.log(err))

// }
// module.exports=connectDB
const connectDB=async ()=>{
    try {
        
        await mongoose.connect(config.get("MONGOURI"),{ useUnifiedTopology: true,useNewUrlParser: true })
        console.log("mongoose connected")
    } catch (error) {
        console.log(error)
    }


}
module.exports=connectDB
