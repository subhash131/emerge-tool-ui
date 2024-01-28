import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full h-14 px-10 text-gray-400 mt-10 text-sm">
      <hr className="border border-[#616160]" />
      <div className="h-full w-full flex items-center justify-between">
        <p>
          {date.getFullYear()} &#169;{" "}
          <a href="mailto:subhashnayak131@gmail.com">
            subhashnayak131@gmail.com
          </a>
        </p>
        <ul className="flex gap-2">
          <li>Tech used to build this website:</li>
          <li>Next.js,</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
