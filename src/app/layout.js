import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import MyToast from "@/components/atom/Toaster";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay: Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <MyToast />
          <Footer />
        </body>
      </html>
    </>
  );
}
