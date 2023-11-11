/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 要加入限定網域，如果圖片是從API來的
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dmotix2cyh269.cloudfront.net",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "https://github.com/chunjull/Habit-Piggy",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
