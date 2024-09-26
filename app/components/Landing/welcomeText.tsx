import React from "react";

/** - 首頁區塊二 */
export default function WelcomeText() {
  return (
    <div className=" bg-white p-5 gap-5 bg-center flex flex-col items-center justify-center">
      <div className=" text-yellow-400">
        <h1 className=" text-3xl font-bold">歡迎來到 Habit Piggy！</h1>
      </div>
      <div className=" text-black border-4  border-yellow-500 p-5 rounded-e ">
        <div>
          這是一個全新的習慣養成工具，專為那些渴望改變生活 <br />
          方式、建立健康習慣的人們設計。
        </div>
        <div>你是否想擺脫壞習慣，同時建立良好的生活習慣？</div>
        <div>
          現在，就讓 Habit Piggy 與你攜手同行，幫助你實現目 <br /> 標。
        </div>
      </div>
    </div>
  );
}
