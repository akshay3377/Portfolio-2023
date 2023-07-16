import React from "react";

export default function Footer() {

  const DATE = new Date().getFullYear()
  return (
    <div className="bg-black text-white p-[16px]    ">
      <p className="text-center">
      &#169; {DATE} All rights reserved.
      </p>
    </div>
  );
}
