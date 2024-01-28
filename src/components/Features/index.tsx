import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Features = () => {
  return (
    <div className="mt-32 flex xl:gap-20 max-md:flex-col max-md:px-20 max-md:gap-4 items-center max-lg:flex-col gap-4">
      <Card1 />
      <div className="flex flex-col gap-2">
        <Card3>Customizable slack alerting</Card3>
        <Card3>Accurately measure performance metrics</Card3>
        <Card3>API access to raw size and performance data</Card3>
        <Card3>Run a performance comparison of any two builds</Card3>
      </div>
      <Card2 />
    </div>
  );
};

export default Features;
