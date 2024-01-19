import "./globals.css";
import type { Metadata } from "next";
import { open_sans, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Trello",
  description: "Task management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${open_sans.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
