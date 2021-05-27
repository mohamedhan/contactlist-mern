const express=require("express")
const connect=require("./config/connectDB")
const cors=require("cors")
// instanciation
const app=express()

// middlewware
app.use(express.json())
app.use(cors())
// connect to DB
connect()
// routes 
app.use("/api/contacts",require("./routes/contact"))
// port
const port=5000
app.listen(port,err=>{
    err? console.log(err): console.log(`server is running on port ${port}`)
})