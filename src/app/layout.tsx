import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendation",
  description:
    "Wondering what to watch? chose movie of similar movies based on your search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#A5A5A5" />
        {/* <div className=" dark:bg-black w-full h-screen bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"> */}

        <div className=" dark:bg-black w-full h-screen bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
          <Navbar />
          {children}
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
