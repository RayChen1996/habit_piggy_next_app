import * as React from "react";
type FbSvgProps = JSX.IntrinsicElements["svg"];
const SvgComponent = (props: FbSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <g fill="#FFB800" clipPath="url(#a)">
      <path d="M48 21a3 3 0 0 0-6 0v33a3 3 0 0 0 1.512 2.604l21 12a3 3 0 0 0 2.976-5.208L48 52.26V21Z" />
      <path d="M48 96a48 48 0 1 0 0-96 48 48 0 0 0 0 96Zm42-48a42 42 0 1 1-84 0 42 42 0 0 1 84 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h96v96H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
