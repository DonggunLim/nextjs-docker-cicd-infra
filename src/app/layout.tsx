import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigator from "@/components/Navigator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>/app/layout.tsx</h1>
        <Navigator />
        {children}
      </body>
    </html>
  );
}
