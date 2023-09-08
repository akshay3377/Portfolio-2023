import * as React from "react";
const SendMessageIcon = (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="#19C37D"
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="miter"
    {...props}
  >
    <polygon points="3 3 20 12 3 21 6 12 3 3" fill="white" opacity={0.1} />
    <polygon points="3 3 20 12 3 21 6 12 3 3" />
    <line x1={10} y1={12} x2={6} y2={12} />
  </svg>
);
export default SendMessageIcon;
