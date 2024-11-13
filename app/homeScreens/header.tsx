"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "../component/ui/button";
import logo from "../assets/logo.png";
import logo2 from "../assets/Logoo.png";
import userIcon from "../assets/user.png";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isBooking = pathname === "/booking";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Clear token on every tab refresh
    window.addEventListener("beforeunload", () => localStorage.removeItem("token"));
  
    // Check if token exists to set login state
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Update login state based on token presence
  
    // Clean up event listener on component unmount
    return () => window.removeEventListener("beforeunload", () => localStorage.removeItem("token"));
  }, []);
  

  return (
    <header className="absolute top-0 left-0 w-full z-30 bg-transparent font-[family-name:var(--font-inter)] font-light">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center text-white ${isBooking && "text-black"}`}
          >
            <Menu className={`h-6 w-6 mr-2 font-semibold ${isBooking && "text-black"}`} />
            Menu
          </Button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 z-10 whitespace-nowrap">
              <Link href="/providers" className="block px-4 py-2 hover:bg-gray-100">
                Providers
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Services
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
              {!isLoggedIn && (
                <Link href="/authentication/login" className="block px-4 py-2 hover:bg-gray-100 md:hidden">
                  Log in
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="text-2xl font-bold text-black">
          <Image alt="logo" src={isBooking ? logo2 : logo} width={isBooking ? 100 : 120} height={120} className="object-contain" />
        </div>
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            // Display user icon when logged in
            <Image src={userIcon} alt="User" width={40} height={40} className="rounded-full" />
          ) : (
            <>
              <Link
                href="/authentication/signup"
                className="text-white bg-[#6D32CF] px-2 rounded-md hover:font-bold transition-all duration-300"
              >
                Sign up
              </Link>
              <Link
                href="/authentication/login"
                className={`font-semibold ${isBooking ? "text-black" : "text-white"} hover:text-[#6D32CF]`}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
