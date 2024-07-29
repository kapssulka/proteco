import React, { useContext } from "react";
import { createPortal } from "react-dom";

import classes from "./ModalPattern.module.scss";
import cn from "classnames";
import { modalContext } from "../../../App";

const modal = document.querySelector("#modal");

export default function Modal({ children }) {
  const { activeModal, setActiveModal } = useContext(modalContext);

  return createPortal(
    <div
      onClick={() => setActiveModal(false)}
      className={cn(classes.modal, {
        [classes.active]: activeModal,
      })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modal__element}
      >
        {children}
        <span
          className={classes.close}
          onClick={() => setActiveModal(false)}
        ></span>
      </div>
    </div>,
    modal
  );
}
