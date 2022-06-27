import Image from "next/image";
import React from "react";
import Flag from "../public/assets/images/flag.png";

export default function FreeDiscussion() {
  return (
    <section className="w-full h-auto p-20 flex flex-col items-center">
      <div className="relative mt-8">
      <h1 className="text-4xl font-bold bg-accent text-white px-2 w-fit">
        Affordable Family Law Assitance
      </h1>
      <div className="w-28 absolute -right-20 -top-16 z-1 p-3">
        <Image
          src={Flag}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="flag"
        />
      </div>
      </div>
      <p className="text-center py-2">
        <span className="font-semibold">
          Save Thousands On
          <br />
          Consent Orders, Negotiation & Representation.
        </span>
        <br />
        We operate Australia wide!
      </p>

      <button className="bg-primary text-white font-semibold text-lg rounded-md w-fit py-2 px-7 mt-5 mx-auto block">
      Free Discussion - Get Started
            </button>
    </section>
  );
}
