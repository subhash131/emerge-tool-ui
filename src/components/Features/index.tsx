import React from "react";
import Card from "./Card";

const Features = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center gap-16 pb-10">
      <div>
        <p className="text-4xl leading-tight">A platform designed for growth</p>
      </div>
      <div className="w-full h-full px-20 grid place-content-center grid-cols-5 pb-10 ">
        {data.map(({ title, color, description, stats, symbol }, index) => {
          return (
            <Card
              color={color}
              description={description}
              stats={stats}
              symbol={symbol}
              title={title}
              key={`feat-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;

const data = [
  {
    title: "Size Analysis",
    symbol: ">",
    stats: "20%",
    description: "reduction in size",
    color: "orange",
  },
  {
    title: "Performance Analysis",
    symbol: ">",
    stats: "14.6%",
    description: "increase in app launch time",
    color: "pink",
  },
  {
    title: "Launch Booster",
    symbol: "2X",
    stats: "",
    description: "faster app startup time",
    color: "green",
  },
  {
    title: "Snapshot",
    symbol: "3X",
    stats: "",
    description: "faster testing",
    color: "violet",
  },
  {
    title: "Reaper",
    symbol: "5X",
    stats: "",
    description: "faster dead code detection",
    color: "blue",
  },
];
