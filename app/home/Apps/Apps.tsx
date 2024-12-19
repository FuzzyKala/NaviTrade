import React from "react";
import Image from "next/image";

export default function Apps() {
  return (
    <div className="flex flex-col md:flex-row">
      <Image
        src="/apps.png"
        alt="apps"
        width={350}
        height={200}
        className="me-3 md:w-auto md:h-auto w-40 h-40"
      />
    </div>
  );
}
