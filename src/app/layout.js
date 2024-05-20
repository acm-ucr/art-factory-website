/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--nunito-font",
});

export const metadata = {
  title: "Art Factory",
  description: "Art Factory Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body
        className={`${nunito.variable} bg-white  text-black w-screen overflow-x-hidden font-nunito`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
