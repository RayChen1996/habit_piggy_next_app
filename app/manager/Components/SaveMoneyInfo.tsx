import React from "react";
import AddIcon from "../../components/Svg/AddIcon";
export default function SaveMoneyInfo() {
  return (
    <div className=" p-5 text-black w-full max-w-screen-lg">
      {" "}
      <div className=" pb-4  flex justify-between items-center  ">
        <h2 className=" font-bold text-3xl">存錢筒</h2>
        <span className=" cursor-pointer">
          <button>
            <AddIcon />
          </button>
        </span>
      </div>
      <hr />
    </div>
  );
}
