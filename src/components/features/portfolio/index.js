"use client";

import Image from "next/image";
import work1 from "../../../../public/images/work1.png";
import work2 from "../../../../public/images/work2.png";
import work3 from "../../../../public/images/work3.png";
import work4 from "../../../../public/images/work4.png";
import work5 from "../../../../public/images/work5.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/child/atom/button";

const DATA = [
  {
    value: "Designing",
    results: {
      title: "Food order website UI",
      image: work3,
      link: "https://food-app-xi-fawn.vercel.app/",
    },
  },
  {
    value: "Designing",
    results: {
      title: "3D website UI",
      image: work4,
      link: "https://3-d-app-akshaysaga777.vercel.app/",
    },
  },
  {
    value: "Designing",
    results: {
      title: "Tourism website UI",
      image: work5,
      link: "https://tourism-app-rho.vercel.app/",
    },
  },

  {
    value: "Functionality",
    results: {
      title: "Mate Cinema",
      image: work2,
      link: "https://matecinema.jbrocksfellas.com/",
    },
  },
  {
    id: 5,
    value: "Authentication",
    results: {
      title: "Instagram Clone",
      image: work1,
      link: "https://instagram-clone-irjb.vercel.app/?vercelToolbarCode=jrcV5XOTFKC6VBr",
    },
  },
];

const uniqueObjects = ["Designing", "Functionality", "Authentication"];

const PortfolioSection = () => {
  const [portfolioType, setPortfolioType] = useState(DATA);
  const [selectedOption, setSelectedOption] = useState(uniqueObjects[0]);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    if (option) {
      const find = DATA.filter((item) => item.value === option);
      setPortfolioType(find);
    }
  };

  return (
    <section className="w-[100%] px-4 py-[80px]">
      <div className={"max-w-[1200px]  mx-auto"}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={{
              offscreen: {
                y: 50,
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
            <h1 className="font-[700]  mb-[60px] text-[36px] text-end text-black ">
              See My Works Which Will Amaze You!
            </h1>



            <div className=" mx-auto flex flex-wrap justify-center  items-center  max-w-[600px] bg-[rgba(255,26,80,.03)]  gap-6 mb-[60px] ">
              {uniqueObjects.map((item, index) => {
                return (
                  <span
                    className={`p-4   cursor-pointer ${
                      selectedOption === item ? "border-b-2 text-red" : ""
                    }  `}
                    key={index}
                    onClick={() => {
                      handleRadioChange(item);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        <div className="  flex flex-col   md:grid grid-cols-2 gap-12">
          {portfolioType?.map((portfolio, index) => {
            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div
                  variants={{
                    offscreen: {
                      y: 160,
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
                  <a href={portfolio?.results?.link} target="_blank">
                    <div className=" group relative shadow-lg    mx-auto hover:scale-105 transition-all duration-500">
                      {/* <div className="overflow-hidden"> */}
                      <Image
                        className=" w-[100%]  "
                        src={portfolio?.results?.image}
                        alt={portfolio?.results?.title}
                      />
                      {/* </div> */}

                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 ">
                        <div className="flex justify-center items-center flex-col">
                          <p>{portfolio?.value}</p>
                          <p className="text-[36px] font-[700] text-white">{portfolio?.results?.title}</p>
                          <Button children={`View`} />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

{
  /* <div className="group relative">
              <Image
                src={work3}
                alt="Your Image"
                className="w-full h-[400px]"
              />

              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 z-50 text-white">
                <Button children={"aksh"} />
              </div>
            </div> */
}
