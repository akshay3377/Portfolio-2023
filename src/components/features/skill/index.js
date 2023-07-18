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
import Button from "../../child/atom/button";
import FigmaIcon from "../../child/icons/FigmaIcon";
import { motion } from "framer-motion";

const SKILLS = [
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
];

const TOOLS = [
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
];

const SkillSection = () => {
  const [data, setData] = useState(SKILLS);
  const [item, setItem] = useState("SKILLS");

  const handleSetSkills = () => {
    setData(SKILLS);
    setItem("SKILLS");
  };
  const handleSetTools = () => {
    setData(TOOLS);
    setItem("TOOLS");
  };

  return (
    <section className=" w-[100%] py-[100px]">
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
          <div className="w-[75%] mx-auto flex flex-col  md:flex-row justify-around py-[65px] ">
            <div className=" w-[100%]  md:w-[40%]">
              <h1 className="font-[700] text-[36px] text-black mb-[12px]">
                What My Programming Skills Included?
              </h1>
              <p className="mb-[24px] leading-[32px] text-grey-light">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less efforts and time with
                those technologies.
              </p>
              <div className="flex">
                <Button
                  className={
                    item === "SKILLS" && "bg-red text-white font-[700] "
                  }
                  onClick={handleSetSkills}
                >
                  {"SKILLS"}
                </Button>
                <Button
                  className={`${
                    item === "TOOLS" && "bg-red text-white font-[700] "
                  } mx-[6px] `}
                  onClick={handleSetTools}
                >
                  {"TOOLS"}
                </Button>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] my-[46px] flex flex-wrap  justify-start  md:justify-center items-center gap-4 md:gap-5">
              {data?.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-[10%] h-[85px] w-[85px] flex justify-center shadow-md items-center"
                  >
                    <skill.icon className="w-[70PX] h-[70PX]" />
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

export default SkillSection;
