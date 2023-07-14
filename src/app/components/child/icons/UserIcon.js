import * as React from "react";
const UserIcon = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...props}
  >
    <circle cx={8} cy={6} r={3.25} />
    <path d="m2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
  </svg>
);
export default UserIcon;
