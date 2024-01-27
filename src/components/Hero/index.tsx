import Image from "next/image";
import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="pt-20 w-screen h-screen relative overflow-hidden ">
      <div className="w-full h-full justify-center flex absolute -z-10 after:w-full after:h-full after:-z-[9] after:absolute after:bg-[black] after:blur-3xl">
        <Image
          src="/assets/mesh.svg"
          width={100}
          height={100}
          alt="background image"
          className="w-[80%] ml-32 h-[65%] select-none"
        />
      </div>
      {/* <div className="w-full h-full flex justify-between absolute z-10">
        <div className="w-96 h-full relative">
          <Image
            src="/assets/prism.webp"
            width={100}
            height={100}
            alt="background image"
            className=" absolute left-40 top-56"
          />
        </div>
        <div className="w-96 h-full relative">
          <Image
            src="/assets/phone_scan.png"
            width={200}
            height={200}
            alt="background image"
            className=" absolute right-64 top-56"
          />
        </div>
      </div> */}
      <div className="w-full h-full flex justify-center items-center absolute z-20">
        <div className="w-[40rem] h-[18rem] relative flex flex-col gap-6  -mt-32 text-center">
          <div className="flex flex-col gap-4 items-center ">
            <p className="text-6xl leading-tight">
              Join the future of mobile development
            </p>
            <p className="text-xs w-96 leading-4">
              Emerge Tools is a suite of revolutionary products designed to
              supercharge mobile apps and the teams that build them
            </p>
          </div>
          <Button className="px-7 shadow-gray-300 " fontSize="text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
