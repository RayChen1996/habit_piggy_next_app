const SAVING_LOG = [
  { date: "2024/03/01", name: "閱讀 CNN News", type: "存", amount: 10 },
  { date: "2024/03/02", name: "不喝含糖飲料", type: "存", amount: 5 },
  { date: "2024/03/03", name: "早睡 11 點前", type: "扣", amount: -20 },
  { date: "2024/03/04", name: "健身", type: "存", amount: 8 },
  { date: "2024/03/05", name: "看韓劇", type: "扣", amount: -10 },
];

export default function Page() {
  return (
    <section className="flex flex-col gap-6 px-4 py-6 md:px-10 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#d0810b] md:text-3xl">存錢筒</h1>
        <button className="rounded-full bg-[#fec10f] px-4 py-2 text-sm font-semibold text-white shadow">
          匯出報表
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#f5e6a4] bg-white px-4 py-5 text-center shadow-sm">
          <div className="text-sm font-semibold text-[#a47100]">總紀錄</div>
          <div className="mt-2 text-3xl font-bold text-[#d0810b]">10</div>
        </div>
        <div className="rounded-2xl border border-[#f5e6a4] bg-white px-4 py-5 text-center shadow-sm">
          <div className="text-sm font-semibold text-[#a47100]">存錢筒總額</div>
          <div className="mt-2 text-3xl font-bold text-[#d0810b]">26</div>
        </div>
        <div className="rounded-2xl border border-[#f5e6a4] bg-white px-4 py-5 text-center shadow-sm">
          <div className="text-sm font-semibold text-[#a47100]">累計存款</div>
          <div className="mt-2 text-3xl font-bold text-[#d0810b]">NT$ 470</div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#f5e6a4] bg-white p-4 shadow-sm md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-lg font-bold text-[#d0810b]">存錢資訊</div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#a47100]">
            <input
              type="date"
              className="rounded-xl border border-[#f5e6a4] px-3 py-2 text-sm focus:border-[#fec10f] focus:outline-none"
            />
            <span>～</span>
            <input
              type="date"
              className="rounded-xl border border-[#f5e6a4] px-3 py-2 text-sm focus:border-[#fec10f] focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f5e6a4] text-left text-sm">
            <thead className="bg-[#fff8e1] text-[#a47100]">
              <tr>
                <th className="px-3 py-2">日期</th>
                <th className="px-3 py-2">習慣名稱</th>
                <th className="px-3 py-2">分類</th>
                <th className="px-3 py-2 text-right">金額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f5e6a4]">
              {SAVING_LOG.map((row) => (
                <tr key={`${row.date}-${row.name}`} className="text-[#4a4a4a]">
                  <td className="px-3 py-2">{row.date}</td>
                  <td className="px-3 py-2">{row.name}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        row.type === "扣"
                          ? "border border-[#ef4444] text-[#ef4444]"
                          : "bg-[#7adba2]/60 text-[#1b8551]"
                      }`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right font-bold text-[#d0810b]">
                    {row.amount > 0 ? `+${row.amount}` : row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
