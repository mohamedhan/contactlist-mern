import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch} from "react-redux"
import { editContact } from '../Js/actions/contactActions';

const EditModal = ({contact}) => {
    const [name,setName]=useState(contact.name)
    const [email,setEmail]=useState(contact.email)
    const [tel,setTel]=useState(contact.tel)

  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
      setEmail(contact.email)
      setTel(contact.tel)
      setName(contact.name)
    };
  const dispatch=useDispatch()

  const edit=()=>{
    dispatch(editContact(contact._id,{name,email,tel}))
    toggle()
  }

  return (
    <div>
      <Button color="warning" onClick={toggle}>edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
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
    
    </Form>     
       </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Edit modal</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;