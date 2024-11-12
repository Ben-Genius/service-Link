"use client";

import { Search, SearchCheck } from "lucide-react";
import { Button } from "../component/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Form from 'next/form'
import hero from "../assets/hero.png";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = React.createRef<HTMLInputElement>();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          ref.current && !ref.current.contains(event.target as Node)) {
        setFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleFocusField = (currentRef: Element | null) => {
    if(document.activeElement === currentRef) {
      setFocused(true);
    }
  };

  return (
    <section className="font-poppins text-white py-44 bg-cover bg-center bg-no-repeat relative w-full overflow-hidden">
      {/* Background image with multiple gradients */}
      <div 
        className="absolute inset-0 z-0 py-80"
        style={{ 
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0.4) 70%,
              rgba(255, 255, 255, 0.55) 100%
            ),
            url(${hero.src})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* White gradient overlay at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent z-10"
      />

      {/* Content container */}
      <div className="relative container mx-auto px-4 text-center w-full z-20 pt-10 pb-28">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight font-[family-name:var(--font-poppins)] font-light text-center max-w-5xl mx-auto">
          Find Trusted Handymen, Artisans, and Repair Services Near You!
        </h1>
        
        <div className="max-w-xl mx-auto mb-6 relative">
          <Form action="/search" className="max-w-xl mx-auto w-full px-4 py-5 relative">
            <div className="flex items-center  -ml-4 mx-auto rounded-lg gap-2 md:gap-4 bg-white/10 backdrop-blur-sm py-3 px-5 shadow-lg border-[1px] border-white/20 max-w-full">
              <input 
                type="text"
                name="service" 
                ref={ref}
                onFocus={() => handleFocusField(ref.current)}
                placeholder="Describe the project, problem, services needed" 
                className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full text-sm md:text-base placeholder-font-italic"
              />
              
              <div className="w-px h-6 bg-white/20 " />
              
              <div className="flex items-center gap-2 relative">
                <input 
                  type="text"
                  min={6}
                  max={7}
                  name="zipCode" 
                  placeholder="zip code" 
                  className="bg-transparent border-none outline-none text-white placeholder-white/70 w-24  text-sm md:text-base"
                />
                
                <button 
                  type="submit" 
                  className="bg-[#5f18d2] hover:bg-[#5f15d7] transition-colors p-2 md:p-3 rounded-full flex items-center justify-center text-white text-center"
                >
                  <Search className="w-5 h-5 text-center" />
                </button>
              </div>
            </div>
          
          </Form>
          <div ref={dropdownRef} className={`font-[family-name:var(--font-inter)] border border-white/20 absolute z-30 top-[5.8rem] max-w-lg w-full left-0  items-start p-2 flex-col justify-items-start rounded-md  bg-white/10  backdrop-blur-lg  ${focused ? 'flex' : 'hidden'} `}>
            <h2 className=" px-3 text-md font-semibold  w-full text-left">Popular searches</h2>
            <hr className="border-[px] w-full mt-2 bg-gray-400" />
            <ul className="flex flex-wrap gap-2 py-2 whitespace-nowrap font-[family-name:var(--font-inter)]">
              <li>
                <Link href="/search?service=Painting" className="hover:font-bold transition-all duration-300 text-white flex items-center justify-center w-full gap-3"> <SearchCheck size={20}/> Looking for a weekly house cleaner</Link>
              </li>
              <li>
                <Link href="/search?service=Painting" className="hover:font-bold transition-all duration-300 text-white flex items-center justify-center w-full gap-3"> <SearchCheck size={20}/>I need a handyman for a few small jobs</Link>
              </li>
              <li>
                <Link href="/search?service=Painting" className="hover:font-bold transition-all duration-300 text-white flex items-center justify-center w-full gap-3"> <SearchCheck size={20}/>Monthly lawn care and gardening needed urgently</Link>
              </li>
          
              <li>
                <Link href="/search?service=Painting" className="hover:font-bold transition-all duration-300 text-white flex items-center justify-center w-full gap-3"> <SearchCheck size={20}/> Carpenter and plumber</Link>
              </li>
            
            </ul>
          </div>
          <div className="w-full flex items-start justify-start px-6 -mt-2 font-[family-name:var(--font-inter)] ">
          <span>
            <h4>Try: <Link href="" className="cursor-pointer font-bold">My sink is broken</Link> or <Link href='' className="font-bold">I want to repaint my living room</Link></h4> 
          </span>
        </div>
        </div>
  
{/* 
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-[#C12C2C] text-white px-8 py-4 rounded-full font-[family-name:var(--font-inter)] font-normal"
        >
          Find Urgent Services!
        </Button> */}
        
      </div>
    
    </section>
  );
};