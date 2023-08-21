"use client";

import React from "react";

const InputField = ({
  name,
  onInput,
  label,
  type,
  icon,
  placeholder,
  register,
  errors,
}) => {
  const showError = errors && errors[name];

  return (
    <div className="mb-[28px]">
      <small className="font-semibold inline-block mb-[8px]">{label}</small>
      <div
        className={`relative bg-grey ${showError && "border border-red"} px-3 py-2 rounded-sm flex items-center mb-[32px]`}
      >
        <span className="mr-2 ">{icon}</span>
        <input
          onInput={onInput}
          id={name}
          {...register}
          className="outline-none bg-grey w-full text-black "
          type={type}
          placeholder={placeholder}
        />

        {showError && (
          <div className="absolute bottom-[-25px] left-0 text-red text-[12px]">
            {errors[name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
