import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";

import Navbar from "@/components/navbar";
import StoreProvider from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beta Limited",
  description: "Beta Limited | Ecommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
