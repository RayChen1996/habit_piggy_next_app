import React from "react";

const stepper = () => {
  return (
    <ul className="steps md:w-2/3 sm:w-1/3 text-black   lg:steps-horizontal sm:steps-horizontal">
      <li className="step step-primary">訂單確認</li>
      <li className="step ">信用卡付款</li>
      <li className="step">付款成功</li>
    </ul>
  );
};

export default stepper;
