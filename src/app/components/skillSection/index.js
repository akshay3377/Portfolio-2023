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
} from "../child/icons";
import Button from "../child/atom/button";

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
    title: "NEXT",
    icon: NextjsIcon,
  },
  {
    title: "REDUX",
    icon: ReduxIcon,
  },
  {
    title: "FIREBASE",
    icon: FirebaseIcon,
  },
  {
    title: "BOOTSTRAP",
    icon: BootstrapIcon,
  },
];

const TOOLS = [
  {
    title: "FIREBASE",
    icon: FirebaseIcon,
  },
  {
    title: "BOOTSTRAP",
    icon: BootstrapIcon,
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
    <section className="bg-grey w-[100%] py-[120px]">
      <div className="w-[75%] mx-auto flex flex-col   md:flex-row justify-around py-[65px] ">
        <div className=" w-[100%]  md:w-[40%]">
          <h1 className="font-[700] text-[36px] mb-[12px]">
            What My Programming skills
          </h1>
          <p className="mb-[24px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Button
            className={item === "SKILLS" && "bg-[red] text-white "}
            onClick={handleSetSkills}
          >
            SKILLS
          </Button>
          <Button
            className={`${
              item === "TOOLS" && "bg-[red] text-white "
            } mx-[6px] `}
            onClick={handleSetTools}
          >
            {" "}
            TOOLS
          </Button>
        </div>

        <div className="w-[100%] md:w-[50%] my-[66px]  flex flex-wrap justify-center items-center gap-6 md:gap-2">
          {data?.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-[10%] h-[85px] w-[85px] flex justify-center items-center"
              >
                <skill.icon />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
