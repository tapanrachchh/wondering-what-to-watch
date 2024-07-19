import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie Recommendation',
  description:
    'Wondering what to watch? chose movie of similar movies based on your search',
  icons: {
    icon: 'favicon.ico',
  },
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
