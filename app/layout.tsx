import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <body>{children}</body>
    </html>
  );
}
