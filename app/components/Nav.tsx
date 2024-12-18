"use client";
import React, { useState } from "react";
import LoginBtn from "./navComponents/LoginBtn";
import Logo from "./navComponents/Logo";
import Menu from "./navComponents/Menu";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="p-5 flex w-full justify-evenly items-center">
      <Logo />
      <Menu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <LoginBtn />
    </nav>
  );
}
