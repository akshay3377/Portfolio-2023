"use client";

import React from "react";

const InputField = ({
  name,
  label,
  type,
  icon,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className=" mb-[24px]">
      <small className="font-[600]">{label}</small>
      <div className="w-[100%]  bg-grey px-[12px] py-[8px] rounded-[8px] flex justify-center items-center">
        <span className="mr-[8px]"> {icon}</span>
        <input
          id={name}
          {...register}
          className="outline-none w-[100%] bg-grey"
          type={type}
          placeholder={placeholder}
        />
      </div>
      {errors && (
        <strong className="text-[red] text-[13px] block text-end ">
          {errors[name]?.message}
        </strong>
      )}
    </div>
  );
};

export default InputField;
