import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto  = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Traffic Light App",
  description: "Traffic light component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
