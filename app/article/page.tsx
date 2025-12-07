"use client";
import React from "react";
import PageTitle from "../components/pageTitle";
import Image from "next/image";

const ArticlePage = () => {
  const articles = [
    {
      id: 0,
      title: "《原子習慣》用４個步驟幫你打造更好⋯⋯",
      description:
        "每個人都有自己的目標與願望，但要達成這些目標並不總是容易的事情。我們往往會在改變的路上遇到困難，可能會失去動力，甚至回到過去的舊習慣中。然而，詹姆斯・克利爾（James Clear）的《原子⋯⋯",
      imgSrc: "/article-1.jpg",
      month: "AUG",
      day: "28",
    },
    {
      id: 1,
      title: "培養新習慣前，先用５個步驟破除心魔",
      description:
        "近年專門研究習慣和生產力的學者指出，專注養成習慣的過程，遠比訂立計畫重要。Habit Piggy 編輯團隊為你整理出 5 個步驟，幫助你破除心魔、建立好習慣，並且讓你可以獲得更好的自己。在開始介紹這５⋯⋯",
      imgSrc: "/atricle-2.jpg",
      month: "JUL",
      day: "07",
    },
    {
      id: 2,
      title: "三週養成習慣是迷思！做對這件事更重要",
      description:
        "過去，常聽研究指出「養成習慣需要 21 天」一說，只要三週時間就能夠培養出全新的好習慣。不過近年來的心理學研究指出，其實養成一個人真實的習慣平均要花 66 天，並因習慣的困難程度有所差異，約落⋯⋯",
      imgSrc: "/article-3.jpg",
      month: "JUN",
      day: "12",
    },
    {
      id: 3,
      title: "養成習慣前，如何建立能夠做到的目標？",
      description:
        "你能否養成新習慣、改變壞習慣的關鍵，取決於你自己是否真的「有決心」每天重複去做到新的目標。如果自己無法下定決心培養習慣，再多的工具和養成方式都是徒勞，本文將帶你一起探討該如何設定一個⋯⋯",
      imgSrc: "/article-4.jpg",
      month: "MAY",
      day: "01",
    },
  ];

  return (
    <div className="bg-[#fff7e6] py-12 text-[#1f1f1f]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
        <div className="w-full max-w-xl">
          <PageTitle pageTitleText={"推薦文章"} />
        </div>
        <div className="mt-4 h-1 w-full max-w-4xl border-t border-[#1f1f1f]" />

        <div className="mt-10 w-full space-y-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="relative flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md sm:flex-row sm:items-center"
            >
              <div className="absolute left-10 top-0 hidden h-full w-[2px] bg-[#f8c53a] sm:block" />
              <div className="z-10 flex flex-col items-center justify-center rounded-xl bg-white px-4 py-2 text-center shadow sm:w-24 sm:bg-transparent sm:shadow-none">
                <span className="text-sm font-semibold text-[#a0a0a0]">{article.month}</span>
                <span className="text-2xl font-bold text-[#1f1f1f]">{article.day}</span>
              </div>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                <div className="h-32 w-full overflow-hidden rounded-xl bg-[#f3f3f3] sm:h-28 sm:w-40">
                  <Image
                    width={200}
                    height={160}
                    className="h-full w-full object-cover"
                    src={article.imgSrc}
                    alt={article.title}
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-[#121212]">{article.title}</h3>
                  <p className="text-sm leading-6 text-[#3f3f3f]">{article.description}</p>
                  <div className="flex justify-end">
                    <a
                      className="rounded-full bg-[#f8c53a] px-4 py-2 text-sm font-semibold text-[#3d2b16] shadow transition hover:-translate-y-0.5 hover:shadow-lg"
                      href="/articleDetail"
                    >
                      觀看文章
                    </a>
                  </div>
                </div>
              </div>
              {index !== articles.length - 1 && <div className="absolute -bottom-4 left-10 hidden h-4 w-[2px] bg-[#f8c53a] sm:block" />}
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="join">
            <button className="btn-primary join-item btn text-white">1</button>
            <button className="btn-primary join-item btn btn-active text-black">2</button>
            <button className="btn-primary join-item btn text-white">3</button>
            <button className="btn-primary join-item btn text-white">4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
