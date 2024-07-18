import React from "react";
import classes from "./Companies.module.scss";
import ImageBack from "../../elements/ImageBack/ImageBack";
import TitleRight from "../../elements/TitleRight/TitleRight";
import Glomaco from "./elements/Glomaco/Glomaco";
import Proteco from "./elements/Proteco/Proteco";

export default function Companies() {
  return (
    <section style={{ position: "relative" }} className={classes.companies}>
      <ImageBack maxHeight="586" src="/src/assets/image/CompaniesBack.png" />

      <div className={classes.container}>
        <TitleRight
          color="#fff"
          className={classes.companies__title}
          left={true}
        >
          <span>Компании</span> ГК ПРОТЕКО
        </TitleRight>

        <div className={classes.companies__content}>
          <Glomaco />
          <Proteco />
        </div>
      </div>
    </section>
  );
}
