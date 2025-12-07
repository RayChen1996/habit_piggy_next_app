import React from "react";

const ActionButton = () => {
  return (
    <div className="bg-white py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center text-[#1f1f1f]">
        <div className="relative">
          <h3 className="text-3xl font-bold">立即開始建立好習慣！</h3>
          <span className="absolute -bottom-1 left-0 block h-2 w-full bg-[#f8c53a]" />
        </div>
        <a
          className="mt-4 rounded-full bg-[#f8c53a] px-6 py-3 text-base font-semibold text-[#3d2b16] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          href="/login"
        >
          會員登入
        </a>
      </div>
    </div>
  );
};

export default ActionButton;
