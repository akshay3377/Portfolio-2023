"use client";
import React from "react";
import Slider from "react-slick";

import { CustomPrevArrow, CustomNextArrow } from "@/components/child/atom/b";

const CenterMode = () => {
  const settings = {
    // dots: true,
    centerMode: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 3,
    // speed: 500,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="max-w-[1400px] mx-auto ">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7].map((slide, index) => (
          <div key={index} className="px-4">
            <div className="mx-auto bg-red h-[250px] rounded-lg">{index}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
