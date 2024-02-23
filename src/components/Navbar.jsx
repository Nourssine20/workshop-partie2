import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">MyEvents</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/events" activeClassName="active">
           Events
          </Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
