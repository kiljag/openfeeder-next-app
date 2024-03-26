import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import "./globals.css";

const firaCode = Fira_Code({
   subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Open Feeder Next App",
  description: "To monitor RSS feeds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
