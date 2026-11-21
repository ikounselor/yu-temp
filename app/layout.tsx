
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YungUnitee",
  description:
    "YungUnitee, powered by iKounselor",
  openGraph: {
    title: "YungUnitee – One Platform. Every Possibility.",
    description:
      "A 360-degree platform connecting individuals and institutions with academic, professional and international opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-light text-secondary`}>
        {children}
      </body>
    </html>
  );
}
