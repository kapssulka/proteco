import React from "react";
import classes from "./MainHead.module.scss";

export default function MainHead() {
  return (
    <section className={`${classes.mainHead} container`}>
      <h3 className={classes.mainHead__subTitle}>ГК ПРОТЕКО</h3>
      <h1 className={classes.mainHead__title}>
        ФЛАГМАН <br /> МЕДИЦИНСКОГО <br /> РЫНКА РОССИИ
      </h1>
      <div className={classes.mainHead__down}>
        <span>вниз</span>
      </div>
    </section>
  );
}
