import React from "react";
import classes from "./MainHead.module.scss";

import ImageBack from "../../elements/ImageBack/ImageBack";

export default function MainHead() {
  return (
    <section className={`${classes.mainHead}`}>
      <ImageBack maxHeight={916} src={"/src/assets/image/mainBack.png"} />

      <div className={`${classes.mainHead__wrapper} container`}>
        <h3 className={classes.mainHead__subTitle}>ГК ПРОТЕКО</h3>
        <h1 className={classes.mainHead__title}>
          ФЛАГМАН <br /> МЕДИЦИНСКОГО <br /> РЫНКА РОССИИ
        </h1>
        <div className={classes.mainHead__down}>
          <span>вниз</span>
        </div>
      </div>
    </section>
  );
}
