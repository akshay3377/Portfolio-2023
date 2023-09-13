"use client";

import { useState } from "react";
import {
  CssIcon,
  ReactIcon,
  HtmlIcon,
  ReduxIcon,
  FirebaseIcon,
  BootstrapIcon,
  JavaScriptIcon,
  NextjsIcon,
  VSCodeIcon,
  GitIcon,
  PostmanIcon,
  GitlabIcon,
  NPMIcon,
  SlackIcon,
  NodejsIcon,
  MongoDBIcon,
  LottieIcon,
} from "../../child/icons";
import FigmaIcon from "../../child/icons/FigmaIcon";
import { motion } from "framer-motion";
import Button from "@/components/child/atom/button";

const data = [
  {
    id: 1,
    title: "SKILLS",
    results: [
      {
        title: "HTML",
        icon: HtmlIcon,
      },
      {
        title: "CSS",
        icon: CssIcon,
      },
      {
        title: "JAVASCRIPT",
        icon: JavaScriptIcon,
      },
      {
        title: "REACT",
        icon: ReactIcon,
      },
      {
        title: "MONGO DB",
        icon: MongoDBIcon,
      },
      {
        title: "REDUX",
        icon: ReduxIcon,
      },

      {
        title: "NODE JS",
        icon: NodejsIcon,
      },
      {
        title: "BOOTSTRAP",
        icon: BootstrapIcon,
      },
      {
        title: "NEXT",
        icon: NextjsIcon,
      },
      {
        title: "FIREBASE",
        icon: FirebaseIcon,
      },
    ],
  },
  {
    id: 2,
    title: "TOOLS",
    results: [
      {
        title: "VS CODE",
        icon: VSCodeIcon,
      },
      {
        title: "GIT",
        icon: GitIcon,
      },
      {
        title: "POST MAN",
        icon: PostmanIcon,
      },
      {
        title: "NPM",
        icon: NPMIcon,
      },

      {
        title: "GIT LAB",
        icon: GitlabIcon,
      },

      {
        title: "LOTTIE",
        icon: LottieIcon,
      },

      {
        title: "SLACK",
        icon: SlackIcon,
      },
      {
        title: "FIGMA",
        icon: FigmaIcon,
      },
    ],
  },
];

const SkillSection = () => {
  const [selectedDiv, setSelectedDiv] = useState(data[0].id);
  const handleSelect = (id) => setSelectedDiv(id);

  return (
    <section className=" w-[100%] py-[50px]">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={{
            offscreen: {
              x: 140,
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col my-[36px]  p-4  md:flex-row justify-around  ">
            <div className=" max-w-[100%]  md:max-w-[40%]">
              <h1 className="font-[700] text-[36px] text-black mb-[12px]">
                What My Programming Skills Included?
              </h1>
              <p className="mb-[24px] leading-[32px] text-grey-light">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less efforts and time with
                those technologies.
              </p>
              <div className="flex">
                {data.map((item, index) => {
                  return (
                    <Button
                      className={`${
                        item.id === selectedDiv
                          ? "bg-red text-white font-[700]"
                          : ""
                      } mr-[8px] `}
                      onClick={() => handleSelect(item.id)}
                      key={index}
                    >
                      {item.title}
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] my-[46px] flex flex-wrap  justify-start  md:justify-center items-center gap-4 md:gap-5">
              {selectedDiv !== null && (
                <>
                  {data[selectedDiv - 1].results.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-[10%] h-[85px] w-[85px] flex justify-center shadow-md items-center transform transition-transform duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) hover:-translate-y-2"
                      >
                        <skill.icon className="w-[70px] h-[70px]" />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
