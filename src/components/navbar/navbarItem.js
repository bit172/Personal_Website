import React from "react";
import { Link } from "react-scroll";

export default function NavbarItem(props) {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to={props.to}
          spy={true}
          smooth={true}
          offset={-71}
          duration={500}
        >
          {props.name}
        </Link>
      </li>
    </>
  );
}
