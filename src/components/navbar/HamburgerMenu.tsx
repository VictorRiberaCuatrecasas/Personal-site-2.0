import styles from "./HamburgerMenu.module.scss";
import { HandleMenuType } from "../types";
import { useState } from "react";

export default function HamburgerMenu({handleMenu}: {handleMenu: HandleMenuType}) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={`${styles.navIcon} ${isActive ? styles.open : ""}`}
      onClick={() => {
        handleMenu();
        toggleClass();
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
