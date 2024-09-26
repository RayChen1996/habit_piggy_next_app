import React, { useState } from "react";
//ANCHOR - SVG
import HomeIcon from "@/app/components/Svg/homeIcon";
import SaveMoneyIcon from "@/app/components/Svg/SaveMoney";
import TargetIcon from "@/app/components/Svg/targetIcon";
import HostoryIcon from "@/app/components/Svg/historyIcon";
import SettingIcon from "@/app/components/Svg/setting";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function SideMenu() {
  const { push } = useRouter();
  const [activeTab, setActiveTab] = useState("home"); // Initialize with the default tab
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ul className="menu bg-white text-black rounded-box">
        <li>
          <Link
            href={"/manager/"}
            className={activeTab === "home" ? "bg-primary" : ""}
          >
            <HomeIcon />
            主頁
          </Link>
        </li>
        <li>
          <details open>
            <summary>
              <TargetIcon />
              習慣列表
            </summary>
            <ul>
              <li>
                <Link
                  href={"/manager/target"}
                  className={activeTab === "goalHabit" ? "bg-primary" : ""}
                >
                  <HostoryIcon />
                  目標習慣
                </Link>
              </li>
              <li>
                <Link
                  href={"/manager/history"}
                  className={activeTab === "historyHabit" ? "bg-primary" : ""}
                >
                  <HostoryIcon />
                  歷史習慣
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link
            href={"/manager/saving"}
            className={activeTab === "savings" ? "bg-primary" : ""}
          >
            <SaveMoneyIcon />
            存錢筒
          </Link>
        </li>
        <li>
          <Link
            href={"/manager/account"}
            className={activeTab === "accountSettings" ? "bg-primary" : ""}
          >
            <SettingIcon />
            帳號設定
          </Link>
        </li>
      </ul>
    </>
  );
}
