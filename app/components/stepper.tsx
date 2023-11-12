import React from "react";

const stepper = () => {
  return (
    <ul className="steps w-full  text-black steps-vertical lg:steps-horizontal">
      <li className="step step-primary">訂單確認</li>
      <li className="step ">信用卡付款</li>
      <li className="step">付款成功</li>
    </ul>
  );
};

export default stepper;
