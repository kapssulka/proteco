import React from "react";
import classes from "./MapAndForm.module.scss";
import Form from "../../../../elements/Form/Form";
import MapComponent from "../MapComponents/MapComponents";

export default function MapAndForm() {
  return (
    <div className={classes.content}>
      <MapComponent />
      <Form color="#3A3A3A" />
    </div>
  );
}
