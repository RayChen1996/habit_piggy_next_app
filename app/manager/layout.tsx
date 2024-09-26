"use client";
import React from "react";

import SideMenu from "../components/layout/SideMenu";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex min-h-screen">
      <div className="md:w-1/5 hidden md:block">
        <SideMenu />
      </div>
      <div className="flex-1 text-black">{children}</div>
    </div>
  );
}
