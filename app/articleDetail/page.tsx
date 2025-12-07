"use client";
import React from "react";
import PageTitle from "../components/pageTitle";
import Image from "next/image";

const ArticleDetailPage = () => {
  const sidebarArticles = [
    {
      id: 1,
      title: "《原子習慣》用４個步驟幫你打造更好版本的自己",
      date: "28 AUG 2023",
      img: "/article-1.jpg",
    },
    {
      id: 2,
      title: "三週養成習慣是迷思！做對這件事更重要",
      date: "12 JUN 2023",
    },
    {
      id: 3,
      title: "養成習慣前，如何建立能夠做到的目標？",
      date: "01 MAY 2023",
    },
  ];

  return (
    <div className="bg-[#fff7e6] py-12 text-[#1f1f1f]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row">
        <main className="flex-1 space-y-5 rounded-2xl bg-white p-6 shadow-lg">
          <div className="space-y-2 text-center">
            <PageTitle pageTitleText={"《原子習慣》用４個步驟幫你打造更好版本的自己"} />
            <div className="mx-auto h-[2px] w-3/4 bg-[#1f1f1f]" />
            <p className="text-sm text-[#8a8a8a]">28 AUG 2023</p>
          </div>
          <p className="leading-8 text-[#2d2d2d]">
            每個人都有自己的目標與願望，但要達成這些目標並不總是容易的事情。我們往往會在改變的路上遇到困難，可能會失去動力，甚至回到過去的舊習慣中。
            然而，詹姆斯·克利爾（James Clear）的《原子習慣》這本書為我們揭示了一條打造更好版本自己的有效之道。書中提供了一套簡單而深具洞察力的四個步驟，幫助我們建立持久且積極的新習慣，讓我們成為更好的自己。
            本文將探討這四個步驟，帶領您進入一趟自我改變的奇妙旅程。
          </p>
          <div className="w-full overflow-hidden rounded-2xl">
            <Image alt="article" width={900} height={420} src="/article-4.jpg" className="h-full w-full object-cover" />
          </div>
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#121212]">第一步驟：製定明確且具體的目標</h3>
            <p className="leading-8 text-[#2d2d2d]">
              在建立新習慣之前，我們必須明確知道自己要達成的目標是什麼。這個目標應該是具體、可衡量且真實可行的。
              例如，不要只是訂立模糊的目標，像是「我要變得更健康」，而是要訂定明確的目標，如「每週運動三次，每次30分鐘」。這樣的目標讓我們更容易把握進度，也能夠有效量化成就感。
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#121212]">第二步驟：創造吸引力的動力</h3>
            <p className="leading-8 text-[#2d2d2d]">
              建立吸引力的動力是培養新習慣的關鍵。在《原子習慣》一書中，詹姆斯·克利爾指出：我們應該讓新習慣變得有趣、有動力，並與即時的獎勵聯繫在一起。
              這種動力可以是內在的，像是讓自己更健康、更自信，也可以是外在的，如給自己一個小小的獎勵，讓新習慣更具吸引力。
              舉例來說，如果我們想要養成每天早上運動的習慣，可以設定一個小小的獎勵，像是享受一杯美味的咖啡或是看一集心愛的影集，讓這個過程變得更有趣，同時增加動力。
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#121212]">第三步驟：減少阻力，創造無障礙環境</h3>
            <p className="leading-8 text-[#2d2d2d]">
              過去我們往往低估了環境對於行為的影響。克利爾指出，我們應該設計一個無障礙環境，減少改變的阻力，讓新習慣更容易執行。
              例如，如果想要每天早上運動，可以事先將運動服裝準備好、鬧鐘設定在合適的時間，這樣在早上起床時就不需要經過多餘的思考，減少懶床的可能性。
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-[#121212]">第四步驟：培養持續的效能</h3>
            <p className="leading-8 text-[#2d2d2d]">
              持續執行是養成新習慣的關鍵。建立小小的勝利和持續的效能，能夠增加自信心，讓我們更有動力持續前進。
              克利爾提到「二分一」原則，即把目標拆解成更小的部分，每次只專注於其中的一部分。這樣不僅讓目標變得更容易達成，也讓我們更容易保持動力和效能。
            </p>
            <p className="leading-8 text-[#2d2d2d]">
              總結來說，《原子習慣》一書帶給我們一套實用且革命性的改變方法，讓我們能夠透過「原子習慣」逐步實現個人成長與成功。
              這四個步驟不僅可以幫助我們打造更好版本的自己，也能夠帶來持久的積極改變。
              讓我們一起學習如何用「原子習慣」來改變自己，成為更堅強、更自信的人！
            </p>
          </section>
        </main>

        <aside className="w-full max-w-xs space-y-4">
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <Image src={sidebarArticles[0].img} alt={sidebarArticles[0].title} width={400} height={200} className="w-full rounded-xl object-cover" />
            <div className="mt-3 space-y-1">
              <p className="text-xs text-[#8a8a8a]">{sidebarArticles[0].date}</p>
              <p className="font-bold leading-6 text-[#121212]">{sidebarArticles[0].title}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <p className="mb-3 text-lg font-bold text-[#121212]">推薦文章</p>
            <ul className="space-y-3 text-sm leading-6 text-[#2d2d2d]">
              {sidebarArticles.map((article) => (
                <li key={article.id} className="border-b border-[#f1f1f1] pb-3 last:border-none last:pb-0">
                  <p className="font-semibold">{article.title}</p>
                  <span className="text-xs text-[#8a8a8a]">{article.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
