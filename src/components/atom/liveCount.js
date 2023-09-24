import React from "react";
import { useEffect, useState } from "react";

export default function LiveCounter({ target, label, Color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < target) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div className="shadow-lg  text-[24px] rounded-md py-6 px-4 ">
      <p
        style={{ color: Color }}
        className=" rounded-full  text-[46px]  font-[800]  mb-[4px]"
      >
        {`${count}+`}
      </p>
      <div className=" font-[600]  ">{label}</div>
    </div>
  );
}
