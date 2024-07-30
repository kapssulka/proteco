import React, { useContext } from "react";
import classes from "./CustomNavLink.module.scss";
import { NavLink } from "react-router-dom";
import { burgerContext } from "../../../../Header";

export default function CustomNavLink({ children, to }) {
  const { activeNav, setActiveNav } = useContext(burgerContext);

  return (
    <NavLink
      onClick={(e) => setActiveNav(!activeNav)}
      className={({ isActive }) =>
        isActive ? `${classes.link} ${classes.activeNav}` : classes.link
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
