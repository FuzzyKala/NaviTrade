import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 p-5 flex w-full justify-between">
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={200}
        priority
        className="w-auto h-auto"
      />

      <ul className="flex justify-center items-center space-x-10 font-sans font-semibold text-2xl me-20">
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
    </nav>
  );
}
