"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./homeScreens/header";
import { Footer } from "./homeScreens/footer";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
const poppings = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/authentication/login" || "/authentication/signup";
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppings.variable} antialiased `}>
        {!isLoginPage && <Header />}
        {children}
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}
