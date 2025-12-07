"use client";

import clsx from "clsx";
import { useState } from "react";
import AddIcon from "@/app/components/Svg/AddIcon";

const HABIT_CARDS = [
  {
    title: "閱讀 CNN News",
    description: "閱讀一篇國際英文新聞，目標時長 20 分鐘",
    frequency: "每天",
    weeklyTotal: 5,
    reward: { label: "存", value: 10 },
  },
  {
    title: "不喝含糖飲料",
    description: "避免含糖飲料，改喝水或無糖飲品",
    frequency: "每天",
    weeklyTotal: 5,
    reward: { label: "存", value: 5 },
  },
  {
    title: "早睡 11 點前",
    description: "晚上 11 點前完成睡眠準備，提升睡眠品質",
    frequency: "每天",
    weeklyTotal: 5,
    reward: { label: "存", value: 20 },
  },
];

function HabitCard({
  title,
  description,
  frequency,
  weeklyTotal,
  reward,
  tag,
}: (typeof HABIT_CARDS)[number] & { tag?: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#f5e6a4] bg-white px-5 py-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-bold text-[#d0810b]">{title}</div>
          <p className="mt-2 text-sm text-[#555]">{description}</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#f5e6a4] px-3 py-1 text-xs font-semibold text-[#a47100]">
          <span className="h-2 w-2 rounded-full bg-[#ff9c00]" />
          {tag || "待完成"}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-[#4a4a4a]">
        <div className="rounded-xl bg-[#fff8e1] px-3 py-2">
          <div className="text-xs text-[#a47100]">頻率</div>
          <div className="text-base font-semibold">{frequency}</div>
        </div>
        <div className="rounded-xl bg-[#fff8e1] px-3 py-2">
          <div className="text-xs text-[#a47100]">週總計</div>
          <div className="text-base font-semibold">{weeklyTotal} 次</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span
            className={clsx(
              "rounded-full px-3 py-1",
              reward.label === "扣"
                ? "border border-[#ef4444] text-[#ef4444]"
                : "bg-[#7adba2]/60 text-[#1b8551]",
            )}
          >
            {reward.label}
          </span>
          <span className="text-[#d0810b]">${reward.value}</span>
        </div>
        <button className="rounded-full border border-[#f5e6a4] px-4 py-1 text-xs text-[#a47100] shadow-sm">
          修改
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col gap-6 px-4 py-6 md:px-10 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#d0810b] md:text-3xl">目標習慣</h1>
        <button
          className="flex items-center gap-2 rounded-full bg-[#fec10f] px-4 py-2 text-sm font-semibold text-white shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <AddIcon />
          新增習慣
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {HABIT_CARDS.map((card) => (
          <HabitCard key={card.title} {...card} />
        ))}
        <HabitCard
          title="瑜珈"
          description="每天 20 分鐘瑜珈舒展與深呼吸練習"
          frequency="每天"
          weeklyTotal={5}
          reward={{ label: "扣", value: 5 }}
          tag="已完成"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#d0810b]">新增習慣</h2>
              <button
                className="text-sm font-semibold text-[#a47100]"
                onClick={() => setIsModalOpen(false)}
              >
                關閉
              </button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
                <span>習慣名稱</span>
                <input
                  className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                  placeholder="輸入習慣"
                />
              </label>
              <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
                <span>每天次數</span>
                <input
                  className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                  placeholder="1"
                />
              </label>
              <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
                <span>每週目標</span>
                <input
                  className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                  placeholder="5"
                />
              </label>
              <label className="space-y-1 text-sm font-semibold text-[#4a4a4a]">
                <span>獎勵 / 懲罰</span>
                <div className="flex items-center gap-3">
                  <select className="w-24 rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none">
                    <option>存</option>
                    <option>扣</option>
                  </select>
                  <input
                    className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                    placeholder="金額"
                  />
                </div>
              </label>
              <label className="space-y-1 text-sm font-semibold text-[#4a4a4a] md:col-span-2">
                <span>備註</span>
                <textarea
                  className="w-full rounded-xl border border-[#f5e6a4] px-3 py-2 focus:border-[#fec10f] focus:outline-none"
                  rows={3}
                  placeholder="簡短描述"
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="rounded-full border border-[#f5e6a4] px-4 py-2 text-sm font-semibold text-[#a47100]"
                onClick={() => setIsModalOpen(false)}
              >
                取消
              </button>
              <button className="rounded-full bg-[#fec10f] px-5 py-2 text-sm font-semibold text-white shadow">
                儲存習慣設定
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
