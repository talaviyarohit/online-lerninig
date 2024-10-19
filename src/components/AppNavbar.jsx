import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className='white'>
        Course Platform
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" 
          className='white'>Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard" 
          className='white'>Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/lesson/1" 
          className='white'>Lesson Player</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
