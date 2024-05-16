import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/molecules/ThemeProvider";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <ThemeProvider >
        <body className={robotoMono.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
