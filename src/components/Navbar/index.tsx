import React from "react";
import Button from "../Button";

const items = [
  "Documentation",
  "Blog",
  "Case Studies",
  "News Letters",
  "Careers",
];

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center px-8 justify-between bg-transparent backdrop-blur-md bg--600 text-sm fixed top-0">
      <div className="py-2 border border-[#616160] relative px-6">
        <div className="w-1 h-1 rounded-full bg-white absolute -top-[0.1rem] -left-[0.1rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -top-[0.1rem] -right-[0.1rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -bottom-[0.1rem] -right-[0.1rem]"></div>
        <div className="w-1 h-1 rounded-full bg-white absolute -bottom-[0.1rem] -left-[0.1rem]"></div>
        Emerge Tools
      </div>
      <div className="flex gap-10 ">
        <ul className="flex gap-2 text-xs items-center ">
          {items.map((item, index) => {
            return (
              <li className="cursor-pointer p-2" key={`nav-${index}`}>
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
