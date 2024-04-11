import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List App",
  description:
    "A todo list app where you can list your tasks you want to accomplish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-image bg-cover bg-center`}>
        {children}
      </body>
    </html>
  );
}
