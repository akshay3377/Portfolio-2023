"use client";

import Button from "../../child/atom/button";
import Link from "next/link";
import Lottie from "react-lottie";
import BoyAnimation from "../../../../public/animation/boy.json";
import { motion } from "framer-motion";
import AudioPlayer from "@/components/child/atom/play";

const HomeSection = () => {
  const admin = "AKSHAY KUMAR";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BoyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className=" w-full py-[100px] ">
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
              <AudioPlayer src={"/audio/bio.mp3"} />
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
