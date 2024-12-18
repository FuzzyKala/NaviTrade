import React from "react";
import Link from "next/link";

export default function Menu({ toggleMenu, isMenuOpen }) {
  return (
    <>
      <button className="md:hidden text-2xl p-2" onClick={toggleMenu}>
        ☰
      </button>
      <ul
        className={`hidden md:flex flex-col md:flex-row items-center justify-between px-4 md:px-8 font-semibold text-2xl md:space-x-10`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
