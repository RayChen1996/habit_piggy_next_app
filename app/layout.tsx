import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
import Apollo from "../app/lib/apollo";
import Image from "next/image";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import "typeface-open-sans";
export const metadata: Metadata = {
  title: "習慣養成工具",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Apollo>
        <body className={inter.className}>
          <Nav />
          <div className="content bg-white ">{children}</div>
          <Footer />
        </body>
      </Apollo>
    </html>
  );
}
