import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
export const metadata = {
  title: "Cultivis",
  description: "A helper for better farming and community",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
