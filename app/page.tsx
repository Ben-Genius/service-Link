// src/app/page.tsx
"use client";

import { Header } from "./homeScreens/header";
import { HeroSection } from "./homeScreens/hero";
import HowItWorks from "./homeScreens/howItWorks";
import { Testimonials } from "./homeScreens/testimonial";
import { ServiceCategories } from "./homeScreens/serviceCategories";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ServiceCategories />
      <Testimonials />
      <HowItWorks />
    
    </div>
  );
}
