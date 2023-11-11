import React from "react";
interface PageTitleProps {
  pageTitleText: string;
}

const pageTitle: React.FC<PageTitleProps> = ({ pageTitleText }) => {
  return (
    <div className=" text-black font-bold text-4xl  ">{pageTitleText}</div>
  );
};

export default pageTitle;
