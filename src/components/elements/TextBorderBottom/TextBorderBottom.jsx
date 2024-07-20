import React from "react";
import classes from "./TextBorderBottom.module.scss";

export default function TextBorderBottom({ children, color = "#fff" }) {
  return (
    <p style={{ color: color }} className={classes.link}>
      {children} <span style={{ backgroundColor: color }}></span>
    </p>
  );
}
