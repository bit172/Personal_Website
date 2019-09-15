import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./favicon.png";

const NavBar = () => {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      expand="sm"
      collapseOnSelect="true"
    >
      <Navbar.Brand href="/">
        <img src={logo} width="35px" height="35px" alt="logo" id="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
