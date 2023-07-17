"use client";

import React from "react";
import Lottie from "react-lottie";
import Car from "../../../../public/animation/car.json";
export default function Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Car,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const DATE = new Date().getFullYear();
  return (
    <div className="bg-black  flex   justify-center  h-[60px] ">
      <div className="text-center text-white flex justify-center items-center ">
        &#169; {DATE} All rights reserved.
      </div>
      <div className=" w-[150px]">
        <Lottie options={defaultOptions} className="w-[100%]" />
      </div>
    </div>
  );
}
