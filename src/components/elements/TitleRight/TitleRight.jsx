import React from "react";
import classes from "./TitleRight.module.scss";
import cn from "classnames";

export default function TitleRight({ children, left = false, className = "" }) {
  const beforeStyle = left ? classes.left : classes.right;

  return (
    <p className={cn(classes.mission, beforeStyle, className)}>{children}</p>
  );
}
