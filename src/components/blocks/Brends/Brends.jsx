import React, { createContext, useState } from "react";
import classes from "./Brends.module.scss";
import TitleRight from "../../elements/TitleRight/TitleRight";
import Navbar from "./elements/Navbar/Navbar";
import Content from "./elements/Content/Content";

export const contextNav = createContext(null);

export default function Brends() {
  const [activeNav, setAcriveNav] = useState("Tokuyama dental");

  const handleClick = (activeNav) => setAcriveNav(activeNav);

  return (
    <contextNav.Provider value={{ activeNav: activeNav, onClick: handleClick }}>
      <section className={classes.brends}>
        <div className={classes.title_wrapper}>
          <TitleRight>
            <span>Бренды</span> ГК ПРОТЕКО
          </TitleRight>
        </div>

        <div className={classes.content}>
          <Navbar />

          {activeNav == "Tokuyama dental" && <Content />}
          {activeNav == "Clean + Safe" && (
            <img
              className={classes.content__img}
              src="/src/assets/image/GlomacoBack.png"
              alt=""
            />
          )}
          {activeNav == "Dezaurum" && (
            <img
              className={classes.content__img}
              src="/src/assets/image/ProtecoBack.png"
              alt=""
            />
          )}
          {activeNav == "STEA" && (
            <img
              className={classes.content__img}
              src="/src/assets/image/TokuyamaLogo.png"
              alt=""
            />
          )}
          {(activeNav == "Healtex" || activeNav == "Dezodent") && (
            <div
              style={{
                width: "200px",
                height: "506px",
                marginLeft: "100px",
                backgroundColor: "red",
              }}
            ></div>
          )}
        </div>
      </section>
    </contextNav.Provider>
  );
}
