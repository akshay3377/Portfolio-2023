import React from "react";

export default function TextField({
  icon,
  placeholder,
  label,
  name,
  register,
}) {
  return (
    <div className="mx-auto mb-[40px]">
      <small className="font-[600] inline-block mb-[8px]">{label}</small>
      <div className="w-[100%]  bg-grey px-[12px] py-[8px] rounded-[4px] flex justify-center items-center">
        <span className="mr-[8px]"> {icon}</span>
        <textarea
          id={name}
          {...register}
          rows={1}
          cols={1}
          className="outline-none w-[100%] bg-grey"
          type="text"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
}
