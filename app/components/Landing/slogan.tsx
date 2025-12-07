"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import localFont from "next/font/local";

const scriptFont = localFont({ src: "../../../public/font/LobsterTwo-Regular.ttf" });

export default function Slogan() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: true });
      AOS.refresh();
    };
    const timeout = setTimeout(initAOS, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdd54f]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center">
        <div className="relative flex-1" data-aos="fade-right">
          <div className="absolute -left-6 top-10 h-14 w-14 rounded-full bg-white/60" />
          <Image
            src="/banner.png"
            alt="Habit Piggy hero"
            width={840}
            height={700}
            className="w-full rounded-2xl shadow-2xl"
            priority
          />
        </div>
        <div
          className="relative flex-1 rounded-2xl bg-white p-8 shadow-xl"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="mb-3 text-sm font-semibold text-[#f59e0b]">歡迎來到 Habit Piggy！</p>
          <h2 className={clsx("mb-4 text-3xl font-bold leading-snug text-[#121212]", scriptFont.className)}>
            Do and Track, or feed me!
          </h2>
          <p className="leading-7 text-[#1f1f1f]">
            這是一個全新的習慣養成工具，專為那些渴望改變生活方式、建立健康習慣的人們設計。
            你是否想擺脫壞習慣，同時建立良好的生活習慣？現在，就讓 Habit Piggy 與你攜手同行，幫助你實現目標。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="rounded-full bg-[#f8c53a] px-5 py-2 text-sm font-semibold text-[#3d2b16] shadow-md transition hover:translate-y-0.5 hover:shadow-lg"
              href="/login"
            >
              會員登入
            </a>
            <a
              className="rounded-full border-2 border-[#f8c53a] px-5 py-2 text-sm font-semibold text-[#3d2b16] transition hover:bg-[#fff1c7]"
              href="/register"
            >
              立即註冊
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-white/70" />
    </section>
  );
}
