import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getContacts } from '../Js/actions/contactActions'
import ContactCard from './ContactCard'
const ContactList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[])
    const contacts=useSelector(state=> state.ContactReducer.contacts)
    return (
        <div  style={{display:"flex",flexWrap:"wrap"}} >
            {
              contacts&&  contacts.map(contact=>  <ContactCard key={contact._id} contact={contact}  />  )
            }
        </div>
    )
}

export default ContactList
