import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/mki-logo.png";
import NavLink from "components/NavLink";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import classNames from "classnames";

const navLinks = [
  { path: "/consent-orders", name: "Consent Orders" },
  { path: "/send-an-offer", name: "Send an Offer" },
  { path: "/legal-representation", name: "Legal Representation" },
  { path: "/about-us", name: "About Us" },
  { path: "/contact-us", name: "Contact Us" },
];

const SubNavLinks = ({ subNav, to, text }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <li
      className="hoverable"
      onClick={() => setShowLinks(!showLinks)}
      aria-hidden="true"
    >
      <NavLink
        className="block nav-link text-black hover:text-white hover:bg-accent"
        activeClassName="nav-active-link text-white bg-accent"
        to={to}
        external={false}
      >
        {text}
      </NavLink>
      <div
        className={classNames("flex-col bg-gray-300 px-8 py-4 -mt-4", {
          hidden: !showLinks,
          flex: !!showLinks,
        })}
      >
        {subNav.map(({ to, text }, i) => (
          <NavLink
            key={i}
            className="text-base font-bold py-3 px-4 text-black hover:text-white hover:bg-accent transition-all duration-100 ease-in-out"
            activeClassName="nav-active-link text-white bg-accent"
            to={to}
            external={false}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </li>
  );
};

const NavMobile = ({ phone, showNav, setShowNav }) => {
  return (
    <div
      id="navbarNav"
      className={classNames(
        "w-full bg-white absolute top-20 left-0 z-50 shadow-lg",
        {
          "transition-all h-[calc(100vh_-_20rem)]": showNav,
          "h-0": !showNav,
        }
      )}
    >
      <ul
        className={classNames(
          "flex-col lg:flex-row flex-grow justify-center pl-0 mb-0 list-none mt-8 overflow-y-auto",
          {
            hidden: !showNav,
            "flex transition-all delay-500": showNav,
          }
        )}
      >
        {navLinks.map((link, idx) => (
          <li key={idx} onClick={() => setShowNav(false)}>
            <NavLink
              className="w-fit mx-4 tracking-wide"
              to={link.path}
              text={link.name}
            />
          </li>
        ))}
        <button className="bg-primary text-white font-semibold text-lg rounded-md w-fit px-16 py-2.5 mx-4">
          1300 123 123
        </button>
      </ul>
    </div>
  );
};

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [showNav, setShowNav] = React.useState(false);
  return (
    <nav className="w-full h-20 shadow-md flex items-center sticky top-0 z-50 bg-white">
      <section className="container flex items-center justify-between mx-auto px-8">
        <Link href="/">
          <div className="w-20 cursor-pointer">
            <Image
              src={Logo}
              quality={90}
              placeholder="blurred"
              className="mb-6"
              alt="MKI Legal Logo"
              loading="lazy"
            />
          </div>
        </Link>
        <ul className="hidden lg:flex flex-col lg:flex-row flex-grow justify-center pl-0 mb-0 list-none">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink to={link.path} text={link.name} />
            </li>
          ))}
        </ul>

        <button
          aria-controls="navbarNav"
          onClick={() => setShowNav(!showNav)}
          className="border-none focus:outline-none lg:hidden py-1 px-3 text-xl bg-transparent rounded-sm"
        >
          <HiMenu className="text-3xl text-accent" />
        </button>

        <NavMobile showNav={showNav} setShowNav={setShowNav} />

        <div className="items-center space-x-6 hidden lg:flex">
          {/* <p className="text-accent-600 text-lg font-semibold">Sign In</p> */}
          <button className="bg-primary text-white font-semibold text-lg rounded-md px-8 py-2.5">
            1300 123 123
          </button>
        </div>
      </section>
    </nav>
  );
}
