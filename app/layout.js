import { Cormorant_Garamond, DM_Sans, Italianno } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
  display: "swap",
});

export const metadata = {
  title: "Rifa & Salam | Wedding Invitation",
  description:
    "Join us as we celebrate our wedding on 22 November 2026 at Alif Auditorium, Perinthalmanna.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${italianno.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
