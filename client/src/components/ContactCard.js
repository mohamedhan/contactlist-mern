import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {useDispatch} from "react-redux"
import { deleteContact } from '../Js/actions/contactActions';
import EditModal from './EditModal';

const ContactCard = ({contact}) => {
    const dispatch=useDispatch()
    const delet=()=>{
        dispatch(deleteContact(contact._id))
    }
    return (
        <div style={{minWidth:"400px",margin:"20px"}} >
            <Card body>
          <CardTitle tag="h5">{contact.name}</CardTitle>
          <CardText>{contact.email}</CardText>
          <CardText>{contact.tel}</CardText>
          <CardText>{contact.dateOfCreation.slice(0,10)}/{contact.dateOfCreation.slice(11,19)}  </CardText>
         <div style={{display:"flex",justifyContent:"space-around"}} >
          <Button  color="danger"  onClick={delet} >delete</Button>
            <EditModal contact={contact} />
          </div>
        </Card>
        </div>
    )
}

export default ContactCard
