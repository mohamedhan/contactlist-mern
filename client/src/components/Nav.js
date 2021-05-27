import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Nav = () => {
    return (
        <div>
         <Link  to="/" >  <Button color="link">home</Button></Link> 
          <Link to="/contact-list" > <Button color="primary">contact list</Button></Link> 
         <Link to="/add-contact" >  <Button color="info">add contact</Button></Link> 
        </div>
    )
}

export default Nav
