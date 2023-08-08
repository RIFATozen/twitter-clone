import "@/styles/reset.css";
import "@/styles/global.css";
import { Inter } from "next/font/google";
import Banner from "@/components/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home / X",
  description: "A Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="container">
          <div className="innerContainer">
            <Banner />
            <main className="mainContainer">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
