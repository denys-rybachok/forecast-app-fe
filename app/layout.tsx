import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const fixel = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fixel",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Forecasts",
  description: "Forecasts app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${fixel.variable} ${openSans.variable}`}>
        <div className="flex bg-[#e7edf8] gap-3 pr-4">
          <Sidebar />
          <main className="flex flex-col flex-1">
            <Header />
            <section className="flex-1">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
