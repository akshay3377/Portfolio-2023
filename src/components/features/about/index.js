"use client";

import LoadingImage from "@/hooks/loadingImage";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutProfilePic = "/images/me.jpg";
const LoadingBlurImage = "/images/blur.avif";

const AboutTitle = ["Main skills", "Experience", "Education & Certification"];

const AboutTitleData = [
  {
    title: "Main skills",
    details: [
      {
        title: "User Experience",
        subTitle: "Development",
        discription: "Websites, web experiences.",
      },
      {
        title: "User interface design",
        subTitle: "Designing",
        discription: "Delight the user and make it work.",
      },
    ],
  },

  {
    title: "Experience",
    details: [
      {
        title: "Frontend developer",
        subTitle: "React Js Developer",
        discription: `2023`,
      },
      {
        title: "Frontend developer",
        subTitle: "Intern",
        discription: `2022`,
      },
    ],
  },
  {
    title: "Education & Certification",
    details: [
      {
        title: "Bachelor of Computer Applications",
        subTitle: "Software Engineer",
        discription: "2018-2021",
      },
      {
        title: "I.T",
        subTitle: "Programming",
        discription: "2018",
      },
    ],
  },
];

const AboutSection = () => {
  const [selectAboutTitle, setSelectAboutTitle] = useState(
    AboutTitleData[0].title
  );
  const [data, setData] = useState(AboutTitleData[0].details);

  const handleSelectAboutTitle = (title) => {
    setSelectAboutTitle(title);
    if (title)
      setData(AboutTitleData.find((item) => item.title === title)?.details);
  };

  const [src, { blur }] = LoadingImage(LoadingBlurImage, AboutProfilePic);

  return (
    <section className=" w-full px-[24px] py-[60px]">
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
            "max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-around items-center"
          }
        >
          <div className=" max-w-[500px] flex justify-center items-center  p-4">
            <img
              src={src}
              style={{
                borderRadius: "62% 38% 64% 36% / 49% 61% 39% 51% ",
                height: "auto",
                width: "85%",
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
              }}
              alt="profile_pic"
            />
          </div>
          <div className=" max-w-[650px] p-4  my-[36px] ">
            <h1 className="font-[700] text-[36px] mb-[16px]">About Me</h1>
            <p className="mb-[32px] leading-[32px] text-[#717173]">
              Front-End developer, I specialize in creating visually appealing
              and user-friendly interfaces for websites and web applications. My
              expertise lies in crafting clean and engaging user interfaces that
              enhance the overall user experience.
            </p>
            <div className="flex flex-wrap ">
              {AboutTitle.map((title, index) => {
                return (
                  <div
                    key={index}
                    className="py-2 relative inline-block cursor-pointer mr-[36px]  "
                    onClick={() => {
                      handleSelectAboutTitle(title);
                    }}
                  >
                    <p
                      className={` text-[16px]  font-[500] ${
                        selectAboutTitle === title && "text-red"
                      }`}
                    >
                      {" "}
                      {title}
                    </p>
                    <span
                      className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-red transform origin-left ${
                        selectAboutTitle === title ? "scale-x-10" : "scale-x-0"
                      } transition-transform duration-300`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="py-6 ">
              {data?.map((item) => {
                return (
                  <div className="mb-[16px]">
                    <p className="text-[16px]  font-[500]  leading-[36px]">
                      {item.title} -{" "}
                      <span className=" text-[#717173]">{item.subTitle}</span>{" "}
                    </p>
                    <p className="leading-[36px]  text-[#717173]">
                      {item.discription}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
