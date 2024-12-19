"use client";
import React from "react";
import LoginBtn from "./LoginBtn";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <Menu />
      <LoginBtn />
    </nav>
  );
}
