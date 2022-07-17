import Image from "next/image";
import React from "react";
import Flag from "../public/assets/images/flag.png";
import ProperLinkModal from "components/NavLink";

export default function HomeHero() {
  return (
    <section className="w-full h-auto md:px-20 py-40 flex flex-col items-center">
      <div className="relative mt-8 flex flex-col items-center justify-center">
        <h1 className="mx-8 text-center text-5xl font-bold bg-accent text-white p-2 w-fit z-40">
          Low-Cost Online Family Law Services
        </h1>
        <span className="w-40 absolute lg:-right-28 -top-32 lg:-top-20 -mt-2 z-1 p-3">
          <Image
            src={Flag}
            quality={90}
            placeholder="blurred"
            alt="flag"
            loading="lazy"
          />
        </span>
      </div>

      <p className="text-center py-12">
        <span className="font-semibold">
          Save Thousands On
          <br />
          Consent Orders, Negotiation & Legal Representation
        </span>
        <br />
        We operate Australia wide!
      </p>

      {/* <button className="bg-primary text-white font-semibold text-lg rounded-md w-fit py-3 px-7 mx-auto block">
        Free Discussion - Get Started
      </button> */}
      <div className="flex justify-center w-full ">
        <div className="w-full md:w-4/12 ">
          <ProperLinkModal
            text="Free Discussion"
            to="/"
            type="modal"
            className="btn block w-3/4 md:w-full btn-primary btn-modal mx-auto"
            formButtonName="homepage-hero"
          />
        </div>
      </div>
    </section>
  );
}
