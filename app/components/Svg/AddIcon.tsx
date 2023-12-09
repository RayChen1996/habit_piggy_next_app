import * as React from "react";
type FbSvgProps = JSX.IntrinsicElements["svg"];
const SvgComponent = (props: FbSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <rect width={45} height={45} x={1.5} y={1.5} fill="#fff" rx={22.5} />
    <rect
      width={45}
      height={45}
      x={1.5}
      y={1.5}
      stroke="#FFC700"
      strokeWidth={3}
      rx={22.5}
    />
    <path
      stroke="#FFC700"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24 10v28M10 24h28"
    />
  </svg>
);
export default SvgComponent;
