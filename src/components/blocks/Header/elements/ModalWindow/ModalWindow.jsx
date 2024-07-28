import classes from "./ModalWindow.module.scss";

import Modal from "../../../../elements/Modal/Modal";
import Form from "../../../../elements/Form/Form";
import TitleRight from "../../../../elements/TitleRight/TitleRight";

export default function ModalWindow() {
  return (
    <Modal>
      <TitleRight left={true}>
        <span>Связаться</span> с нами
      </TitleRight>

      <Form className={classes.modalForm} color="#3A3A3A" />
    </Modal>
  );
}
