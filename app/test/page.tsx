"use client";
import React, { Fragment, useEffect, useRef } from "react";

const page = () => {
  const btnRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("681520");
    console.log(btnRef);
    setTimeout(() => {
      console.log("after 3 sec click");
      btnRef.current.click();
      inputRef.current.focus;
    }, 1000);
  }, []);
  return (
    <div className=" text-black h-screen">
      <form>
        <input
          ref={inputRef}
          type="text"
          className="input form-control  bg-white border-black  "
        />
      </form>
      <button
        onClick={() => {
          console.log("click fun");
        }}
        ref={btnRef}
        className="btn btn-primary text-black"
      >
        測試
      </button>
      <RenderComponent
        title={"555"}
        pTag={"文章文章文章文章"}
        clickFn={() => {
          console.log("click one ");
        }}
      />
    </div>
  );
};

interface RenderComponent {
  title: string;
  pTag: string;
  clickFn?: () => void;
}

const RenderComponent = ({
  title = "",
  pTag = "",
  clickFn,
}: RenderComponent) => {
  return (
    <Fragment>
      <Title label={title} />
      <p>{pTag}</p>
      <button className="btn btn-primary text-[#000]" onClick={clickFn}>
        CLICK
      </button>
    </Fragment>
  );
};

type TitleProp = {
  label: string;
};
const Title = ({ label = "" }: TitleProp) => {
  console.log("渲染標題");
  return <h2>{label}</h2>;
};

export default page;
