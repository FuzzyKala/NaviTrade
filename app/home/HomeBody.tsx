import React from "react";
import Samples from "./Samples/Samples";
import Apps from "./Apps/Apps";

export default function HomeBody() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 pt-10">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 justify-items-center content-center">
        <Samples />
      </div>
      <div className="w-full md:w-1/2 justify-items-center content-center">
        <Apps />
      </div>
    </div>
  );
}
