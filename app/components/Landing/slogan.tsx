"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slogan.css";
import localFont from "next/font/local";
import clsx from "clsx";

const myFont = localFont({
  src: "../../../public/font/LobsterTwo-Regular.ttf",
});

export default function Slogan() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init();
      AOS.refresh();
    };

    // Add a delay to AOS initialization (e.g., 100ms)
    const timeout = setTimeout(initAOS, 100);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  const customFont = {
    fontFamily: "YourChosenFont, sans-serif", // Replace 'YourChosenFont' with the actual font name
  };

  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage:
          'url("https://github.com/chunjull/Habit-Piggy/blob/main/assets/images/banner.png?raw=true")',
      }}
      className="bg-cover gap-5 bg-center h-screen flex items-center justify-center"
    >
      <span style={{ ...customFont }} className=" text-5xl typing-text">
        <span
          data-aos="fade-up"
          data-aos-delay="0"
          className={clsx("word", myFont.className)}
        >
          Do
        </span>{" "}
        <span
          data-aos="fade-up"
          data-aos-delay="500"
          className={clsx("word", myFont.className)}
        >
          and
        </span>{" "}
        <span
          data-aos="fade-up"
          data-aos-delay="1000"
          className={clsx("word", myFont.className)}
        >
          Track,
        </span>
        <br />
        <span
          data-aos="fade-up"
          data-aos-delay="1500"
          className={clsx("word", myFont.className)}
        >
          or
        </span>{" "}
        <span
          data-aos="fade-up"
          data-aos-delay="2000"
          className={clsx("word", myFont.className)}
        >
          Feed
        </span>{" "}
        <span
          data-aos="fade-up"
          data-aos-delay="2500"
          className={clsx("word", myFont.className)}
        >
          me!
        </span>
      </span>
    </div>
  );
}
