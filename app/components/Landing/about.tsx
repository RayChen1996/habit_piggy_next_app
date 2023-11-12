"use client";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/bg-custom.jpg?raw=true")',
      }}
      className="bg-cover gap-5 bg-center h-screen flex items-center justify-center flex-col"
    >
      <div className=" text-black w-2/5 ">
        <h2>ABOUT</h2>
        <p>
          如何使用「Habit Piggy」？ <br /> 非常簡單！
        </p>
      </div>
      <div className="flex w-2/5 gap-10 ">
        <div
          style={{
            border: "4px solid white",
            borderRadius: "50%",
            display: "inline-block",
          }}
        >
          <Image
            className="rounded-full"
            style={{ borderRadius: "50%" }}
            width={400}
            height={400}
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className=" text-black ">
          <p>
            首先，
            <br />
            設定你想養成的目標習慣，無論 <br />
            是每天運動、每天讀書，還是其 <br />
            他任何你希望改變或增加的習慣。 <br />
          </p>
          <br />

          <p>接下來， 每當你完成目標習慣，離夢想更 進一步就是最好的獎勵。</p>
          <br />
          <p>
            但如果你在某天沒有完成目標怎 麼辦？ 別擔心！我們相信失敗也是學習{" "}
            <br />
            的機會。當你未能達成目標時， Habit Piggy會扣除一小筆罰款， <br />
            以提醒你保持自律。 <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
