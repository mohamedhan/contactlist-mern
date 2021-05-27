import axios from "axios"
import { GET_CONTACTS } from "../constants/actionTypes"
// get
export const getContacts=()=> dispatch  =>{
   axios.get("http://localhost:5000/api/contacts/")
//    .then(res=>console.log(res))
   .then(res=> dispatch({type:GET_CONTACTS,payload:res.data})  )
   .catch(err=>console.log(err))
}


// post
export const addContact=(newContact)=>dispatch=>{
    axios.post("http://localhost:5000/api/contacts/addContact",newContact)
    .then(res=> dispatch(getContacts()) )
    .catch(err=>console.log(err))
}

// delete
export const deleteContact=(idContact)=>dispatch=>{
    axios.delete("http://localhost:5000/api/contacts/deleteContact/"+idContact)
    // .then(res=> console.log(res))
    .then(res=> dispatch(getContacts()) )
    .catch(err=>console.log(err))
}


// edit
export const editContact=(idContact,editedContact)=>dispatch=>{
    axios.put("http://localhost:5000/api/contacts/editContact/"+idContact,editedContact)
    .then(res=> dispatch(getContacts()) )
    .catch(err=>console.log(err))
}