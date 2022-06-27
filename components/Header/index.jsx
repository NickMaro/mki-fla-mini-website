import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/mki-logo.png";

export default function Header() {
  return (
    <nav className="w-full h-28 shadow-md flex items-center">
      <section className="container flex items-center justify-between mx-auto px-8">
      <div className="w-20">
      <Image
        src={Logo}
        quality={90}
        placeholder="blurred"
        className="mb-6"
        alt="MKI Legal Logo"
      />
      </div>
      <ul className="flex items-center font-semibold text-xl space-x-4">
        <li className="hover:bg-accent hover:text-white p-3 cursor-pointer">Consent Orders</li>
        <li className="hover:bg-accent hover:text-white p-3 cursor-pointer">Send an Offer</li>
        <li className="hover:bg-accent hover:text-white p-3 cursor-pointer">Legal Representation</li>
        <li className="hover:bg-accent hover:text-white p-3 cursor-pointer">About Us</li>
        <li className="hover:bg-accent hover:text-white p-3 cursor-pointer">Contact Us</li>

      </ul>

      <div className="flex items-center space-x-6">
        <p className="text-accent-600 text-lg font-semibold">Sign In</p>
        <button className="bg-primary text-white font-semibold text-lg rounded-md px-8 py-3">
        1300 123 123
        </button>
      </div>
      </section>
    </nav>
  );
}
