import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-primary-content text-white ">
      <ul className="  lg:flex justify-around w-full ">
        <li className=" flex  items-center ">
          <Image
            width={40}
            height={40}
            src="https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/icon.png?raw=true"
            alt=""
          />
          <span className="font-sans hover:font-serif lg:text-xl sm:text-3xl">
            Habit Piggy
          </span>
        </li>
        <li>© 2023. All Rights Reserved.</li>
      </ul>
    </footer>
  );
}
