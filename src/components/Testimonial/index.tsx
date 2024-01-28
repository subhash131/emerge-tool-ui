import React from "react";
import styles from "./testimonial.module.css";
import List from "./List";

const Testimonials = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center gap-16 pb-10 mt-10">
      <div
        className={`overflow-hidden relative w-full h-24 before:bg-gradient-linear-to-r before:h-full before:w-[5%] before:z-10 before:absolute before:-right-1 before:top-0 after:absolute after:w-[5%] after:h-full after:bg-gradient-linear-to-l after:z-10 after:top-0 after:left-0 whitespace-nowrap flex items-center skew-y-6 bg-[#121420] ${styles.slide_wrap}`}
      >
        <List />
        {/* Copy of same items */}
        <List />
      </div>
      <div>
        <p className="text-2xl leading-tight">
          Trusted by the best mobile teams
        </p>
      </div>
      <div
        className={`overflow-hidden relative w-full h-24 before:bg-gradient-linear-to-r before:h-full before:w-[5%] before:z-10 before:absolute before:-right-1 before:top-0 after:absolute after:w-[5%] after:h-full after:bg-gradient-linear-to-l after:z-10 after:top-0 after:left-0 whitespace-nowrap flex items-center -skew-y-6 bg-[#121420] ${styles.slide_wrap}`}
      >
        <List reverse />
        {/* Copy of same items */}
        <List reverse />
      </div>
    </div>
  );
};

export default Testimonials;
