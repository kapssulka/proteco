import React, { useContext } from "react";
import classes from "./NavItem.module.scss";
import cn from "classnames";

import { contextNav } from "../../../Brends";

export default function NavItem({ children }) {
  const { activeNav, onClick } = useContext(contextNav);

  const activeClass = activeNav == children ? classes.active : "";

  return (
    <li
      onClick={() => onClick(children)}
      className={cn(classes.item, activeClass)}
    >
      {children}
    </li>
  );
}
