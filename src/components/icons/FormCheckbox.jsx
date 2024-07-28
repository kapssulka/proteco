import React from "react";

export default function FormCheckbox({ color = "white" }) {
  return (
    <svg
      width="7"
      height="6"
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.45814 4.31481L6.25116 0L7 0.851852L2.83256 5.59259L2.45814 6L2.08372 5.59259L0 3.22222L0.748837 2.37037L2.45814 4.31481Z"
        fill={color}
      />
    </svg>
  );
}
