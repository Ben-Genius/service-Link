// src/app/page.tsx
"use client";

import { Footer } from "./screens/footer";
import { Header } from "./screens/header";
import { HeroSection } from "./screens/hero";
import HowItWorks from "./screens/howItWorks";
import { Testimonials } from "./screens/testimonial";
import {ServiceCategories} from "./screens/serviceCategories";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ServiceCategories />
      <Testimonials />
      <HowItWorks />
      <Footer />
    </div> 
  );
}