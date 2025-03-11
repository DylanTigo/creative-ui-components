"use client";

import React, { useState } from "react";

const Buttons4 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      style={{ backgroundColor: !isActive ? "#09090b" : "#7f1d1d" }}
      className="!rounded-lg text-zinc-100 overflow-hidden btn"
    >
      <div className="h-6 place-content-center overflow-y-hidden">
        <div
          style={{
            transform: !isActive ? "translateY(0)" : "translateY(-100%)",
          }}
          className="flex flex-col overflow-x-hidden mx-auto w-[53px] rounded-full transition-transform duration-300"
        >
          <div className="flex items-center">
            <div className="flex gap-1.5 items-center pr-1.5 anime-translate">
              <span className="size-2 rounded-full bg-zinc-100"></span>
              Click
            </div>
            <div className="flex gap-1.5 items-center pr-1.5 anime-translate">
              <span className="size-2 rounded-full bg-zinc-100"></span>
              Click
            </div>
          </div>
        </div>
        <div
          style={{
            transform: !isActive ? "translateY(0)" : "translateY(-100%)",
          }}
          className="flex flex-col overflow-x-hidden mx-auto w-[53px] rounded-full transition-transform duration-300"
        >
          <div className="flex items-center w-full">
            <div className="flex gap-1.5 items-center pr-1.5 anime-translate">
              <span className="text-sm font-bold">x</span>
              Close
            </div>
            <div className="flex gap-1.5 items-center pr-1.5 anime-translate">
              <span className="text-sm font-bold">x</span>
              Close
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Buttons4;
