import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/mki-logo.png";
import NavLink from "components/NavLink";

const navLinks = [
  { path: "/consent-orders", name: "Consent Orders" },
  { path: "/send-an-offer", name: "Send an Offer" },
  { path: "/legal-representation", name: "Legal Representation" },
  { path: "/about-us", name: "About Us" },
  { path: "/contact-us", name: "Contact Us" },
];

export default function Header() {
  return (
    <nav className="w-full h-28 shadow-md flex items-center sticky top-0 z-50 bg-white">
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
        <ul className="flex flex-col lg:flex-row flex-grow justify-center pl-0 mb-0 list-none">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                className="nav-link text-black hover:text-white hover:bg-accent"
                to={link.path}
                text={link.name}
              />
            </li>
          ))}
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
