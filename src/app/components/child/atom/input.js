import React from "react";
import { EmailIcon } from "../icons";

export default function InputField({ icon, placeholder, label }) {
  return (
    <div>
      <small className="font-[600]">{label}</small>
      <div className="  bg-grey px-[12px] py-[8px] rounded-[8px] flex justify-center items-center">
        <span className="mr-[8px]"> {icon}</span>
        <input
          className="outline-none w-[100%] bg-grey"
          type="text"
          placeholder={placeholder}
        ></input>
      </div>

      <strong className="text-[red] block text-end visible  ">error</strong>
    </div>
  );
}

// md:invisible
