import React from "react";
import classes from "./ModalContent.module.scss";
import ModalPattern from "/src/components/elements/ModalPattern/ModalPattern";
import TitleRight from "../../../../../../elements/TitleRight/TitleRight";
import Form from "../../../../../../elements/Form/Form";

export default function ModalContent() {
  return (
    <ModalPattern>
      <TitleRight left={true}>
        <span>Связаться</span> с нами
      </TitleRight>

      <Form className={classes.modalForm} color="#3A3A3A" />
    </ModalPattern>
  );
}
