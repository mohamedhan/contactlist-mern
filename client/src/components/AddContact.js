import React,{useState} from "react";
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addContact } from "../Js/actions/contactActions";

const AddContact = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [tel,setTel]=useState("")
    const dispatch=useDispatch()

    const addd=()=>{
        dispatch(addContact({name,email,tel}))
    }
  return (
    <Form>
      <FormGroup>
        <Label for="examplePassword">Name</Label>
        <Input
        value={name}
        onChange={e=>setName(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
        value={email}
        onChange={e=>setEmail(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">tel</Label>
        <Input
        value={tel}
        onChange={e=>setTel(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
    <Link to="/contact-list" >  <Button  onClick={addd} >Add COntact</Button></Link>
    </Form>
  );
};

export default AddContact;
