"use client";
import React, { useState } from "react";

const AboutPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="px-3 w-10">
      <div>page</div>
      <div>{count}</div>
      <div>
        <button className="btn">Button</button>
        <button
          onClick={(preCount) => {
            setCount(count + 1);
          }}
          className="btn btn-primary"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
