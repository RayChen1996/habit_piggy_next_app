"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "@/app/components/Svg/logo";
import HamberIcon from "@/app/components/Svg/hamber";
import HomeIcon from "@/app/components/Svg/homeIcon";
import TargetIcon from "@/app/components/Svg/targetIcon";
import SaveMoneyIcon from "@/app/components/Svg/SaveMoney";
import SettingIcon from "@/app/components/Svg/setting";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/manager", label: "主頁", icon: HomeIcon },
  {
    href: "/manager/target",
    label: "習慣列表",
    icon: TargetIcon,
    children: [
      { href: "/manager/target", label: "目標習慣" },
      { href: "/manager/history", label: "歷史習慣" },
    ],
  },
  { href: "/manager/saving", label: "存錢筒", icon: SaveMoneyIcon },
  { href: "/manager/account", label: "帳號設定", icon: SettingIcon },
];

type NavigationListProps = {
  activePath: string;
  onNavigate?: () => void;
  compact?: boolean;
};

function NavigationList({ activePath, onNavigate, compact }: NavigationListProps) {
  const getIsActive = (href: string) => activePath === href;

  return (
    <ul className="flex flex-col gap-2">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = getIsActive(item.href);
        const baseClasses = isActive
          ? "bg-white text-[#ff9c00]"
          : "text-black/80 hover:bg-white hover:text-[#ff9c00]";

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-full px-4 py-3 font-semibold transition ${baseClasses}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2b3]">
                <Icon />
              </span>
              <span>{item.label}</span>
            </Link>
            {item.children && compact && (
              <ul className="mt-2 ml-14 flex flex-col gap-1 text-sm">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className={`block rounded-full px-3 py-2 transition ${
                        getIsActive(child.href)
                          ? "bg-white text-[#ff9c00]"
                          : "text-black/70 hover:bg-white hover:text-[#ff9c00]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function TopNavigation({ activePath }: { activePath: string }) {
  return (
    <div className="hidden items-center gap-4 text-white md:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activePath === item.href
              ? "bg-white text-[#ff9c00]"
              : "hover:bg-white/15"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const compactNavigation = useMemo(() => pathname?.startsWith("/manager"), [
    pathname,
  ]);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-30 w-full bg-[#fec10f] text-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <div className="text-left leading-tight">
              <div className="text-lg font-bold md:text-2xl">Habit Piggy</div>
              <div className="text-[10px] font-semibold tracking-wide md:text-xs">
                儲蓄豬習慣系統
              </div>
            </div>
          </div>
          <TopNavigation activePath={pathname} />
          <button
            className="rounded-full p-1 transition hover:bg-white/10 md:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="toggle navigation"
          >
            <HamberIcon className="h-8 w-8" />
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 md:px-6">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#ffe9a1] px-4 py-6 shadow-xl transition-transform duration-200 md:static md:block md:h-auto md:w-60 md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <NavigationList
              activePath={pathname}
              onNavigate={() => setIsSidebarOpen(false)}
              compact={compactNavigation}
            />
            <div className="flex items-center gap-3 rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-[#ff9c00] shadow">
              <Image src="/icon.png" width={36} height={36} alt="pig icon" />
              Habit Piggy
            </div>
          </div>
        </aside>

        <main className="flex-1 pb-16 md:pb-20">
          <div className="rounded-3xl border border-[#f5e6a4] bg-white/90 shadow-sm">
            {children}
          </div>
        </main>
      </div>

      <footer className="mt-auto bg-[#fec10f] py-4 text-center text-sm font-semibold text-white">
        © 2023. All Rights Reserved.
      </footer>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/25 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
