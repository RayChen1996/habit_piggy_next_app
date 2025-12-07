import React from "react";

const Faq = () => {
  const qaList = [
    {
      q: "Habit Piggy 能夠免費使用嗎？",
      a: "是的，Habit Piggy 提供免費使用的基本版本，讓您開始建立習慣，並享受核心功能。同時，我們也提供付費版，讓訂閱會員享受更多的功能。",
    },
    {
      q: "我可以設定多少個目標習慣？",
      a: "免費版允許您設定最多三個目標習慣，而訂閱會員則可以無限制地新增目標習慣。",
    },
    {
      q: "未能完成目標的罰款如何計算？",
      a: "未能完成目標的罰款計算取決於您在目標設定時指定的金額和條件。每次未達成目標時，系統將扣除相應金額。",
    },
    {
      q: "除了習慣養成，還有哪些功能呢？",
      a: "除了習慣養成，Habit Piggy 還提供圖表分析、自定義習慣執行頻率等高級功能，幫助您更全面地管理和改進您的習慣。",
    },
    {
      q: "該如何養成習慣呢？",
      a: "要養成習慣，首先在應用程式中設定您的目標習慣。每當您完成一項目標，您將獲得獎勵，但未達成目標時，您將支付罰款。更多的養成習慣方法可以參閱我們的「推薦文章」。",
    },
    {
      q: "我可以隨時取消訂閱 Habit Piggy 嗎？",
      a: "是的，你可以隨時取消訂閱 Habit Piggy。沒有任何長期合約或隱藏費用，你可以在任何時間通過設置中的相應選項來取消訂閱。",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 text-[#1f1f1f]">
        <div className="space-y-3">
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold">FAQs</h3>
            <span className="absolute -bottom-1 left-0 block h-2 w-full bg-[#f8c53a]" />
          </div>
          <p>關於「Habit Piggy」的常見問題，你好奇的、全都在這裡！</p>
        </div>
        <div className="space-y-4">
          {qaList.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[#f8c53a]/60 bg-[#fffdf5] px-4 py-3 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#1f1f1f]">
                <span className="flex items-center gap-2">
                  <span className="text-[#f59e0b]">Q</span>
                  {item.q}
                </span>
                <span className="text-[#f59e0b] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-7 text-[#3f3f3f]">
                <span className="mr-1 font-bold text-[#f59e0b]">A</span>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
