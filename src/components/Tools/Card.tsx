"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import styles from "./tools.module.css";
import toast from "react-hot-toast";

type FeatureCardType = {
  title: string;
  symbol: string;
  stats: string;
  description: string;
  color: string;
  index: number;
};

const Card = ({
  title,
  symbol,
  stats,
  description,
  color,
  index,
}: FeatureCardType) => {
  return (
    <div
      className={`cursor-pointer w-72 h-96 border transition-all duration-500 rounded-md py-4 px-6 bg-[#070607] relative ${
        color === "orange"
          ? `${styles.orange}`
          : `${
              color === "pink"
                ? `${styles.pink}`
                : `${
                    color === "blue"
                      ? `${styles.blue}`
                      : `${
                          color === "violet"
                            ? `${styles.violet}`
                            : `${styles.green}`
                        }`
                  }`
            }`
      }`}
      onClick={() => {
        toast.error("This demo app doesn't respond to clicks");
      }}
    >
      <div className="flex w-full whitespace-nowrap flex-col text-start">
        <p className="py-4 font-extrabold text-lg ">{title}</p>
        <div className="flex items-center mt-12">
          <p className="text-8xl">{symbol}</p>
          <p className="text-6xl">{stats}</p>
        </div>
        <p className="text-sm text-wrap">{description}</p>
        <div className="flex gap-2 leading-6 mt-20">
          Read More <ArrowRight />{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
