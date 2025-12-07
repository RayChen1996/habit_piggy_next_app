import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#f8c53a] text-[#3d2b16]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image width={48} height={48} src="/icon.png" alt="" />
          <span className="text-xl font-semibold">Habit Piggy</span>
        </div>
        <p className="text-sm font-semibold">© 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
