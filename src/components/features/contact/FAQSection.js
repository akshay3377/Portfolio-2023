import React from "react";
import Accordion from "../../child/atom/Accordion";

const accordionItems = [
  {
    title: "Realtime chat app",
    content: "Content for item 1 goes here.",
  },
  {
    title: "Accordion Item 2",
    content: "Content for item 2 goes here.",
  },
  {
    title: "Accordion Item 3",
    content: "Content for item 3 goes here.",
  },
  {
    title: "Accordion Item 2",
    content: "Content for item 2 goes here.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default FAQSection;
