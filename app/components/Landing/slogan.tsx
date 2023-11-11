import React from "react";

const slogan = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/banner.png?raw=true")',
      }}
      className="bg-cover gap-5 bg-center h-screen flex items-center justify-center"
    >
      <span className=" text-2xl">
        Do and Track, <br />
        or Feed me!
      </span>
    </div>
  );
};

export default slogan;
