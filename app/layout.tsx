import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import localFont from "next/font/local";

export const fixelDisplay = localFont({
  src: "../public/fonts/fixel-display-regular.woff2",
  weight: "400",
  style: "normal",
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
      <body
        className={`antialiased ${fixelDisplay.variable} ${openSans.variable}`}
      >
        <div className="flex bg-main-grey gap-3 pr-4">
          <Sidebar />
          <main className="flex flex-col flex-1 ml-18 mt-[74px]">
            <Header />
            <section className="flex-1">{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
