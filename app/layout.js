import "./globals.css";
import { Instrument_Serif, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata = {
  title: "Charles Okoro — Frontend & Mobile Developer",
  description:
    "Charles Okoro is a frontend developer crafting thoughtful web and mobile experiences with React, React Native, and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
