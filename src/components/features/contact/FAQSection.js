import React from "react";
import Accordion from "../../child/atom/Accordion";


const accordionItems = [
  {
    title: "Link click",
    content:
      "https://preview.themeforest.net/item/trydo-creative-agency-react-template/full_screen_preview/25457315?_ga=2.173570795.999866595.1694636213-1477478124.1694636213",
  },
  {
    title: "Accordion Item 2",
    content:
      "You can be presenting any home page instead of splash page. http://localhost:3000 you can showing any page as your you are like. First you have to go index.js page then:",
  },
  {
    title: "Accordion Item 3",
    content:
      "You can be presenting any home page instead of splash page. http://localhost:3000 you can showing any page as your you are like. First you have to go index.js page then:",
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
