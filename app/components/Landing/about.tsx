"use client";
import Image from "next/image";
import React from "react";

import writeImage from "@/public/photo-1484480974693-6ca0a78fb36b.jpg";
import bg from "@/public/bg-custom.jpg";
const about = () => {
  return (
    <div className="relative">
      <Image alt="" src={bg} fill />
      <div className=" text-black w-3/5 z-10 relative flex flex-col justify-center items-center ">
        <p>
          如何使用「Habit Piggy」？ <br /> 非常簡單！
        </p>
      </div>
      <div className="lg:flex  z-10  relative justify-center items-center ">
        <div className="relative w-60 h-60">
          <Image
            fill
            sizes="(min-width:768px) 50vw,100vw"
            className="rounded-full border-4 border-white"
            src={writeImage}
            alt=""
          />
        </div>
        <div className="  sm:p-5 text-black font-bold text-xl ">
          <p>
            首先，
            <br />
            設定你想養成的目標習慣，無論 <br />
            是每天運動、每天讀書，還是其 <br />
            他任何你希望改變或增加的習
            <br />
            慣。
          </p>
          <br />
          <br />
          <p>
            接下來， <br />
            每當你完成目標習慣，離夢想更
            <br /> 進一步就是最好的獎勵。
          </p>
          <br />
          <br />
          <p>
            但如果你在某天沒有完成目標怎
            <br />
            麼辦？
            <br />
            別擔心！我們相信失敗也是學習 <br />
            的機會。當你未能達成目標時， <br />
            Habit Piggy會扣除一小筆罰款， <br />
            以提醒你保持自律。 <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
