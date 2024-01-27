import Image from "next/image";
import React from "react";
import Button from "../Button";
import styles from "./hero.module.css";
import { Drum, GitCompareArrows, Rocket, Scaling, Skull } from "lucide-react";

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
      <div className="w-full h-full gap-24 flex justify-center flex-col items-center absolute z-30 ">
        <div className="w-[40rem] h-[18rem] relative flex flex-col gap-16 -mt-32 text-center">
          <div className="flex flex-col gap-4 items-center ">
            <p className="text-6xl leading-tight">
              Join the future of mobile development
            </p>
            <p className="text-xs w-96 leading-4">
              Emerge Tools is a suite of revolutionary products designed to
              supercharge mobile apps and the teams that build them
            </p>
          </div>
          <Button
            className="px-10 pointer-events-auto text-base"
            fontSize="text-base"
          >
            Get Started
          </Button>
        </div>
        <div
          className={` overflow-hidden relative w-[calc(100px*5)]  before:bg-gradient-linear-to-r before:h-full before:w-[15%] before:z-10 before:absolute before:-right-1 before:top-0 after:absolute after:w-[15%] after:h-full after:bg-gradient-linear-to-l after:z-10 after:top-0 after:left-0 whitespace-nowrap flex items-center h-5 ${styles.slide_wrap}`}
        >
          <ul
            className={`inline-block text-xs items-center ${styles.logo_slide}`}
          >
            <div className="flex gap-8 ml-8">
              <li className="flex gap-1">
                <Scaling size={16} strokeWidth={1} />
                Size Analysis
              </li>
              <li className="flex gap-1">
                <Drum size={16} strokeWidth={1} />
                Performance Analysis
              </li>
              <li className="flex gap-1">
                <GitCompareArrows size={16} strokeWidth={1} />
                Snapshots
              </li>
              <li className="flex gap-1">
                <Rocket size={16} strokeWidth={1} /> Launch Booster
              </li>
              <li className="flex gap-1">
                <Skull size={16} strokeWidth={1} />
                Reaper
              </li>
            </div>
          </ul>
          {/* Copy of same items */}
          <ul
            className={`inline-block  text-xs items-center ${styles.logo_slide}`}
          >
            <div className="flex gap-8 ml-8">
              <li className="flex gap-1">
                <Scaling size={16} strokeWidth={1} />
                Size Analysis
              </li>
              <li className="flex gap-1">
                <Drum size={16} strokeWidth={1} />
                Performance Analysis
              </li>
              <li className="flex gap-1">
                <GitCompareArrows size={16} strokeWidth={1} />
                Snapshots
              </li>
              <li className="flex gap-1">
                <Rocket size={16} strokeWidth={1} /> Launch Booster
              </li>
              <li className="flex gap-1">
                <Skull size={16} strokeWidth={1} />
                Reaper
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
