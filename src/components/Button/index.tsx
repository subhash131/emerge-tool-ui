import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div className="relative place-content-center grid ">
      <div className="z-10 absolute left-[2px] top-[2px]  w-[calc(100%-4px)] h-[calc(100%-4px)] grid place-content-center rounded-3xl pointer-events-none text-xs">
        {" "}
        {children}
      </div>
      <button
        className={`py-2 rounded-3xl px-6 relative  ${styles.button}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
