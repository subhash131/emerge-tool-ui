import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-14 px-10 text-gray-400 mt-20 text-sm">
      <hr className="border border-[#616160]" />
      <div className="h-full w-full flex items-center px-6 py-4 justify-between max-md:flex-col max-md:gap-4 max-md:items-start max-md:pb-10">
        <p>
          For work contact me at: &nbsp;
          <a href="mailto:subhashnayak131@gmail.com">
            subhashnayak131@gmail.com
          </a>
        </p>
        <div>
          <p>Tech used to build this website</p>
          <ul className="flex gap-2">
            <li>Next.js,</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
