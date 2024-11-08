import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"
import "./globals.css";
import { Header } from "./screens/header";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",


});
const poppings = Poppins({
  weight: ["300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ServiceLink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppings.variable} antialiased `}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
