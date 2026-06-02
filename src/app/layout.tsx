import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: `${portfolio.name} – Portfolio`,
  description: portfolio.research.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} min-h-screen scroll-smooth bg-portfolio-yellow`}
      style={{ backgroundColor: "#f5d300" }}
    >
      <body
        className="min-h-screen bg-portfolio-yellow font-sans text-black antialiased"
        style={{ backgroundColor: "#f5d300" }}
      >
        {children}
      </body>
    </html>
  );
}
