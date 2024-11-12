"use client"
import { useState } from "react";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";

export default function BookingFormWithGlassmorphism() {
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-14 w-full mx-auto">
      <div className="relative z-10 backdrop-blur-sm bg-white/60  overflow-hidden rounded-lg shadow-2xl mt-10 py-4">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-center w-full font-medium text-lg md:text-2xl lg:text-3xl">
            Booking Inquiry Form
          </h1>
          <p className="text-sm leading-5 text-center">
            Send A Quick Inquiry And Connect Directly With Providers - No Commitment Needed
          </p>
        </div>
        <div className="px-4 sm:p-6 max-w-lg w-full mx-auto">
          <form>
            <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500 mt-3 sm:mt-0">
                      <span className="text-red-600">*</span>Name
                    </label>
                    <div className="mt-2">
                      <Input id="name" name="name" type="name" required autoComplete='name' placeholder="Enter full name" className="bg-white"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-500 mt-6">
                      <span className="text-red-600">*</span>Service Needed
                    </label>
                    <div className="mt-2">
                    <select
        id="location"
        name="location"
        defaultValue="Select service needed"
        className="mt-2 text-sm block w-full rounded-md border-0 py-2.5 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>

                        </div>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-500 mt-6">
                      <span className="text-red-600">*</span>Preferred Date
                    </label>
                    <div className="">
                      <input id="date" name="date" type="date" required autoComplete='date'  className="mt-2 text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm"
                      />
                    </div>
                    <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-500 mt-4">
                      <span className="text-red-600">*</span>Preferred Time
                    </label>
                    <div className="mt-2">
                <input
                  type="time"
                  id="time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="mt-2 text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm"
                />
              </div>
                  </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-500 mt-7">
                     Message (optional)
                    </label>
                    <div className="">
                      <textarea 
                      rows={5}
                      cols={50}
                      className="mt-2 text-sm block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm"
                      id="message" name="message" required autoComplete='message' placeholder="a short summary of the services offered"></textarea>
                    </div>
                  </div>
            
            </form>
        </div>
        <div className="px-4 pt-4 pb-1 sm:px-6">
          <Button className="bg-[#6D32CF] text-white hover:bg-[#6D32CF] w-full">
            Request Service
          </Button>
        </div>
      </div>
    
      <div
        aria-hidden="true"
        className="absolute z-[-1] transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-[801/1036] w-[60.0625rem] mx-auto bg-gradient-to-tl from-[#ff80b5] to-[#6D32CF] opacity-50 right-10"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute z-[-1] transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-[801/1036] w-[50.0625rem] mx-auto bg-gradient-to-tl from-[#ff80b5] to-[#6D32CF] opacity-60"
        />
      </div>
    </div>
  );
}