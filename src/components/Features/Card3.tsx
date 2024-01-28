import React from "react";

const Card3 = ({ children }: { children: string }) => {
  return (
    <div className="w-80 h-[4.6rem] border border-[#201F33] justify-center bg-[#10121C] rounded-2xl text-left flex flex-col gap-2 pt-2 px-4 relative overflow-hidden">
      <p className=" px-2 text-base">{children}</p>
      <div className="w-1 h-1  glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] absolute top-0"></div>
      <div className="w-1 h-1 ml-auto glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] absolute right-0 bottom-0"></div>
    </div>
  );
};

export default Card3;
