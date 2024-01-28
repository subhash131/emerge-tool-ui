import Image from "next/image";
import React from "react";
import Card3 from "./Card3";

const Card2 = () => {
  return (
    <div className="font-normal w-80 h-80 bg-transparent  relative flex-col gap-4 flex items-center justify-center">
      <div className=" w-full h-[70%] border border-[#201F33] bg-[#10121C] rounded-2xl grid place-content-center relative overflow-hidden">
        <div className="w-28 h-28 glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] flex justify-center items-center">
          <Image
            width={100}
            height={100}
            alt="lock"
            src="/assets/features/lock.svg"
            className="w-10 h-12 z-50"
            draggable={false}
          />
        </div>
        <Image
          width={100}
          height={100}
          alt="lock"
          src="/assets/features/lock.svg"
          className="absolute w-20 h-42 -rotate-12 left-6 -top-5 "
          draggable={false}
        />
        <Image
          width={100}
          height={100}
          alt="lock"
          src="/assets/features/lock.svg"
          className="absolute w-20 h-20 rotate-12 top-2 right-6"
          draggable={false}
        />
        <Image
          width={100}
          height={100}
          alt="lock"
          src="/assets/features/lock.svg"
          className="absolute w-12 h-16 -rotate-12 bottom-16 left-6"
          draggable={false}
        />
        <Image
          width={100}
          height={100}
          alt="lock"
          src="/assets/features/lock.svg"
          className="absolute w-10 h-10 rotate-12 bottom-4 right-6"
          draggable={false}
        />
        <div className="bottom-1 absolute text-left w-[80%] left-6">
          <p className="text-lg ">SOC 2 compliant and Secure</p>
        </div>
      </div>
      <Card3>Infinitely scaleable and Enterprise ready</Card3>
    </div>
  );
};

export default Card2;
