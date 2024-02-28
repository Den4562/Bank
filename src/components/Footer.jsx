import React from "react";
import s from "../style/footer.module.css";
import imgFooter from "../assets/Shepard.jpg";
const Footer = () => {
  return (
    <div>
      <div className={s.footerContainer}>
        <p className={s.footerText}>
          Upgrade to PRO to get access all Features!
        </p>
        <div className={s.footerBtn}>
          <p>Get pro now!</p>
        </div>
      </div>
      <div className={s.profile}>
        <img className={s.footerImg} src={imgFooter} alt="" />
        <p className={s.profileName}>John Shepard</p>
        <p className={s.profileStatus}>Captain Normandy SR-2</p>
      </div>
    </div>
  );
};

export default Footer;
