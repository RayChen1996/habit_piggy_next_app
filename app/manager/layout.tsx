"use client";
import React, { HtmlHTMLAttributes } from "react";
import { useState } from "react";
import AddIcon from "../components/Svg/AddIcon";
import CloseButton from "../components/Svg/closeButton";

import HomeIcon from "../components/Svg/homeIcon";

import SaveMoneyIcon from "../components/Svg/SaveMoney";

import TargetIcon from "../components/Svg/targetIcon";
import HostoryIcon from "../components/Svg/historyIcon";

import SettingIcon from "../components/Svg/setting";
export default function ManagerPage() {
  const [activeTab, setActiveTab] = useState("home"); // Initialize with the default tab
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const renderTabPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage></HomePage>;
        break;
      case "goalHabit":
        return <TargetHabit></TargetHabit>;
        break;
      case "historyHabit":
        return <HistoryHabit />;
        break;
      case "savings":
        return <SaveMoney />;
        break;
      case "accountSettings":
        return <AccountSetting />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="md:flex h-screen ">
      <div className="md:w-1/5 hidden md:block ">
        <ul className="menu bg-white text-black rounded-box">
          <li>
            <a
              onClick={() => handleTabClick("home")}
              className={activeTab === "home" ? "bg-primary" : ""}
            >
              <HomeIcon />
              主頁
            </a>
          </li>
          <li>
            <details open>
              <summary>
                <TargetIcon />
                習慣列表
              </summary>
              <ul>
                <li>
                  <a
                    onClick={() => handleTabClick("goalHabit")}
                    className={activeTab === "goalHabit" ? "bg-primary" : ""}
                  >
                    <HostoryIcon />
                    目標習慣
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleTabClick("historyHabit")}
                    className={activeTab === "historyHabit" ? "bg-primary" : ""}
                  >
                    <HostoryIcon />
                    歷史習慣
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              onClick={() => handleTabClick("savings")}
              className={activeTab === "savings" ? "bg-primary" : ""}
            >
              <SaveMoneyIcon />
              存錢筒
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTabClick("accountSettings")}
              className={activeTab === "accountSettings" ? "bg-primary" : ""}
            >
              <SettingIcon />
              帳號設定
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-4/5 w-full">
        {/* <HomePage /> */}
        {renderTabPage()}
      </div>
    </div>
  );
}

