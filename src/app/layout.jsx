import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cultivis",
  description: "A helper for better farming and community",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
