import React from "react";
import s from "../style/header.module.css";
import imgLogo from "../assets/setting.png";
const Header = () => {
  return (
    <div className={s.logo}>
      <img className={s.logoImg} src={imgLogo} alt="Your Image" />
      <h2 className={s.logoTitle}>Dashboard</h2>
      <p className={s.logoV}>v.01</p>
    </div>
  );
};

export default Header;
