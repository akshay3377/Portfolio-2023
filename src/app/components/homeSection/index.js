"use client";

import { useState } from "react";
import { SOCIAL_LINKS } from "../contactSection";
import Button from "../child/atom/button";
import Link from "next/link";

const HomeSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="bg-grey py-[240px] relative">
      <div className="w-container mx-auto flex flex-col justify-center items-center ">
        {/* <h1 className="font-[700] text-[76px] text-end ">Akshay kumar</h1>
        <p>Frontend developer with creative designing skills</p> */}
        <Link href={"/contact"}>
          {" "}
          <Button>{"GET IN TOUCH"}</Button>
        </Link>
      </div>

      <div className="absolute bottom-90 left-4">
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
                <span className="text-[12px] bg-[#00000088] w-[80px] flex justify-center items-center text-white rounded-sm font-[600]">
                  {social.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSection;
