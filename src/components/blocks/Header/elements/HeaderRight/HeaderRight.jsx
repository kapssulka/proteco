import React, { createContext, useState } from "react";
import classes from "./HeaderRight.module.scss";
import Menu from "../Menu/Menu";

import ConnectWithUs from "./elements/СonnectWithUs/СonnectWithUs";
import Language from "./elements/Language/Language";
import ModalWindow from "../ModalWindow/ModalWindow";

export const modalContext = createContext(null);

export default function HeaderRight() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <modalContext.Provider
        value={{ activeModal: activeModal, setActiveModal: setActiveModal }}
      >
        <div className={classes.wrapper}>
          <ConnectWithUs />

          <Language />

          <Menu />
        </div>

        <ModalWindow />
      </modalContext.Provider>
    </>
  );
}
