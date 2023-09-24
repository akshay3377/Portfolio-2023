"use client";
import  { useState } from "react";

export default function Accordion ({ items }) {

  const [activeItem, setActiveItem] = useState(null);
  const toggleItem = (index) => activeItem === index ? setActiveItem(null) : setActiveItem(index);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-[24px]">
          <div className={`flex justify-between border-b ${activeItem === index && "border-red "}  items-center p-4 cursor-pointer`}
            onClick={() => toggleItem(index)}
          >
            <span className="text-xl font-semibold">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform transform ${
                activeItem === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
      
              stroke={`${activeItem === index ? "red" : "currentColor"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeItem === index && ( <div className="p-5">{item.content}</div> )}
        </div>
      ))}
    </div>
  );
};


