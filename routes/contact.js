
const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")

// @ path:  http://localhost:5000/api/contacts/
// get all users
// accés public/private
// router.get("/",(req,res)=>{
//     Contact.find()
//     .then(users=> res.json({msg:"data fetched",users}) )
//     .catch(err=> console.log(err))
// })
router.get("/",async(req,res)=>{
    try {
        const users=await Contact.find()
        res.json({msg:"data fetched",users})
    } catch (err) {
        console.log(err)
    }


    // Contact.find()
    // .then(users=> res.json({msg:"data fetched",users}) )
    // .catch(err=> console.log(err))
})


// http://localhost:5000/api/contacts/:id
// get contact by id
// 
// router.get("/:id",(req,res)=>{
//     Contact.findById(req.params.id)
//     .then(user=> res.json({user}))
//     .catch(err=> console.log(err))
// })
router.get("/:id",async(req,res)=>{

    try {
      const user= await Contact.findById(req.params.id)
        res.json({user})
    } catch (err) {
        console.log(err)
    }


    // Contact.findById(req.params.id)
    // .then(user=> res.json({user}))
    // .catch(err=> console.log(err))
})

// @ path:  http://localhost:5000/api/contacts/addContact
// create new contact
// accés public/private
// router.post("/addContact",(req,res)=>{
//     // req.body={name:"ali",email:"ali@gmail.com",tel:147856,dateOfCreation:"12/05/2020"} ===> ...req.body
//     const newUser=new Contact({
//         // name:req.body.name,
//         // email:req.body.email
//         ...req.body

//     })
//     newUser.save()
//     .then(user=>res.json({msg:"user created",user}) )
//     .catch(err=>console.log(err))

// })
router.post("/addContact",async(req,res)=>{

    try {
        const newUser= new Contact({
            // name:req.body.name,
            // email:req.body.email
            ...req.body
    
        })
        const user=await newUser.save()
        res.json({msg:"user created",user})
    } catch (err) {
        console.log(err)
    }




    // req.body={name:"ali",email:"ali@gmail.com",tel:147856,dateOfCreation:"12/05/2020"} ===> ...req.body
    // const newUser=new Contact({
    //     // name:req.body.name,
    //     // email:req.body.email
    //     ...req.body

    // })
    // newUser.save()
    // .then(user=>res.json({msg:"user created",user}) )
    // .catch(err=>console.log(err))

})

// @ path:  http://localhost:5000/api/contacts/deleteContact/:id
// delete contact
// 
// router.delete("/deleteContact/:id",(req,res)=>{
//     Contact.findOneAndDelete({_id:req.params.id})
//     .then(user=> res.json({msg:"user deleted",user}) )
//     .catch(err=> console.log(err))
// })
router.delete("/deleteContact/:id",async(req,res)=>{
    try {
        const user=await Contact.findOneAndDelete({_id:req.params.id})
        console.log(user)
         res.json({msg:"user deleted",user}) 
        
    } catch (err) {
        console.log(err)
        
    }
})

// @ path:  http://localhost:5000/api/contacts/editContact/:id
// edit contact
// 
// router.put("/editContact/:id",(req,res)=>{
//     // req.body={name:"mohamed",tel:145963} ==> ...req.body

//     Contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
//     .then(user=> res.json({msg:"user edited",user}))
//     .catch(err=> console.log(err))

// })

router.put("/editContact/:id",async(req,res)=>{
    // req.body={name:"mohamed",tel:145963} ==> ...req.body
try {
    
    const user=await  Contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    res.json({msg:"user edited",user})
} catch (err) {
    console.log(err)
}
    // Contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    // .then(user=> res.json({msg:"user edited",user}))
    // .catch(err=> console.log(err))

})

module.exports=router