import React from "react";
import Image from "next/image";
export default function Logo() {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Logo"
        width={300}
        height={200}
        priority
        className="w-40 h-10 md:w-auto md:h-auto"
      />
    </>
  );
}
