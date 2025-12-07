"use client";
import React from "react";

const Recommend = () => {
  const post = [
    {
      id: 1,
      message:
        "「Habit Piggy真的是一個改變生活的神奇工具！我成功建立了每天閱讀的習慣，推薦給所有想要養成好習慣的人！」",
      author: "伊恩的讀書筆記",
    },
    {
      id: 2,
      message: "Best habit app ever! It's like a personal coach.",
      author: "Wendy C.",
    },
    {
      id: 3,
      message:
        "「習慣養成變得有趣又挑戰，應用程式的設計和功能都很出色。推薦給所有想改變生活的人。」",
      author: "sw1209",
    },
    {
      id: 4,
      message:
        "「使用 Habit Piggy 是我迄今為止最好的決定之一！ 它讓我能夠每天運動，而且當我缺席時，小額罰款提醒我保持自律。這真的幫助我養成了一個健康的生活習慣。非常推薦給大家！」",
      author: "小八",
    },
    {
      id: 5,
      message:
        "I was skeptical at first, but Habit Piggy proved me wrong. It's addictive! The penalty for missed goals is a genius idea that keeps me focused. I feel more productive and healthier already.",
      author: "Brian Johnson",
    },
    {
      id: 6,
      message:
        "「Habit Piggy 讓我的生活更有秩序。 我從來沒有這麼容易養成每天早起的習慣！ 它的追蹤和提醒功能非常實用，而且還能避免我錯過任何目標。 強烈推薦給大家！」",
      author: "好想畢業的研究生",
    },
    {
      id: 7,
      message:
        "Habit Piggy transformed my daily routines! With its reminders and rewards, I've developed healthy habits effortlessly.It's a fantastic motivator, and the penalty feature keeps me accountable. Highly recommended!",
      author: "Edward XX",
    },
    {
      id: 8,
      message:
        "「Habit Piggy太棒了！靈活設定目標，提醒功能讓我不再忘記，罰款機制提醒我保持自律，這個工具真的有效。」",
      author: "中壢金城武",
    },
  ];
  return (
    <section className="bg-[#fff7e6] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center text-[#1f1f1f]">
        <div className="space-y-2">
          <div className="relative mx-auto inline-block">
            <h3 className="text-3xl font-bold">RECOMMEND</h3>
            <span className="absolute -bottom-1 left-0 block h-2 w-full bg-[#f8c53a]" />
          </div>
          <p>「Habit Piggy」受到全球數十個國家的使用者歡迎，快來看看我們的用戶推薦評價！</p>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {post.map((item, index) => (
            <div
              key={item.id}
              className={`flex h-full flex-col justify-between rounded-2xl p-4 text-left shadow-md ${
                index === 2 ? "bg-[#f8c53a] text-[#1f1f1f]" : "bg-white"
              }`}
            >
              <p className="break-words leading-7">{item.message}</p>
              <span className="mt-4 block text-right text-sm font-semibold">by {item.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommend;
