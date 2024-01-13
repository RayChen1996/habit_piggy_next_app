"use client";
import React, { memo } from "react";
import Image from "next/image";
import useTokenStore from "../store/userToken";
export default function Navbar() {
  const token = useTokenStore().token;
  console.log(token);
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
            {token !== null ? (
              <a href="/login">會員登出</a>
            ) : (
              <a href="/login">會員登入</a>
            )}
          </li>
        </ul>
      </ul>
    </header>
  );
}
