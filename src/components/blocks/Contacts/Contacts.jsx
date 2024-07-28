import React from "react";
import classes from "./Contacts.module.scss";

import TitleRight from "../../elements/TitleRight/TitleRight";
import TextContent from "./elements/TextContent/TextContent";
import MapAndForm from "./elements/MapAndForm/MapAndForm";

export default function Contacts() {
  return (
    <section className={classes.contacts}>
      <TitleRight>
        География и <span>контакты</span>
      </TitleRight>

      <MapAndForm />

      <TextContent />
    </section>
  );
}
