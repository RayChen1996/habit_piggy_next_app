/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "images.unsplash.com"],
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
        hostname: "github.com",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
