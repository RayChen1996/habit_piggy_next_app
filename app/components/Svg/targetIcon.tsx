import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g fill="#020202" clipPath="url(#a)">
      <path d="M16 30a14 14 0 1 1 0-28 14 14 0 0 1 0 28Zm0 2a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" />
      <path d="M21.94 9.94a.463.463 0 0 0-.04.044l-6.945 8.85-4.186-4.188a1.5 1.5 0 0 0-2.12 2.12l5.292 5.294a1.5 1.5 0 0 0 2.158-.04l7.984-9.98a1.5 1.5 0 0 0-2.142-2.1Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
