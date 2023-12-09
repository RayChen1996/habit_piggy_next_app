import * as React from "react";
type FbSvgProps = JSX.IntrinsicElements["svg"];
const SvgComponent = (props: FbSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#020202"
      d="M17.413 3a2 2 0 0 0-2.828 0L1.291 16.292a1.002 1.002 0 0 0 1.416 1.416L4 16.414V27a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V16.414l1.292 1.294a1.001 1.001 0 1 0 1.416-1.416L26 11.586V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2.586L17.413 3ZM26 14.414V27a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14.414l10-10 10 10Z"
    />
  </svg>
);
export default SvgComponent;
