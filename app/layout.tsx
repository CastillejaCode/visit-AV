import "./globals.css";
import { lora, rubik } from "../public/fonts";

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
    <html lang="en" className={`${lora.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  );
}
