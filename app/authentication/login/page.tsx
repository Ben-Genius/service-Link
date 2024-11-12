"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // Import useRouter
import logo from '../../assets/logo.png';
import logo2 from '../../assets/Logoo.png';
import login from '../../assets/Content.png';
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter(); // Initialize the router

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission initiated");

    try {
      console.log("Sending request to API with data:", { email, password });

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response received:", response);

      const data = await response.json();
      console.log("Parsed response data:", data);

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Handle successful login (e.g., store token)
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);

      // Redirect to homepage or previous page
      router.back();   // Use this if you want to go back to the previous page
    } catch (err) {
      console.error('Error occurred while logging in:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F2F2F2]">
      {/* Left Section */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-[#6D32CF] text-white flex-col justify-between p-12"
        style={{
          backgroundImage: `url(${login.src || login})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-end justify-start h-full py-7">
          <Image src={logo} alt="Servicelink" className="h-8 w-auto" />
        </div>
        <div className="mb-12">
          <h1 className="lg:text-4xl font-bold mb-4">
            Reliable Emergency Services at Your Fingertips
          </h1>
          <p className="opacity-90 text-sm md:text-md">
            Get connected instantly with trusted providers available 24/7 to fix what matters most
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="w-full">
                <div className="flex items-end justify-center w-full">
                  <Image alt="Your Company" src={logo2} className="object-contain lg:hidden w-28" />
                </div>
                <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm/6 text-gray-500">
                  Not a member?{' '}
                  <Link href="/authentication/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Start your 1 month free trial
                  </Link>
                </p>
              </div>

              {error && <p className="text-red-500 mt-4">{error}</p>}

              <div className="mt-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-3 block text-sm/6 text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm/6">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
