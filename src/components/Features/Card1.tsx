import Image from "next/image";
import React from "react";

const logo = [
  {
    class: "",
    image: "",
  },
];

const Card1 = () => {
  return (
    <div className="w-80 h-80 bg-[#10121C] border border-[#201F33] rounded-2xl overflow-hidden relative flex items-center justify-center">
      <div className="w-[22rem] h-[22rem] rounded-full border border-[#201F33] absolute" />
      <div className="w-60 h-60 rounded-full border border-[#201F33] absolute" />
      <div className="w-28 h-28 glow shadow-[#1D1E34] bg-[#201848 bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] absolute grid place-content-center">
        <Image
          width={100}
          height={100}
          alt="thunder"
          src="/assets/features/thunder.svg"
          className="w-12 h-12 "
          draggable={false}
        />
      </div>
      <div className="absolute top-12 left-16 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Image
          width={100}
          height={100}
          alt="javascript"
          src="/assets/features/javascript.svg"
          className="w-5 h-5 object-cover "
          draggable={false}
        />
      </div>
      <div className="absolute top-24 right-5 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Image
          width={100}
          height={100}
          alt="android"
          src="/assets/features/android.svg"
          className="w-6 h-6 object-cover "
          draggable={false}
        />
      </div>
      <div className="absolute bottom-12 right-10 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Image
          width={100}
          height={100}
          alt="apple"
          src="/assets/features/apple.svg"
          className="w-8 h-8 object-cover "
          draggable={false}
        />
      </div>
      <div className="absolute bottom-16 left-6 w-14 h-14 rounded-full border border-[#2B294B] bg-[#121420] grid place-content-center icon_gradient_background">
        <Image
          width={100}
          height={100}
          alt="aws"
          src="/assets/features/aws.svg"
          className="w-14 h-14 object-cover "
          draggable={false}
        />
      </div>
      <div className="bottom-1 absolute text-left w-full px-4">
        <p className="font-normal text-base">
          Full native cross-platform support for iOS & Android
        </p>
      </div>
    </div>
  );
};

export default Card1;
