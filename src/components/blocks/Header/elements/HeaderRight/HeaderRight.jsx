import React, { useContext } from "react";
import classes from "./HeaderRight.module.scss";
import Menu from "../Menu/Menu";

import ConnectWithUs from "./elements/СonnectWithUs/СonnectWithUs";
import Language from "./elements/Language/Language";

import TitleRight from "../../../../elements/TitleRight/TitleRight";
import Form from "../../../../elements/Form/Form";
import ModalPattern from "/src/components/elements/ModalPattern/ModalPattern";
import { modalContext } from "../../../../../App";

// export const modalContext = createContext(null);

export default function HeaderRight() {
  const { activeModal } = useContext(modalContext);

  return (
    <>
      <div className={classes.wrapper}>
        <ConnectWithUs />

        <Language />

        <Menu />
      </div>

      <ModalPattern>
        {activeModal == "connect" && (
          <div>
            <TitleRight left={true}>
              <span>Связаться</span> с нами
            </TitleRight>
            <Form className={classes.modalForm} color="#3A3A3A" />
          </div>
        )}

        {activeModal == "tanks" && (
          <div>
            <TitleRight left={true}>
              <span>Спасибо</span> за обращение!
            </TitleRight>

            <p className={classes.modalThanksText}>
              Ожидайте звонка, скоро с Вами свяжется наш менеджер
            </p>
          </div>
        )}
      </ModalPattern>
    </>
  );
}
