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
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M38 32.25c-1.008 1.98-2.684 3.702-4.818 5.002l.97 3.2A1.201 1.201 0 0 1 33.004 42h-3.528a1.2 1.2 0 0 1-.72-.24l-2.79-2.094h-4.874l-2.79 2.094a1.2 1.2 0 0 1-.72.24h-3.528a1.201 1.201 0 0 1-1.148-1.548l.97-3.2C10.296 35.07 8 31.698 8 27.916 8 21.336 14.952 16 23.53 16c1.738 0 3.91.596 5.47 1l9-3-.168 7.256L42 23v7l-3.852 2"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M31 26a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 20s0 4.8 4 6"
    />
    <circle cx={18.667} cy={14.667} r={10.667} fill="#FFC700" />
    <path
      fill="#fff"
      d="m16.963 18.85-4.114-4.116 1.37-1.37 2.744 2.742 5.485-5.486 1.372 1.372-6.857 6.856v.002Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8 14.667C8 8.776 12.776 4 18.667 4c5.89 0 10.666 4.776 10.666 10.667 0 5.89-4.775 10.666-10.666 10.666S8 20.558 8 14.667Zm10.667 8.727a8.727 8.727 0 1 1 0-17.454 8.727 8.727 0 0 1 0 17.454Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
