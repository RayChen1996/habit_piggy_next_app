"use client";
import React, { useState } from "react";
import PageTitle from "../components/pageTitle";
import Image from "next/image";
const page = () => {
  return (
    <div className=" text-black flex  flex-col items-center justify-center  ">
      <div className=" flex w-1/3 border-blue-50 p-5 justify-center ">
        <PageTitle pageTitleText={"推薦文章"} />
      </div>
      <div className="border-t py-3  w-2/4  font-bold border-black"></div>

      <ArticleList />

      <Pagination />
    </div>
  );
};

const _ArticleItem = () => {};

const ArticleList = () => {
  const [Articles, setArticle] = useState([
    {
      id: 0,
      title: "《原子習慣》用４個步驟幫你打造更好⋯⋯",
      description:
        "每個人都有自己的目標與願望，但要達成這些目標並不總是容易的事情。我們往往會在改變的路上遇到困難，可能會失去動力，甚至回到過去的舊習慣中。然而，詹姆斯・克利爾（James Clear）的《原子⋯⋯",
      imgSrc:
        "https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/article-1.jpg?raw=true",
      month: "AUG",
      day: "28",
    },
    {
      id: 1,
      title: "培養新習慣前，先用５個步驟破除心魔",
      description:
        "近年專門研究習慣和生產力的學者指出，專注養成習慣的過程，遠比訂立計畫重要。Habit Piggy 編輯團隊為你整理出 5 個步驟，幫助你破除心魔、建立好習慣，並且讓你可以獲得更好的自己。在開始介紹這５⋯⋯",
      imgSrc:
        "https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/atricle-2.jpg?raw=true",
      month: "JUL",
      day: "07",
    },
    {
      id: 2,
      title: "三週養成習慣是迷思！做對這件事更重要",
      description:
        "過去，常聽研究指出「養成習慣需要 21 天」一說，只要三週時間就能夠培養出全新的好習慣。不過近年來的心理學研究指出，其實養成一個人真實的習慣平均要花 66 天，並因習慣的困難程度有所差異，約落⋯⋯",
      imgSrc:
        "https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/article-3.jpg?raw=true",
      month: "JUN",
      day: "12",
    },
    {
      id: 3,
      title: "養成習慣前，如何建立能夠做到的目標？",
      description:
        "你能否養成新習慣、改變壞習慣的關鍵，取決於你自己是否真的「有決心」每天重複去做到新的目標。如果自己無法下定決心培養習慣，再多的工具和養成方式都是徒勞，本文將帶你一起探討該如何設定一個⋯⋯",
      imgSrc:
        "https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/article-4.jpg?raw=true",
      month: "MAY",
      day: "01",
    },
  ]);

  return (
    <div className=" flex justify-center items-center flex-col py-5">
      {Articles.map((article) => (
        <div key={article.id} className="flex justify-center w-2/4">
          <div className="flex flex-col ">
            <span>{article.month}</span>
            <span>{article.day}</span>
          </div>
          <div className="p-3">
            {/* You can replace the placeholder with your actual image source */}
            <img
              width={150}
              height={150}
              src={article.imgSrc}
              alt={article.title}
            />
          </div>
          <div>
            <h3 className=" font-bold text-2xl">{article.title}</h3>
            <p>{article.description}</p>
            <div className="flex justify-end px-5">
              <button className="btn btn-primary text-right text-black">
                <a href="/articleDetail">觀看文章</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Pagination = () => {
  return (
    <>
      <div className="join  py-3">
        <button className="btn-primary text-white join-item btn">1</button>
        <button className="btn-primary  text-black join-item btn btn-active ">
          2
        </button>
        <button className="btn-primary text-white join-item btn">3</button>
        <button className="btn-primary text-white join-item btn">4</button>
      </div>
    </>
  );
};
export default page;
