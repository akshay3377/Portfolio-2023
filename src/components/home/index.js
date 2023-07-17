"use client";

import { useState } from "react";
import { SOCIAL_LINKS } from "../contact";
import Button from "../child/atom/button";
import Link from "next/link";
import AnimationWithSound from "../child/BioLottie";

const HomeSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="bg-grey py-[130px] ">
      <div className="float-left sticky top-[60px] left-6">
        {SOCIAL_LINKS.map((social, index) => {
          return (
            <div key={index} className="mb-[16px] flex ">
              <a
                onMouseEnter={handleShow}
                onMouseLeave={handleShow}
                href={social.link}
                target="_blank"
              >
                {<social.icon className="h-[30px] w-[30px] mr-[10px]" />}
              </a>
              {show && (
                <span
                  className={`text-[12px] ${social.customBgColor} w-[70px] flex justify-center items-center text-white rounded-[4px] font-[600]`}
                >
                  {social.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-[75%] flex flex-col  md:flex-row justify-around items-center mx-auto">
        <div className=" w-[90%]  md:w-[45%]">
          <div className="  flex justify-center items-center">
            <AnimationWithSound className=" h-[250px] md:h-[400px]" />
          </div>
        </div>
        <div className=" w-[90%]  md:w-[45%] py-[36px]     ">
          <h1 className="font-[800] text-[24px]    md:text-[52px] mb-[2px]">
            AKSHAY KUMAR
          </h1>

          <p className="mb-[24px] w-full">
            <strong>FRONT-END DEVELOPER</strong> with creative designing &
            developing skills.
          </p>
          <Link href={"/contact"}>
            <Button>{"GET IN TOUCH"}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
