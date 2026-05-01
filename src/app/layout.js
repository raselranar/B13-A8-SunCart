import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import { Toast } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description:
    "Your one-stop shop for summer style and skincare. Explore top-rated sunglasses, beach accessories, and more. Join our community to start shopping the best of the season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="light h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <NavBar />
        {children}
        <Footer />
        <Toast.Provider placement="top end" />
      </body>
    </html>
  );
}
