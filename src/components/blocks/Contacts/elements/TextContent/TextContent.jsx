import React from "react";
import classes from "./TextContent.module.scss";

export default function TextContent() {
  return (
    <div className={classes.content}>
      <h2 className={classes.content__title}>
        Головной офис ГК ПРОТЕКО располагается
        <span id="blue"> в Санкт-Петербурге</span>
      </h2>

      <p className={classes.content__adress}>
        Санкт-Петербург <br /> ул. Варшавская, д.5, корп. 2, офис 401, БЦ
        "Варшавский"
      </p>

      <div className={classes.content__contact}>
        <a className={classes.content__contact_tel} href="tel:+78126358890">
          +7 (812) 635-88-90
        </a>
        <a
          className={classes.content__contact_email}
          href="mailto:info@protecodent.ru"
        >
          info@protecodent.ru
        </a>
      </div>
    </div>
  );
}
