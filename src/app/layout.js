import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List App",
  description:
    "A todo list app where you can list your tasks you want to accomplish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} flex items-center justify-center bg-image bg-cover bg-center`}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