const HomePage = () => {
  const [habitList, setHabitList] = useState([
    {
      id: 1,
      HabitName: "閱讀 CNN News",
      Type: "養成",
      frequency: "每日",
      NeedPay: 10,
      Enable: true,
    },
    {
      id: 2,
      HabitName: "不喝含糖飲料",
      Type: "戒除",
      frequency: "每日",
      NeedPay: 50,
      Enable: false,
    },
    {
      id: 3,
      HabitName: "有氧運動",
      Type: "養成",
      frequency: "每週",
      NeedPay: 25,
      Enable: false,
    },
    {
      id: 4,
      HabitName: "寫筆記",
      Type: "養成",
      frequency: "每日",
      NeedPay: 10,
      Enable: false,
    },
  ]);
  const handleEnableChange = (id: number) => {
    setHabitList((prevHabitList) =>
      prevHabitList.map((habit) =>
        habit.id === id ? { ...habit, Enable: !habit.Enable } : habit
      )
    );
  };
  return (
    <>
      <div className=" p-5">
        <div className="w-full max-w-screen-lg text-black flex flex-row justify-between items-center">
          <h2 className="  font-bold text-2xl ">9 月 17 日</h2>
          <span className=" text-[#FFB800] font-bold text-2xl ">10:23:48</span>
        </div>
        <table className=" mx-auto table-auto text-black">
          <tbody>
            {habitList.map((habit) => (
              <tr key={habit.id}>
                <td className="p-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={habit.Enable}
                      onChange={() => handleEnableChange(habit.id)}
                      className="form-checkbox h-6 w-6 text-white"
                    />
                  </label>
                </td>
                <td>{habit.HabitName}</td>
                <td>
                  <span
                    className={`p-2 ${
                      habit.Type === "養成" ? "bg-green-200 rounded-full" : ""
                    } ${
                      habit.Type === "戒除" ? "bg-red-200 rounded-full" : ""
                    }`}
                  >
                    {habit.Type}
                  </span>
                </td>
                <td>
                  <span
                    className={`p-2 ${
                      habit.frequency === "每日"
                        ? "bg-yellow-200 rounded-full"
                        : ""
                    } ${
                      habit.frequency === "每週"
                        ? "bg-red-200 rounded-full"
                        : ""
                    }`}
                  >
                    {habit.frequency}
                  </span>
                </td>
                <td>{habit.NeedPay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
const TargetHabit = () => {
  return (
    <>
      <div className=" p-5 text-black w-full max-w-screen-lg ">
        <div className=" pb-4  flex justify-between items-center  ">
          <h2 className=" font-bold text-3xl">習慣紀錄</h2>
          <span className=" cursor-pointer">
            <button
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1"
                ) as HTMLDialogElement | null;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              <AddIcon />
            </button>
          </span>
        </div>
        <hr />

        <dialog id="my_modal_1" className="modal">
          <div className="  bg-white modal-box w-11/12 max-w-5xl overflow-hidden">
            <div className=" flex justify-between items-center ">
              <h3 className="font-bold text-lg">新增習慣</h3>
              <p className="py-4">
                <form method="dialog">
                  <button>
                    <CloseButton />
                  </button>
                  {/* <CloseButton className="btn" /> */}
                </form>
              </p>
            </div>
            <form className=" p-2">
              <label htmlFor="habitName">習慣名稱</label>
              <input
                type="text"
                name="habitName"
                placeholder="Type here"
                className="input m-2 bg-white text-black  input-bordered input-lg w-full max-w-xs"
              />
              <br />
              <div className=" flex gap-2">
                <label htmlFor="habitName">習慣頻率</label>
                <ul className=" flex gap-2  ">
                  <li className="btn bg-[#D1D1D1] text-black border-none     bg-gray-400 ">
                    每日
                  </li>
                  <li className="btn bg-[#D1D1D1] text-black border-none  bg-gray-400 ">
                    每週
                  </li>
                </ul>
              </div>

              <br />

              <div className=" flex gap-2">
                <label htmlFor="habitName">習慣罰款</label>
                <ul className=" flex gap-2  ">
                  <li className="btn bg-[#D1D1D1] text-black border-none     bg-gray-400 ">
                    10
                  </li>
                  <li className="btn bg-[#D1D1D1] text-black border-none  bg-gray-400 ">
                    20
                  </li>
                  <li className="btn bg-[#D1D1D1] text-black border-none  bg-gray-400 ">
                    50
                  </li>
                </ul>
              </div>

              <br />

              <div className=" flex gap-2">
                <label htmlFor="habitName">習慣類型</label>
                <ul className=" flex gap-2  ">
                  <li className="btn bg-[#D1D1D1] text-black border-none     bg-gray-400 ">
                    養成
                  </li>
                  <li className="btn bg-[#D1D1D1] text-black border-none  bg-gray-400 ">
                    戒除
                  </li>
                </ul>
              </div>
              <br />
              <label htmlFor="habitName">習慣期限</label>
              <input
                type="date"
                name="habitName"
                placeholder="Type here"
                className="input m-2 bg-white text-black  input-bordered input-lg w-full max-w-xs"
              />
              <span>－</span>

              <input
                type="date"
                name="habitName"
                placeholder="Type here"
                className="input m-2 bg-white text-black  input-bordered input-lg w-full max-w-xs"
              />
              <br />
              <label htmlFor="habitName">習慣備註</label>
              <input
                type="text"
                name="habitName"
                placeholder="Type here"
                className="input m-2 bg-white text-black  input-bordered input-lg w-full max-w-xs"
              />
            </form>

            <div></div>
          </div>
        </dialog>
      </div>
    </>
  );
};
const HistoryHabit = () => {
  return (
    <>
      <div className=" p-5 text-black w-full max-w-screen-lg">
        {" "}
        <div className=" pb-4  flex justify-between items-center  ">
          <h2 className=" font-bold text-3xl">歷史紀錄</h2>
          <span className=" cursor-pointer">
            <button
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1"
                ) as HTMLDialogElement | null;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              <AddIcon />
            </button>
          </span>
        </div>
        <hr />
      </div>
    </>
  );
};

const SaveMoney = () => {
  return (
    <>
      <div className=" p-5 text-black w-full max-w-screen-lg">
        {" "}
        <div className=" pb-4  flex justify-between items-center  ">
          <h2 className=" font-bold text-3xl">存錢筒</h2>
          <span className=" cursor-pointer">
            <button>
              <AddIcon />
            </button>
          </span>
        </div>
        <hr />
      </div>
    </>
  );
};
const AccountSetting = () => {
  return (
    <>
      <div className=" p-5 text-black w-full max-w-screen-lg">
        {" "}
        <div className=" pb-4  flex justify-between items-center  ">
          <h2 className=" font-bold text-3xl">帳號設定</h2>
          <span className=" cursor-pointer">
            <button>
              <AddIcon />
            </button>
          </span>
        </div>
        <hr />
      </div>
    </>
  );
};

const RenderTitleText = ({ Title }: { Title: String }) => {
  return (
    <>
      <div>
        <h1 className=" font-bold text-2xl">{Title}</h1>
      </div>
    </>
  );
};
