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
    <path
      fill="#FFB800"
      d="M93.012 11.64a3 3 0 0 1 0 4.236l-6.258 6.264-12-12 6.258-6.264a3 3 0 0 1 4.242 0l7.758 7.758v.006Zm-10.5 14.736-12-12L29.634 55.26c-.33.33-.579.733-.726 1.176l-4.83 14.484a1.5 1.5 0 0 0 1.896 1.896l14.484-4.83a3 3 0 0 0 1.176-.72l40.878-40.89Z"
    />
    <path
      fill="#FFB800"
      fillRule="evenodd"
      d="M6 81a9 9 0 0 0 9 9h66a9 9 0 0 0 9-9V45a3 3 0 0 0-6 0v36a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3h39a3 3 0 0 0 0-6H15a9 9 0 0 0-9 9v66Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
