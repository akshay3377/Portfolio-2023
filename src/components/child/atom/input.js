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
    <div className="mb-[32px]">
      <small className="font-semibold">{label}</small>
      <div className="relative bg-grey px-3 py-2 rounded-md flex items-center">
        <span className="mr-2">{icon}</span>
        <input
          onInput={onInput}
          id={name}
          {...register}
          className="outline-none bg-grey flex-1 "
          type={type}
          placeholder={placeholder}
        />
        {showError && (
          <strong className="absolute bottom-[-20px] left-0 text-red text-[12px]">
            {errors[name]?.message}
          </strong>
        )}
      </div>
    </div>
  );
};

export default InputField;
