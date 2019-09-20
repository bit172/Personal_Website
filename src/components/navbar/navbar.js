import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
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
          <Nav.Item data-toggle>
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-71}
              duration={500}
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item data-toggle>
            <Link
              className="nav-link"
              to="experience"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Experience
            </Link>
          </Nav.Item>
          <Nav.Item data-toggle>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item data-toggle>
            <Link
              className="nav-link"
              to="interests"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              Interests
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
