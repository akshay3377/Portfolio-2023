import React from "react";
import { EmailIcon } from "../icons";

export default function TextField({ icon, placeholder, label }) {
  return (
    <div className="">
      <small className="font-[600]">{label}</small>
      <div className="  bg-grey px-[12px] py-[8px] rounded-[8px] flex justify-center items-center">
        <span className="mr-[8px]"> {icon}</span>
        <textarea
          rows={1}
          cols={1}
          className="outline-none w-[100%] bg-grey"
          type="text"
          placeholder={placeholder}
        ></textarea>
      </div>
      <strong className="text-[red] block   text-end">error</strong>
    </div>
  );
}
