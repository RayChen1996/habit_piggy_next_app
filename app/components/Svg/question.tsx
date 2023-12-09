import * as React from "react";
type FbSvgProps = JSX.IntrinsicElements["svg"];
const SvgComponent = (props: FbSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#FFB800"
      d="M16.864 37.672C7.12 37.672.496 30.664.496 18.952S7.12.616 16.864.616s16.368 6.672 16.368 18.336c0 11.712-6.624 18.72-16.368 18.72Zm0-7.008c4.704 0 7.632-4.272 7.632-11.712 0-6.912-2.928-10.992-7.632-10.992S9.28 12.04 9.28 18.952c0 7.44 2.88 11.712 7.584 11.712ZM28.768 47.08c-8.016 0-13.536-4.368-16.032-10.368l8.688-.912c1.296 3.312 5.04 4.512 8.304 4.512 1.536 0 2.928-.288 4.032-.672l1.536 6.24c-1.392.72-3.696 1.2-6.528 1.2Z"
    />
  </svg>
);
export default SvgComponent;
