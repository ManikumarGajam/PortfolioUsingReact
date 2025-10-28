import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css"
export default function Navigation() {
  return (
    <Navbar className="custom-navbar" collapseOnSelect expand="lg"   fixed="top">
  <Container>
    <Navbar.Brand href="#home" className="brand-light-italic" >Gajam Manikumar</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}
