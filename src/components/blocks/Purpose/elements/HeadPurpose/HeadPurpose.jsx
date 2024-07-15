import React from "react";
import classes from "./HeadPurpose.module.scss";
import TirleRight from "../../../../elements/TirleRight/TirleRight";

export default function HeadPurpose() {
  return (
    <div className={classes.head}>
      <h2 className={classes.head__title}>
        Наша главная цель – <span id="blue">забота о клиентах</span> и повышение
        качества их жизни!
      </h2>
      <TirleRight>
        Миссия <span id="blue">компании</span>
      </TirleRight>
    </div>
  );
}
