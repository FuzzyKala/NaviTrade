import React from "react";
import Image from "next/image";

export default function Apps() {
  return (
    <div className="pe-20 pt-10">
      <Image
        src="/apps.png"
        alt="apps"
        width={350}
        height={200}
        className="me-3 w-auto h-auto"
      />
    </div>
  );
}
