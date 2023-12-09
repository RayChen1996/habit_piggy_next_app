"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slogan.css";
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
      <span style={{ ...customFont }} className=" text-2xl typing-text">
        <span data-aos="fade-up" data-aos-delay="0" className="word">
          Do
        </span>{" "}
        <span data-aos="fade-up" data-aos-delay="500" className="word">
          and
        </span>{" "}
        <span data-aos="fade-up" data-aos-delay="1000" className="word">
          Track,
        </span>
        <br />
        <span data-aos="fade-up" data-aos-delay="1500" className="word">
          or
        </span>{" "}
        <span data-aos="fade-up" data-aos-delay="2000" className="word">
          Feed
        </span>{" "}
        <span data-aos="fade-up" data-aos-delay="2500" className="word">
          me!
        </span>
      </span>
    </div>
  );
}
