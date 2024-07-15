import React from "react";
import classes from "./Purpose.module.scss";
import HeadPurpose from "./elements/HeadPurpose/HeadPurpose";
import MainPurpose from "./elements/MainPurpose/MainPurpose";

export default function Purpose() {
  return (
    <section className={`${classes.purpose} container`}>
      <HeadPurpose />

      <MainPurpose />
      <div className={classes.footer}></div>
    </section>
  );
}
