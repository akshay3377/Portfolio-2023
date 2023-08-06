"use client";

import Button from "../../child/atom/button";
import Link from "next/link";
import Lottie from "react-lottie";
import { Howl } from "howler";
import BoyAnimation from "../../../../public/animation/boy.json";
import { MicIcon, MicPauseIcon } from "../../child/icons";
import { motion } from "framer-motion";
import { useState } from "react";

const HomeSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BoyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const TranslatorToggle = () => {
    setIsPlaying(!isPlaying);

    let sound;
    sound = new Howl({
      src: ["/audio/bio.mp3"],
      autoplay: true,
      loop: false,
      volume: 2.0,
    });
  };

  const pauseButton = () => {
    let sound;
    sound.pause();
    sound = new Howl({
      src: ["/audio/bio.mp3"],
      autoplay: true,
      loop: false,
      volume: 2.0,
    });
  };

  const admin = "AKSHAY KUMAR";

  return (
    <section className=" w-[100%] py-[100px]  ">
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
          <div className="w-[75%] flex flex-col  md:flex-row justify-around items-center mx-auto">
            <div className=" w-[90%]  md:max-w-[450px]">
              <div className="  flex justify-center items-center">
                <div className=" h-[300px] md:h-[400px]">
                  <Lottie options={defaultOptions} className="w-[100%]" />
                </div>
              </div>
            </div>
            <div className=" w-[90%]  md:max-w-[600px] py-[36px]">
              {isPlaying ? (
                <>
                  {" "}
                  <button onClick={TranslatorToggle}>
                    <MicIcon />
                  </button>
                </>
              ) : (
                <button onClick={pauseButton}>
                  <MicPauseIcon />
                </button>
              )}

              <h1 className="font-[800] text-[24px] md:text-[52px] ">
                {admin}
              </h1>
              <p className="mb-[16px] w-full leading-[32px] text-grey-light">
                FRONT-END DEVELOPER with creative designing & developing skills.
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
