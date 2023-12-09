import * as React from "react";
type FbSvgProps = JSX.IntrinsicElements["svg"];
const SvgComponent = (props: FbSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#006978"
      d="M.616 36 11.704.24h10.272L33.064 36H24.04l-4.464-17.856c-.96-3.552-1.872-7.824-2.832-11.472h-.192c-.864 3.744-1.824 7.92-2.736 11.472L9.352 36H.616Zm7.536-8.208v-6.624h17.28v6.624H8.152Z"
    />
  </svg>
);
export default SvgComponent;
