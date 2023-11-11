import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#FFC700",
          "primary-focus": "#FFC700",
          "primary-content": "#FFC700",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#FFC700",
          "primary-focus": "#FFC700",
          "primary-content": "#FFC700",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "logo-Banner": "url('/loginBanner.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ["--font-noto-sans-tc", ...defaultTheme.fontFamily.sans],
        serif: ["--font-noto-serif-tc", ...defaultTheme.fontFamily.serif],
        mono: ["--font-noto-sans-mono", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export default config;
