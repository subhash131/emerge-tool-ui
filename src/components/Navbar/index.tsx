"use client";
import React from "react";
import Button from "../Button";
import toast from "react-hot-toast";

const items = [
  "Documentation",
  "Blog",
  "Case Studies",
  "News Letters",
  "Careers",
];

const Navbar = () => {
  return (
    <div
      className="w-full h-20 flex items-center px-8 justify-between backdrop-blur-sn bg-black text-sm fixed top-0 z-50"
      onClick={() => {
        toast.error("This demo app doesn't respond to clicks.");
      }}
    >
      <div className="py-2 border border-[#616160] relative px-6 bg-black cursor-pointer select-none">
        <div className="w-1 h-1 rounded-full bg-white absolute -top-[0.2rem] -left-[0.2rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -top-[0.2rem] -right-[0.2rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -bottom-[0.2rem] -right-[0.2rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -bottom-[0.2rem] -left-[0.2rem]"></div>
        Emerge Tools
      </div>
      <div className="flex gap-10 ">
        <ul className="flex gap-2 text-xs items-center max-md:hidden">
          {items.map((item, index) => {
            return (
              <li
                className="p-2 pointer-events-auto cursor-wait"
                key={`nav-${index}`}
                style={{ cursor: "pointer" }}
              >
                {item}
              </li>
            );
          })}
        </ul>

        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
