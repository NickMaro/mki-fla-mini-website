import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/mki-logo.png";
import NavLink from "components/NavLink";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import classNames from "classnames";
import CallPhone from "./CallPhone";
import ProperLink from "./ProperLink";
import ProperLinkModal from "components/NavLink";
const navLinks = [
  { path: "services", name: "Our Services", hasSubNav: true, type: "services" },
  // { path: "/send-an-offer", name: "Send an Offer" },
  { path: "/about-us", name: "About Us", hasSubNav: false },
  { path: "/contact-us", name: "Contact Us", hasSubNav: false },
];

const mobileNavLinks = [
  { path: "/consent-orders", name: "Consent Orders" },
  { path: "/legal-representation", name: "Legal Representation" },
  // { path: "/send-an-offer", name: "Send an Offer" },
  { path: "/about-us", name: "About Us", hasSubNav: false },
  { path: "/contact-us", name: "Contact Us", hasSubNav: false },
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
          "transition-all h-auto pb-4 max-h-max": showNav,
          "h-0": !showNav,
        }
      )}
    >
      <ul
        className={classNames(
          "flex-col xl:flex-row flex-grow justify-center pl-0 mb-0 list-none mt-8 overflow-y-auto",
          {
            hidden: !showNav,
            flex: showNav,
          }
        )}
      >
        {mobileNavLinks.map((link, idx) => (
          <li key={idx} onClick={() => setShowNav(false)}>
            <NavLink
              className="w-fit mx-4 tracking-wide"
              to={link.path}
              text={link.name}
              hasSubNav={link.hasSubNav}
            />
          </li>
        ))}
        <li className="px-8">
          <ProperLink to="https://app.familylawassist.com.au/">
            <p className="text-accent-600 text-lg font-semibold cursor-pointer border-accent-600 border-2 px-5 py-1  hover:bg-accent hover:text-white  w-40		">
              Sign In
            </p>
          </ProperLink>

          <CallPhone />
        </li>
      </ul>
    </div>
  );
};

export default function Header() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <nav className="w-full h-20 xl:h-24 shadow-md flex items-center sticky top-0 z-50 bg-white">
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
        <ul className="hidden xl:flex flex-col lg:flex-row flex-grow justify-center pl-0 mb-0 list-none">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                text={link.name}
                hasSubNav={link.hasSubNav}
                type={link.type}
              />
            </li>
          ))}
        </ul>

        <button
          aria-controls="navbarNav"
          onClick={() => setShowNav(!showNav)}
          className="border-none focus:outline-none xl:hidden py-1 px-3 text-xl bg-transparent rounded-sm"
        >
          <HiMenu className="text-3xl text-accent" />
        </button>

        <NavMobile showNav={showNav} setShowNav={setShowNav} />

        <div className="items-center space-x-6 hidden xl:flex">
          <ProperLink to="https://app.familylawassist.com.au/">
            <p className="text-accent-600 text-lg font-semibold cursor-pointer border-accent-600 border-2 px-5 py-1  hover:bg-accent hover:text-white">
              Sign In
            </p>
          </ProperLink>

          <CallPhone />

          <ProperLinkModal
            text="Free Discussion"
            to="/"
            type="modal"
            className="bg-primary text-white font-semibold text-md rounded-sm px-5 py-2.5"
            formButtonName="homepage-hero"
          />
          {/* <button className="bg-primary text-white font-semibold text-md rounded-sm px-5 py-2.5">
            Get In Touch
          </button> */}
        </div>
      </section>
    </nav>
  );
}
