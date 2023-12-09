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
      d="M0 24a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12H12A12 12 0 0 1 0 72V24Zm12-6a6 6 0 0 0-6 6v1.302l42 25.2 42-25.2V24a6 6 0 0 0-6-6H12Zm78 14.298-28.248 16.95L90 66.63V32.298Zm-.204 41.256-33.84-20.826L48 57.498l-7.956-4.77-33.84 20.82A6 6 0 0 0 12 78h72a6 6 0 0 0 5.796-4.446ZM6 66.63l28.248-17.382L6 32.298V66.63Z"
    />
  </svg>
);
export default SvgComponent;
