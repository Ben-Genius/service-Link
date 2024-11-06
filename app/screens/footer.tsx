// src/components/Footer.tsx
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ServiceLink</h3>
            <p className="text-gray-400">
              ServiceLink is your go-to platform for connecting with trusted local professionals.
              Our user-friendly interface allows you to find the services you need with ease and confidence
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400">101 Marlow Street. #12-05 Clife</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@servicelink.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 ServiceLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};