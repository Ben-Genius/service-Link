import { Search } from "lucide-react";
import { Button } from "../component/ui/button";
import Image from "next/image";
import Form from 'next/form'
import hero from "../assets/hero.png";

export const HeroSection = () => {
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
        <h1 className="text-4xl md:text-7xl mb-6 leading-tight mx-auto font-[family-name:var(--font-poppins)] font-light text-center w-[70rem]">
          Find Trusted Handymen, Artisans, and Repair Services Near You!
        </h1>
        
        <div className="max-w-xl mx-auto mb-6">
          <Form action="/search" className="max-w-xl mx-auto w-full px-4 py-5">
            <div className="flex items-center w-[39rem] -ml-4 mx-auto rounded-full gap-2 md:gap-4 bg-white/10 backdrop-blur-sm py-3 px-5 shadow-lg border-[1px] border-white/20">
              <input 
                type="text"
                name="service" 
                placeholder="What service do you need? (e.g., Plumber, AC Repair)" 
                className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full text-sm md:text-base placeholder-font-italic"
              />
              
              <div className="w-px h-6 bg-white/20 mx-2" />
              
              <div className="flex items-center gap-2">
                <input 
                  type="text"
                  min={6}
                  max={7}
                  name="zipCode" 
                  placeholder="zip code" 
                  className="bg-transparent border-none outline-none text-white placeholder-white/70 w-24 text-sm md:text-base"
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
        </div>

        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-[#C12C2C] text-white px-8 py-4 rounded-full font-[family-name:var(--font-inter)] font-normal"
        >
          Find Urgent Services!
        </Button>
      </div>
    </section>
  );
};