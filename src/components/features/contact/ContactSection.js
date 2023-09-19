"use client";

import { useState } from "react";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../../child/icons";
import Giraff from "../../../../public/animation/giraff.json";
import Lottie from "react-lottie";
import ContactForm from "@/components/child/molecule/form";
import { motion } from "framer-motion";

const CONTACT = [
  {
    title: "Address",
    icon: LocationIcon,
    discription: "chandigarh, India",
  },
  {
    title: "Email",
    icon: EmailIcon,
    discription: "workwithakshay777@gmail.com",
  },
];

export const SOCIAL_LINKS = [
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/akshay-kumar-a3397920a/",
    customBgColor: "bg-[blue]",
  },
  {
    title: "Github",
    icon: GithubIcon,
    link: "https://github.com/akshay3377",
    customBgColor: "bg-[black]",
  },
];

const ContactSection = () => {
  const [showResponse, setShowResponse] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Giraff,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className=" w-full mb-[120px] ">
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
            "max-w-[1200px]  flex  flex-col  justify-around p-4  md:flex-row   mx-auto"
          }
        >
          <div className="max-w-[100%]  md:max-w-[500px]  flex justify-center items-center  ">
            <div>
              <p className="font-[700] w-full text-[36px] mb-[20px] text-black ">
                Have You Any Project? Please Drop a Message
              </p>
              <p className="mb-[36px] text-grey-light">
                Get in touch and let me know how i can help. Fill out the form
                and i'll be in touch as soon as possible.
              </p>

              {CONTACT.map((contact, index) => {
                return (
                  <div key={index} className="mb-[16px] flex">
                    <div className="mr-[18px]"> {<contact.icon />}</div>
                    <ul>
                      <h3 className="font-[700] text-black">{contact.title}</h3>
                      <li className="text-grey-light text-[14px]">
                        {contact.discription}
                      </li>
                    </ul>
                  </div>
                );
              })}

              <div className="flex gap-3 my-[46px]">
                {SOCIAL_LINKS.map((social, index) => {
                  return (
                    <a
                      className=" bg-[white]  h-[40px] w-[40px] flex justify-center items-center rounded-[50%] shadow-2xl"
                      href={social.link}
                      target="_blank"
                      key={index}
                    >
                      {<social.icon className="h-[30px] w-[30px]" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-[100%]  md:max-w-[500px]  bg-white flex justify-center items-center py-[24px] my-[20px]">
            {!showResponse ? (
              <ContactForm setState={setShowResponse} />
            ) : (
              <div className="  h-[250px] md:h-[400px] flex flex-col justify-center items-center">
                <Lottie options={defaultOptions} className="w-[100%] h-auto" />
                <strong>Sending...</strong>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
