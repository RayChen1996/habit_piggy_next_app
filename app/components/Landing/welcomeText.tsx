import React from "react";

/** - 首頁區塊二 */
export default function WelcomeText() {
  return (
    <div className="mx-auto -mt-6 flex max-w-5xl flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-2xl border-4 border-[#f8c53a] bg-white px-6 py-5 text-center text-[#1f1f1f] shadow-lg">
        <p className="text-base leading-7">
          這是一個全新的習慣養成工具，專為那些渴望改變生活方式、建立健康習慣的人們設計。你是否想擺脫壞習慣，同時建立良好的生活習慣？
          現在，就讓 Habit Piggy 與你攜手同行，幫助你實現目標。
        </p>
      </div>
    </div>
  );
}
