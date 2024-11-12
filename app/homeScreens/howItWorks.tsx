import React from 'react';
import { Clock, Phone, Wallet, User } from "lucide-react";
import { Button } from '../component/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: <User className="w-12 h-12" />,
      title: "[1] Search for a Service",
      description: "Easily find the service you need by searching our extensive directory.",
      color: "bg-blue-600"
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "[2] Contact the Provider Directly",
      description: "Get in touch with your chosen service provider to discuss your requirements and get answers to your questions.",
      color: "bg-purple-700"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "[3] Book and Pay Offline or On-Site",
      description: "Schedule your service and pay directly to the provider, either offline or on-site for convenience.",
      color: "bg-black"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl text-center mb-2 font-[family-name:var(--font-inter)] font-bold">Easy as 1, 2, 3!</h2>
        <p className="text-gray-600 text-center text-sm mb-12 font-[family-name:var(--font-inter)] pt-3 font-light">
          Finding the right service is simple! Just follow these three easy steps to<br />
          connect with professionals and get the help you need.
        </p>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 mb-16 w-full max-w-[70rem] mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className={`${step.color} rounded-full w-32 h-32 flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-md mb-2 font-[family-name:var(--font-inter)] font-semibold">{step.title}</h3>
                <p className="text-gray-500 text-sm font-[family-name:var(--font-inter)] font-light">{step.description}</p>
              </div>
              
            
            </React.Fragment>
          ))}
        </div>

        <div className="bg-[#6D32CF] rounded-lg py-12 px-4 text-center max-w-[70rem] mx-auto">
          <h2 className="text-2xl md:text-3xl text-white mb-2 font-[family-name:var(--font-inter)] font-semibold">
            Are you a service provider? List your services for free!
          </h2>
          <p className="text-white text-sm mb-6 font-[family-name:var(--font-inter)] font-thin">
            Join our network of trusted providers and reach more customers today!
          </p>
          <Button variant="secondary" className="rounded-full bg-white text-black hover:bg-gray-100 font-semibold px-10">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;