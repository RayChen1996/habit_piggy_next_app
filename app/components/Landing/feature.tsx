import Image from "next/image";
import React from "react";

const Feature = () => {
  const mainFeatures = [
    "設定習慣養成目標",
    "更改習慣追蹤頻率",
    "目標達成時的提醒",
  ];

  const gridFeatures = [
    "設定習慣養成目標",
    "更改習慣追蹤頻率",
    "目標達成時的提醒",
    "輕鬆追蹤自己的進度",
    "查看習慣的歷史記錄",
    "分析你的改變趨勢",
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-[#1f1f1f]">
        <div className="flex w-full flex-col items-start gap-4 lg:w-2/3">
          <div className="relative">
            <h3 className="text-3xl font-bold">FEATURES</h3>
            <span className="absolute -bottom-1 left-0 block h-2 w-1/2 bg-[#f8c53a]" />
          </div>
          <p className="text-lg leading-8">
            「Habit Piggy」不僅僅是一個養成習慣的工具，它還提供了強大的追蹤和統計功能。
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature) => (
            <div
              key={feature}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-[#f8c53a] bg-[#fff9eb] px-6 py-6 text-center shadow-md"
            >
              <Image width={52} height={52} alt={feature} src="/icon.png" />
              <p className="text-lg font-semibold">{feature}</p>
            </div>
          ))}
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gridFeatures.map((feature) => (
            <div
              key={feature}
              className="flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-2xl bg-[#f3f3f3] px-4 text-center shadow"
            >
              <Image width={36} height={36} alt={feature} src="/icon.png" className="opacity-80" />
              <p className="text-base font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
