import React from "react";
import Accordion from "../../child/atom/Accordion";

const accordionItems = [
  {
    title: "Web development",
    content:
      "Web development encompasses the creation and maintenance of websites and web applications. Developers use a combination of coding languages like HTML, CSS, and JavaScript to design and implement the visual and functional aspects of websites. They also work with server-side technologies to handle data processing and user interactions. Web development plays a pivotal role in shaping the digital landscape, ensuring that businesses and individuals can connect, share information, and offer services online. It's a dynamic field that evolves rapidly, with developers continually adapting to new technologies and standards to create responsive, secure, and engaging web experiences.",
  },
  {
    title: "React js",
    content:
      "React.js is a JavaScript library for building user interfaces. It allows developers to create interactive and reusable UI components for web and mobile applications, making it a popular choice for front-end development.",
  },
  {
    title: "Next js",
    content:
      "Next.js is a popular JavaScript framework used for building modern web applications. It offers features like server-side rendering, routing, and automatic code splitting, which enhance performance and SEO. Next.js simplifies the development of React applications, making it easier to build fast and scalable websites and web apps.",
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
