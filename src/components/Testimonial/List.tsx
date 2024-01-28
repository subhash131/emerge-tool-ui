import Image from "next/image";
import React from "react";
import styles from "./testimonial.module.css";

const brands = [
  "bikemap",
  "bumble",
  "classpass",
  "doordash",
  "dropbox",
  "duolingo",
  "faire",
  "fotmob",
  "fullstory",
  "handshake",
  "instabug",
  "life360",
  "square",
  "stream",
  "stripe",
  "tunein",
];

const List = ({ reverse }: { reverse?: boolean }) => {
  return (
    <ul
      className={`inline-block text-lg p-10 items-center select-none ${
        reverse ? styles.logo_slide_reverse : styles.logo_slide
      }`}
    >
      <div className="flex gap-10">
        {brands.map((item, index) => {
          return (
            <li
              className={`flex gap-1 w-32 h-6 object-cover ${
                reverse ? "skew-x-6" : "-skew-x-6"
              }`}
              key={`brands-${index}`}
            >
              <Image
                src={`/assets/brands/${item}.svg`}
                alt={item}
                width={100}
                height={100}
                draggable={false}
              />
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default List;
