"use client";
import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="header  bg-primary-content text-white flex">
      <ul className=" flex justify-around w-full ">
        <li className=" flex  items-center py-2 ">
          <Image
            width={40}
            height={40}
            src="https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/icon.png?raw=true"
            alt=""
          />
          <span className="font-sans hover:font-serif">
            {" "}
            <a href="/">Habit Piggy</a>{" "}
          </span>
        </li>
        <ul className=" flex items-center gap-5">
          <li>
            {" "}
            <a href="/article">推薦文章</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/subscription">訂閱方案</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/login">會員登入</a>{" "}
          </li>
        </ul>
      </ul>
    </header>
  );
}
