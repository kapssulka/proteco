import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./elements/NavItem";

export default function Navbar() {
  return (
    <ul className={classes.nav}>
      <NavItem>Tokuyama dental</NavItem>
      <NavItem>Clean + Safe</NavItem>
      <NavItem>Dezaurum</NavItem>
      <NavItem>STEA</NavItem>
      <NavItem>Healtex</NavItem>
      <NavItem>Dezodent</NavItem>
    </ul>
  );
}
