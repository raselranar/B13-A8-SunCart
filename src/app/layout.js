import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import { Toast } from "@heroui/react";
import NavBar from "@/components/layout/Home/NavBar/NavBar";
import { LoginToastHandler } from "@/components/UI/LoginToastHandler";
import { Suspense } from "react";
import Loading from "@/components/UI/Loading";

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
        <Suspense fallback={<Loading />}>
          <LoginToastHandler />
          {children}
        </Suspense>
        <Footer />
        <Toast.Provider placement="top end" />
      </body>
    </html>
  );
}
