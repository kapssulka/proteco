import React from "react";
import classes from "./СonnectWithUs.module.scss";
import { useContext } from "react";
import { modalContext } from "../../../../../../../App";

export default function СonnectWithUs() {
  const { setActiveModal } = useContext(modalContext);

  return (
    <a onClick={() => setActiveModal("connect")} className={classes.btn}>
      Связаться с нами
    </a>
  );
}
