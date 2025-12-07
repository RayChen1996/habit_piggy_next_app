"use client";
import React from "react";
import Image from "next/image";
import useTokenStore from "../store/userToken";

export default function Navbar() {
  const token = useTokenStore().token;
  return (
    <header className="w-full bg-[#f8c53a] text-[#3d2b16] shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            width={48}
            height={48}
            src="/icon.png"
            alt="Habit Piggy"
            className="drop-shadow-md"
          />
          <a href="/" className="text-xl font-semibold">
            Habit Piggy
          </a>
        </div>
        <ul className="hidden items-center gap-8 text-base font-semibold sm:flex">
          <li className="hover:opacity-80">
            <a href="/article">推薦文章</a>
          </li>
          <li className="hover:opacity-80">
            <a href="/subscription">訂閱方案</a>
          </li>
          <li className="hover:opacity-80">
            {token !== null ? <a href="/login">會員登出</a> : <a href="/login">會員登入</a>}
          </li>
        </ul>
        <div className="flex items-center sm:hidden">
          <div className="h-6 w-8 rounded bg-white/70" />
        </div>
      </nav>
    </header>
  );
}
