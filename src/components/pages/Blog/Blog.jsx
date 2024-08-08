import React from "react";
import classes from "./Blog.module.scss";
import Header from "../../blocks/Header/Header";
import BreadCrumbs from "../../elements/BreadCrumbs/BreadCrumbs";
import { NavLink, Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Header backgroundColor="linear-gradient(to left, #3A3A3A, #0F0F0F)" />
      <main className={classes.container}>
        <BreadCrumbs />

        <h1 className={classes.title}>Блог</h1>

        <div className={classes.links}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activeNav : "")}
            to="news"
          >
            Новости
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activeNav : "")}
            to="video"
          >
            Видео
          </NavLink>
        </div>

        <Outlet />
      </main>
      ;
    </>
  );
}
