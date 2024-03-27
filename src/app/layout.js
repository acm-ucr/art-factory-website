/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--urbanist-font",
});

export const metadata = {
  title: "Art Factory ",
  description: "Art Factory Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className="bg-white text-black w-screen overflow-x-hidden font-urbanist">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
