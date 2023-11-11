"use client";
import React, { useState } from "react";

const ProductPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" h-96 px-3 w-10">
      <h1>{count}</h1>
    </div>
  );
};

export default ProductPage;
