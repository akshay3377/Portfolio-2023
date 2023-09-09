"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Skill",
    route: "/skill",
  },
  {
    title: "Portfolio",
    route: "/portfolio",
  },
  {
    title: "Chat",
    route: "/chat",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathName = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () =>
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        scrolled && "shadow-lg"
      } bg-grey sticky top-0 z-50 w-[100%]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-black">Dev</span>
            </div>
          </div> */}
          <div className="hidden md:block mx-auto ">
            <ul className=" flex items-baseline space-x-6">
              {NAV_LINKS.map((navlink, index) => {
                return (
                  <li
                    key={index}
                    className={` py-[4px] mx-[12px]   text-[#999797]   ${
                      navlink.route === pathName &&
                      " text-black border-b-2 border-gray-300 "
                    } hover:text-[black]    `}
                  >
                    <Link href={navlink.route}>{navlink.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          {NAV_LINKS.map((navlink, index) => {
            return (
              <li
                onClick={toggleMenu}
                className={`px-[10px] w-[150px] py-[4px] mx-[12px] font-[700]  rounded-md  text-center  mx-auto  
                 ${
                   navlink.route === pathName
                     ? "text-[black]"
                     : "text-[#999797]"
                 }  hover:text-[black]`}
                key={index}
              >
                <Link href={navlink.route}>{navlink.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
