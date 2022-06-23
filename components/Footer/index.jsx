import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo/mki-logo-2.png";
import MailIcon from "../../public/assets/images/mail.png";
import ContactIcon from "../../public/assets/images/contact.png";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col xl:flex-row w-full">
        <div className="bg-dark-grey-800 p-20 xl:w-1/4 w-full">
          <Image
            src={Logo}
            quality={90}
            placeholder="blurred"
            className="mb-6"
            alt="MKI Legal Logo"
          />
          <div className="text-accent uppercase mb-4 text-sm">Head Office:</div>
          <div className="text-sm leading-6 mb-6">
            <span>Suite 1, Level 4</span>
            <br />
            <span>200 Adelaide Terrace</span>
            <br />
            <span>EAST PERTH WA 6004</span>
          </div>
          <div className="text-sm leading-4">
            <span className="flex items-center">
              <Image
                src={MailIcon}
                quality={90}
                placeholder="blurred"
                className="h-4 mr-2"
                alt="mail"
              />
              <p className="ml-2">help@familylawassist.com.au</p>
            </span>
            <br />
            <span className="flex items-center">
              <Image
                src={ContactIcon}
                quality={90}
                placeholder="blurred"
                className="h-5 mr-2"
                alt="contact"
              />
              <p className="ml-2">(08) 9470 2777</p>
            </span>
          </div>
        </div>
        <div className="bg-dark-grey-700 py-20 px-10 xl:w-3/4 w-full flex flex-col xl:flex-row">
          <div className="xl:w-3/12 w-full mb-8 xl:mb-0">
            <p className="uppercase text-sm font-medium mb-8">Our Services</p>
            <div className="text-sm leading-8 pr-8">
              <Link className="text-sm" href="/property-settlement-lawyers-perth">
                Property (Assets & Debts)
              </Link>
              <br />
              <Link className="text-sm" href="/family-court-lawyers-perth">
                Property Dispute (Family Court)
              </Link>
              <br />
              <Link className="text-sm" href="/divorce-lawyers-perth">
                Divorce
              </Link>
              <br />
              <Link className="text-sm" href="/separation-lawyers-perth">
                Separation
              </Link>
              <br />
              <Link
                className="text-sm"
                href="/child-custody-and-support-lawyers-perth"
              >
                Children
              </Link>
              <br />
              <Link className="text-sm" href="/consent-orders-lawyers-perth">
                Consent Orders
              </Link>
              <br />
              <Link
                className="text-sm"
                href="/financial-agreements-lawyers-perth"
              >
                Financial Agreements
              </Link>
              <br />
              <Link className="text-sm" href="/prenuptial-agreement-lawyers">
                Prenuptial Agreement
              </Link>
              <br />
              <Link className="text-sm" href="/mediation-lawyers-perth">
                Mediation
              </Link>
              <br />
              <Link className="text-sm" href="/same-sex-couples-lawyers-perth">
                Same Sex
              </Link>
              <br />
              <Link className="text-sm" href="/de-facto-lawyers-perth">
                DeFacto
              </Link>
              <br />
            </div>
          </div>
          <div className="xl:w-3/12 w-full mb-8 xl:mb-0">
            <p className="uppercase text-sm font-medium mb-8">Navigation</p>
            <p className="text-sm leading-8">
              <Link className="text-sm" href="/">
                Home
              </Link>
              <br />
              <Link className="text-sm" href="/our-people">
                Our People
              </Link>
              <br />
              <Link className="text-sm" href="/guide">
                Step-by-Step Guide
              </Link>
              <br />
              <Link className="text-sm" href="/information">
                Information
              </Link>
              <br />
              <Link className="text-sm" href="/contact-us/">
                Contact Us
              </Link>
            </p>
          </div>
          <div className="xl:w-6/12 w-full mb-8 xl:mb-0">
            <p className="uppercase text-sm font-medium mb-8">Disclaimer</p>
            <p className="text-sm leading-8 mb-4">
              <span>
                Liability Limited by a scheme approved under Professional
                Standards Legislation.
              </span>
            </p>
            <p className="text-sm leading-8">
              <span>
                The information on this site is not, nor is intended to be,
                legal advice. You should consult a lawyer for individual advice
                regarding your own situation.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-dark-grey text-center p-3">
        <p className="text-sm">
          All Rights Reserved by MKI Legal. Use of this website subject to our{" "}
          <Link className="text-sm underline" href="/terms-of-use/">
            terms of use
          </Link>{" "}
          and{" "}
          <Link className="text-sm underline" href="/privacy-policy/">
            privacy policy
          </Link>
        </p>
      </div>
      <div className="bg-accent text-center p-4 text-base">
        <p className="font-bold">PARTNER SITES</p>
        <a
          href="https://www.perthemploymentlawyers.com.au/"
          rel="noreferrer"
          target="_blank"
        >
          Perth Employment Lawyers
        </a>
      </div>
    </footer>
  );
};

export default Footer;
