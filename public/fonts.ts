import { Lora, Rubik } from "next/font/google";

export const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-rubik",
});
