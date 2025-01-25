import { Metadata } from "next";
import "@/app/globals.css";

export const metadata = {
  title: "Cultivis",
  description: "A helper for better farming and community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
