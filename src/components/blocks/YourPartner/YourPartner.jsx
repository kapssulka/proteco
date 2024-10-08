import React from "react";
import classes from "./YourPartner.module.scss";
import ImageBack from "../../elements/ImageBack/ImageBack";
import TitleRight from "../../elements/TitleRight/TitleRight";
import ContentText from "./elements/ContentText/ContentText";
import Form from "../../elements/Form/Form";

export default function YourPartner() {
  return (
    <section className={classes.yourPartner}>
      <ImageBack maxHeight={775} src="/src/assets/image/yourPartner.png" />

      <div className={classes.wrapper}>
        <TitleRight color="#fff" className={classes.subTitle} left={true}>
          <span>ПАРТНЕРСТВО</span> С ГК ПРОТЕКО
        </TitleRight>

        <div className={classes.content}>
          <ContentText />

          <Form />
        </div>
      </div>
    </section>
  );
}
