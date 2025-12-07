"use client";
import Image from "next/image";
import React from "react";

import writeImage from "@/public/photo-1484480974693-6ca0a78fb36b.jpg";
import bg from "@/public/bg-custom.jpg";

const About = () => {
  return (
    <section className="relative overflow-hidden py-14">
      <Image alt="" src={bg} fill className="object-cover opacity-70" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <div className="absolute -left-6 top-0 h-52 w-52 rounded-full bg-[#fdd54f] opacity-80 blur-2xl" />
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl lg:mx-0">
            <Image fill sizes="(min-width:768px) 50vw,100vw" className="object-cover" src={writeImage} alt="寫作" />
          </div>
        </div>
        <div className="flex-1 text-[#1f1f1f]">
          <h3 className="text-3xl font-bold text-[#121212]">關於 Habit Piggy</h3>
          <div className="mt-4 space-y-6 text-lg leading-8">
            <p>
              首先，設定你想養成的目標習慣，無論是每天運動、每天讀書，還是其他任何你希望改變或增加的習慣。
            </p>
            <p>
              接下來，每當你完成目標習慣，離夢想更進一步就是最好的獎勵。透過持續的紀錄，你會看見自己的改變。
            </p>
            <p>
              如果你在某天沒有完成目標也別擔心！我們相信失敗也是學習的機會。當你未能達成目標時，Habit Piggy 會扣除一小筆罰款，以提醒你保持自律。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
