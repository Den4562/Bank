import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import s from "../style/layout.module.css";
const Layout = () => {
  return (
    <div className={s.layout_container}>
      <Navigation />
      <div className={s.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
