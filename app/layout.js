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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrumentSerif.variable} m-0 max-w-full overflow-x-clip bg-[#080808] font-[family-name:var(--font-manrope)] text-[#f4f1ea] antialiased`}>
        {children}
      </body>
    </html>
  );
}
