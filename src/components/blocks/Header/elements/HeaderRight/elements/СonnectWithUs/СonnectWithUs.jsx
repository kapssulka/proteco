import React from "react";
import classes from "./СonnectWithUs.module.scss";
import { modalContext } from "../../HeaderRight";
import { useContext } from "react";

export default function СonnectWithUs() {
  const { setActiveModal } = useContext(modalContext);

  return (
    <a
      onClick={() => {
        setActiveModal(true);
      }}
      className={classes.btn}
    >
      Связаться с нами
    </a>
  );
}
