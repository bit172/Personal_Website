import React from "react";
import logo from "./favicon.png";
import NavbarItem from "./navbarItem";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#about">
        <img src={logo} width="35px" height="35px" alt="logo" id="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <NavbarItem name={"About"} to={"about"} />
          <NavbarItem name={"Experience"} to={"experience"} />
          <NavbarItem name={"Skills"} to={"skills"} />
          <NavbarItem name={"Interests"} to={"interests"} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
