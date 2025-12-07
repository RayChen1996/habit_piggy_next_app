import { format } from "date-fns";
import clsx from "clsx";

const HABITS = [
  { name: "閱讀 CNN News", tag: "存", amount: 1, status: "已完成" },
  { name: "晨跑", tag: "存", amount: 3, status: "失敗" },
  { name: "運動", tag: "存", amount: 3, status: "待完成" },
  { name: "運動", tag: "存", amount: 3, status: "待完成" },
  { name: "做早餐", tag: "存", amount: 5, status: "待完成" },
  { name: "看韓劇", tag: "扣", amount: -10, status: "已完成" },
  { name: "整理房間", tag: "存", amount: 2, status: "待完成" },
  { name: "早餐", tag: "扣", amount: -15, status: "已完成" },
];

const STATUS_STYLES: Record<string, string> = {
  已完成: "bg-[#7adba2] text-white",
  失敗: "bg-[#f79f87] text-white",
  待完成: "bg-[#f6c344] text-white",
};

export default function Page() {
  const now = new Date();
  const formattedDate = format(now, "yyyy 年 MM 月 dd 日");
  const formattedTime = format(now, "HH:mm:ss");

  return (
    <section className="flex flex-col gap-6 px-4 py-6 md:px-10 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-2xl font-bold md:text-3xl">{formattedDate}</div>
        <div className="flex items-center gap-4 text-sm font-semibold md:text-base">
          <span className="rounded-full bg-[#fff6d6] px-3 py-1 text-[#d0810b]">Tw</span>
          <span className="text-lg font-bold text-[#ff9c00] md:text-2xl">
            {formattedTime}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-[#f5e6a4] bg-white p-4 shadow-sm md:p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#d0810b] md:text-xl">
          <span className="h-2 w-2 rounded-full bg-[#ff9c00]" />
          任務列表
        </h2>
        <div className="mt-4 overflow-x-auto">
          <div className="min-w-full divide-y divide-[#f5e6a4] text-sm md:text-base">
            {HABITS.map((habit) => (
              <div
                key={`${habit.name}-${habit.amount}-${habit.status}`}
                className="grid grid-cols-1 items-center gap-3 py-3 md:grid-cols-12"
              >
                <div className="md:col-span-6">
                  <div className="flex items-center gap-2 font-semibold text-[#4a4a4a]">
                    <span className="h-3 w-3 rounded-full border-2 border-[#d0810b]" />
                    {habit.name}
                  </div>
                </div>
                <div className="flex items-center gap-3 md:col-span-6 md:justify-end">
                  <span
                    className={clsx(
                      "flex min-w-[72px] items-center justify-center rounded-full px-3 py-1 text-sm font-bold",
                      habit.tag === "扣"
                        ? "border border-[#ef4444] text-[#ef4444]"
                        : "bg-[#7adba2]/70 text-[#1b8551]",
                    )}
                  >
                    {habit.tag}
                  </span>
                  <span className="min-w-[60px] text-center font-bold text-[#d0810b]">
                    {habit.amount > 0 ? `+${habit.amount}` : habit.amount}
                  </span>
                  <span
                    className={clsx(
                      "min-w-[80px] rounded-full px-3 py-1 text-center text-sm font-bold",
                      STATUS_STYLES[habit.status],
                    )}
                  >
                    {habit.status}
                  </span>
                  <button
                    type="button"
                    className="rounded-full border border-[#f5e6a4] px-3 py-1 text-xs font-semibold text-[#a47100] shadow-sm"
                  >
                    修改
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
