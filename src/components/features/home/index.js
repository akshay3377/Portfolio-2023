"use client";

import { useState } from "react";
import Button from "../../child/atom/button";
import Link from "next/link";
import Lottie from "react-lottie";
import { Howl, Howler } from "howler";
import BoyAnimation from "../../../../public/animation/boy.json";
import { MicIcon } from "../../child/icons";
import { SOCIAL_LINKS } from "../contact";
import { motion } from "framer-motion";

const HomeSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const [disable, setIsDisable] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BoyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const TranslatorToggle = () => {
    setIsDisable(true);
    let sound;
    sound = new Howl({
      src: ["/audio/bio.mp3"],
      autoplay: true,
      loop: false,
      volume: 2.0,
    });
  };

  return (
    <section className=" w-[100%] py-[100px] ">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={{
            offscreen: {
              y: 100,
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            },
          }}
        >
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
                <div className=" h-[250px] md:h-[400px]">
                  <Lottie options={defaultOptions} className="w-[100%]" />
                </div>
              </div>
            </div>
            <div className=" w-[90%]  md:w-[45%] py-[36px]">
              <button onClick={TranslatorToggle}>
                <MicIcon />
              </button>
              <h1 className="font-[800] text-[24px]    md:text-[52px] mb-[2px]">
                AKSHAY KUMAR
              </h1>
              <p className="mb-[20px] w-full leading-[32px] text-grey-light">
                <strong className="text-black">FRONT-END DEVELOPER </strong>
                with creative designing & developing skills.
              </p>
              <Link href={"/contact"}>
                <Button>{"GET IN TOUCH"}</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HomeSection;
