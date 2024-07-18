import React from "react";
import classes from "./TitleRight.module.scss";
import cn from "classnames";

export default function TitleRight({
  children,
  color = "#000",
  left = false,
  className = "",
}) {
  const leftOrRight = left ? classes.left : classes.right;
  const textAlign = left ? "left" : "right";

  return (
    <div style={{ textAlign: textAlign }} className={classes.wrapper}>
      <p style={{ color: color }} className={cn(leftOrRight, className)}>
        {children}
        <span style={{ backgroundColor: color }} id={classes.line}></span>
      </p>
    </div>
  );
}
