import clsx from "clsx";

const HISTORY = [
  {
    title: "閱讀 CNN News",
    detail: "每天 1 次 / 週 5 次",
    reward: { label: "存", value: 10 },
    status: "已完成",
    description: "累積完成 3/3 次，持續保持英文閱讀習慣。",
  },
  {
    title: "不喝含糖飲料",
    detail: "每天 1 次 / 週 5 次",
    reward: { label: "扣", value: 5 },
    status: "失敗",
    description: "本週共喝 2 次含糖飲料，下週再努力。",
  },
  {
    title: "早睡 11 點前",
    detail: "每天 1 次 / 週 5 次",
    reward: { label: "存", value: 15 },
    status: "進行中",
    description: "已達成 2/5 次，調整作息中。",
  },
];

const STATUS_STYLE: Record<string, string> = {
  已完成: "bg-[#7adba2] text-white",
  進行中: "bg-[#f6c344] text-white",
  失敗: "bg-[#f79f87] text-white",
};

export default function Page() {
  return (
    <section className="flex flex-col gap-6 px-4 py-6 md:px-10 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#d0810b] md:text-3xl">歷史習慣</h1>
        <div className="rounded-full bg-[#fff6d6] px-4 py-2 text-sm font-semibold text-[#a47100]">
          匯入日期：2024/03/11
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {HISTORY.map((record) => (
          <div
            key={record.title}
            className="flex flex-col gap-4 rounded-2xl border border-[#f5e6a4] bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-bold text-[#d0810b]">{record.title}</div>
                <p className="mt-2 text-sm text-[#555]">{record.description}</p>
              </div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  STATUS_STYLE[record.status],
                )}
              >
                {record.status}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#4a4a4a]">
              <span className="rounded-xl bg-[#fff8e1] px-3 py-2">{record.detail}</span>
              <span
                className={clsx(
                  "rounded-full px-3 py-1",
                  record.reward.label === "扣"
                    ? "border border-[#ef4444] text-[#ef4444]"
                    : "bg-[#7adba2]/60 text-[#1b8551]",
                )}
              >
                {record.reward.label}
              </span>
              <span className="text-[#d0810b]">${record.reward.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
