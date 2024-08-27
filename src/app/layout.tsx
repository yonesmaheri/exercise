import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/modules/sidebar";

const inter = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={inter.className}>
        <SideBar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
