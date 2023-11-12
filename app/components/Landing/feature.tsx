import Image from "next/image";
import React from "react";

const feature = () => {
  return (
    <div className="p-10 m-5 text-black bg-white gap-5 bg-center h-2/3  flex flex-col  items-center justify-center">
      <div className="  w-2/5 ">
        <div style={{ position: "relative", width: "50%" }}>
          <p style={{ position: "relative", width: "50%", zIndex: "99" }}>
            <h3 className=" text-3xl font-bold">FEATURES</h3>

            <span
              style={{
                position: "absolute",
                bottom: "5px",
                left: "-5px",
                width: "70%",
                borderBottom: "10px solid yellow",
                zIndex: "-1",
              }}
            ></span>
          </p>
        </div>
        <p>
          「Habit Piggy」不僅僅是一個養成習慣的工具，
          <br />
          它還提供了強大的追蹤和統計功能。
        </p>
      </div>
      <ul className="flex justify-around items-center gap-5">
        <li className=" border p-3 border-yellow-300 ">
          <Image
            width={50}
            height={50}
            alt="設定習慣養成目標"
            src="https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/icon.png?raw=true"
          />
          設定習慣養成目標
        </li>
        <li className=" border p-3 border-yellow-300 ">
          <Image
            width={50}
            height={50}
            alt="設定習慣養成目標"
            src="https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/icon.png?raw=true"
          />
          更改習慣追蹤頻率
        </li>
        <li className=" border p-3 border-yellow-300 ">
          <Image
            width={50}
            height={50}
            alt="設定習慣養成目標"
            src="https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/icon.png?raw=true"
          />
          目標達成時的提醒
        </li>
      </ul>
    </div>
  );
};

export default feature;
