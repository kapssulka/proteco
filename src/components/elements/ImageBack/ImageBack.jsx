import React from "react";
import classes from "./ImageBack.module.scss";

export default function ImageBack({ src = "", maxHeight = null }) {
  let height = maxHeight === null ? "100%" : `${maxHeight}px`;

  return (
    <div className={classes.background_img}>
      <img style={{ maxHeight: height }} src={src} alt="background image" />
    </div>
  );
}
