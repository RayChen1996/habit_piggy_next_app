import React from "react";
import PageTitle from "../components/pageTitle";

const page = () => {
  return (
    <div className=" text-black ">
      <div className=" flex w-full border-blue-50 p-5 justify-center ">
        <PageTitle
          pageTitleText={"《原子習慣》用４個步驟幫你打造更好版本的自己"}
        />
      </div>
      <div className="border-t font-bold border-black"></div>
    </div>
  );
};

export default page;
