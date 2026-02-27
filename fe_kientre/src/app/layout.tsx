import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Kiến trẻ - Hệ thống giáo dục",
  description: "Hệ thống giáo dục phát triển năng lực tư duy toàn diện cho trẻ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
