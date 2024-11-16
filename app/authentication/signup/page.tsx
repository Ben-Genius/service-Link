"use client";

import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/Logoo.png';
import login from '../../assets/Content.png';
import { Input } from '@/app/component/ui/input';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { initializeGoogleSignIn, handleGoogleCredentialResponse } from '@/utils/googleSignInUtil';


export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    whatsapp_number: '',
    isProvider: false,
  });
  console.log(formData)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  useEffect(() => {
    const cleanup = initializeGoogleSignIn((response) =>
      handleGoogleCredentialResponse(response, router, setError, setSuccess)
    );
    return cleanup;
  }, [router]);

  
  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt(); // Show the Google Sign-In prompt
    } else {
      console.error('Google Sign-In script not loaded');
      setError("Google Sign-In is unavailable. Please try again later.");
    }
  };
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setError(data.error || 'Sign-up failed');
        return;
      }
  
      setSuccess('Sign-up successful! Redirecting...');
      localStorage.setItem('token', data.token);
  
      setTimeout(() => {
        router.back(); // Redirect back to the previous page
      }, 1000);
    } catch (err) {
      console.error('Sign-up error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex min-h-screen w-full bg-[#F2F2F2]">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#6D32CF] text-white flex-col justify-between p-12" style={{
        backgroundImage: `url(${login.src || login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
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
                <h2 className="mt-4 text-2xl/9 font-bold tracking-tight text-gray-900 text-center">
                  Create New Account
                </h2>
                <p className="text-sm/6 text-gray-500 text-center">
                  All fields are required
                </p>
              </div>

              {/* Display Success and Error Messages */}
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {success && <p className="text-green-500 mt-4">{success}</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fname" className="block text-sm font-medium text-gray-500">
                    First Name
                  </label>
                  <div className="mt-2">
                    <Input id="fname" name="first_name" type="text" required autoComplete="first_name"
                      value={formData.first_name} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="lname" className="block text-sm font-medium text-gray-500">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <Input id="lname" name="last_name" type="text" required autoComplete="last_name"
                      value={formData.last_name} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <div className="mt-2">
                    <Input id="email" name="email" type="email" required autoComplete="email"
                      value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                    Password
                  </label>
                  <div className="mt-2">
                    <Input id="password" name="password" type="password" required autoComplete="password"
                      value={formData.password} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="whatsapp_number" className="block text-sm font-medium text-gray-500">
                    whatsapp_number number registered with WhatsApp
                  </label>
                  <div className="mt-2">
                    <Input id="whatsapp_number" name="whatsapp_number" type="tel" required autoComplete="tel"
                      value={formData.whatsapp_number} onChange={handleChange} />
                  </div>
                </div>

                <div className="flex items-center">
                  <input id="isProvider" name="isProvider" type="checkbox"
                    checked={formData.isProvider} onChange={handleChange} className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="isProvider" className="ml-3 block text-sm text-gray-700">
                    I am registering to provide services
                  </label>
                </div>

                <button type="submit" className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                  {loading ? 'Signing up...' : 'Sign up'}
                </button>
              </form>

              <div className="mt-10">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm/6 font-medium">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-1 gap-4 w-full">
                  <a
                   onClick= {handleGoogleSignIn}className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                      <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                    </svg>
                    <span className="text-sm/6 font-semibold">Google</span>
                  </a>
                  <div className="relative flex justify-center text-sm/6 font-medium">
                    <p className="bg-white px-6 text-gray-900">Already have an account? <Link href="authentication/login" className="font-semibold text-[#6D32CF]">Login</Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
