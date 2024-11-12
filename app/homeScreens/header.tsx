// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "../component/ui/button";
import logo from "../assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30 bg-transparent font-[family-name:var(--font-inter)] font-light">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center text-white">
            <Menu className="h-6 w-6 mr-2" />
            Menu
          </Button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Log in</Link>
              <Link href="/providers" className="block px-4 py-2 hover:bg-gray-100">Providers</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 md:hidden font-inter font-light">Contact Us</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 md:hidden">About Us</Link>
            </div>
          )}
        </div>
        <div className="text-2xl font-bold text-white">
          <Image alt="logo" src={logo} width={120} height={120} />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-200">Contact Us</Link>
          <Link href="authentication/login" className="font-semibold text-white hover:text-[#6D32CF]">
               Log in <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="authentication/signup" className=" text-white bg-[#6D32CF] px-2 rounded-md hover:font-bold transition-all duration-300">
              Sign up
              </Link>
        </div>
      </div>
    </header>
  );
};
