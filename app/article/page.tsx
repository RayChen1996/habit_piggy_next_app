import React from "react";
import PageTitle from "../components/pageTitle";

const page = () => {
  return (
    <div className=" text-black ">
      <div className=" flex w-full border-blue-50 p-5 justify-center ">
        <PageTitle pageTitleText={"推薦文章"} />
      </div>
      <div className="border-t font-bold border-black"></div>
    </div>
  );
};

export default page;
