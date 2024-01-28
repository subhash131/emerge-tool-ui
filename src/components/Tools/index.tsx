import React from "react";
import Card from "./Card";

const Tools = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center text-center gap-16 pb-10">
      <div>
        <p className="text-4xl leading-tight max-md:text-2xl">
          A platform designed for growth
        </p>
      </div>
      <div className="w-full h-full px-20 grid place-content-center grid-cols-5 pb-10 max-lg:flex-col max-lg:flex max-lg:items-center">
        {data.map(({ title, color, description, stats, symbol }, index) => {
          return (
            <Card
              color={color}
              description={description}
              stats={stats}
              symbol={symbol}
              title={title}
              key={`feat-${index}`}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tools;

const data = [
  {
    title: "Size Analysis",
    symbol: ">",
    stats: "20%",
    description: "reduction in app size",
    color: "orange",
  },
  {
    title: "Performance Analysis",
    symbol: ">",
    stats: "14.6%",
    description: "decrease in app launch time",
    color: "pink",
  },
  {
    title: "Launch Booster",
    symbol: "2X",
    stats: "",
    description: "faster app startup time",
    color: "blue",
  },
  {
    title: "Snapshot",
    symbol: "3X",
    stats: "",
    description: "faster preview and testing",
    color: "violet",
  },
  {
    title: "Reaper",
    symbol: "5X",
    stats: "",
    description: "faster dead code detection",
    color: "green",
  },
];
