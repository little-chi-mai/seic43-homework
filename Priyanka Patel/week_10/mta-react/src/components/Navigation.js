import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Navigation =() => {
  return(
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Nav>
          <Nav.Link id="reset" href='/'>Reset</Nav.Link>
        </Nav>
      </Navbar>
    </>

  )
}

export default Navigation;
