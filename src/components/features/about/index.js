"use client";

import Button from "../../child/atom/button";
import Link from "next/link";
import LoadingImage from "@/hooks/loadingImage";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [src, { blur }] = LoadingImage("/images/blur.avif", "/images/me.jpg");
  return (
    <section className=" w-[100%] py-[100px] ">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="pt-[10px]"
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
          className={
            "w-[75%] mx-auto flex flex-col md:flex-row justify-around items-center"
          }
        >
          <div className="w-[100%] md:w-[40%] flex justify-center items-center ">
            <img
              src={src}
              style={{
                borderRadius: "12px",
                height: "auto",
                width: "75%",
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
              }}
              alt="profile_pic"
            />
          </div>
          <div className=" w-[100%]  md:w-[54%]  my-[36px] ">
            <h1 className="font-[700] text-[36px] mb-[16px]">
              About me, What My Programming skills.
            </h1>
            <p className="mb-[32px] leading-[36px] text-grey-light">
              <strong className="text-black">Fontend developer</strong> with 2
              years of experience in Building projects using JavaScript, React
              js, Next js, RESTful API, Redux and Firebase. I have worked on
              various web development project's with hands-on experience in
              frontend technologies. such as HTML, CSS, and JavaScript, as well
              as frameworks like React and Next, to build scalable and modular
              applications, crafting clean and semantically structured code to
              develop visually appealing and interactive user interfaces.
            </p>
            <div className="flex">
              <Button
                className={"bg-black text-white mr-[4px]"}
                children={<s>Download CV</s>}
              />
              <Link href={"/contact"}>
                <Button>{"Contact Me"}</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
