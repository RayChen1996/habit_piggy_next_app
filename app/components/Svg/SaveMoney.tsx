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
      <path d="M11 19.022c.152 1.908 1.66 3.394 4.364 3.57V24h1.2v-1.418c2.8-.196 4.436-1.692 4.436-3.864 0-1.974-1.252-2.992-3.49-3.52l-.946-.224V11.14c1.2.136 1.964.792 2.148 1.7h2.104c-.152-1.838-1.728-3.276-4.252-3.432V8h-1.2v1.438c-2.39.234-4.02 1.672-4.02 3.706 0 1.8 1.212 2.944 3.226 3.414l.794.196v4.068c-1.23-.186-2.044-.86-2.228-1.8H11Zm4.354-4.332c-1.18-.274-1.82-.832-1.82-1.672 0-.94.69-1.644 1.83-1.85v3.52l-.01.002Zm1.384 2.386c1.434.332 2.096.87 2.096 1.82 0 1.084-.824 1.828-2.27 1.964v-3.824l.174.04Z" />
      <path d="M16 30a14 14 0 1 1 0-28 14 14 0 0 1 0 28Zm0 2a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" />
      <path d="M16 27a11 11 0 1 1 0-22 11 11 0 0 1 0 22Zm0 1a12 12 0 1 0 0-24.002A12 12 0 0 0 16 28Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
