import React from "react";
import Image from "next/image";
import Meagan from "../public/assets/images/meagan.png";
import ColorBg from "../public/assets/images/Group-545.png";
import Vector from "../public/assets/images/vector.png";
import Link from "next/link";

import Nick from "../public/assets/team/nick.png";

export default function WeWillRepresentYou() {
  return (
    <section className="w-full h-auto bg-accent-700 bg-opacity-10 py-20 relative overflow-hidden">
      <div className="w-full h-auto flex flex-col items-end absolute bottom-0">
        <Image src={Vector} quality={90} placeholder="blurred" alt="Meagan" />
      </div>
      <div className="mt-16 custom-container h-auto mx-auto py-10 md:p-20 bg-white md:shadow-lg md:rounded-md relative">
        <div className="hidden md:block w-32 h-32 bg-white border border-accent-600 rounded-full absolute z-20 -left-12 -top-12">
          <Image
            src={Nick}
            quality={90}
            placeholder="blurred"
            alt="Nick"
            loading="lazy"
          />
        </div>
        <div className="hidden md:flex w-48 h-auto flex-col items-end absolute -bottom-8 -right-28">
          <Image
            src={Meagan}
            quality={90}
            placeholder="blurred"
            alt="Meagan"
            loading="lazy"
          />
        </div>
        <div className="hidden md:block w-40 h-auto absolute -right-12 -top-6 z-1">
          <Image
            src={ColorBg}
            quality={90}
            placeholder="blurred"
            alt="bg"
            loading="lazy"
          />
        </div>

        <h5 className="text-left text-lg font-bold text-blue-500 uppercase mb-5 tracking-wider">
          MKI LEGAL
        </h5>
        <h1 className="text-left text-4xl font-semibold">
          We Will Represent You
        </h1>
        <div className="mt-16 w-full h-auto mx-auto">
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="mx-auto col-span-2 md:col-span-1">
              <h1 className="text-left text-xl text-blue-500 tracking-wide font-semibold mb-5">
                Legal Advice
              </h1>

              <p className="text-xl text-gray-500">
                Get the right legal advice on where you stand. We can help you
                understand your options and legal position regarding splitting
                your assets, going through a divorce, or caring for your
                children.
                <br />
                <br />
                The lawyers you will be speaking to specialise only in family
                law. That means you will receive expert advice on your matter.
                It’s important you clearly understand the complexities of your
                situation, and our lawyers are here to help you with that.
                Knowing how the system works and your place in it will relieve
                stress about the process, and you’ll be better equipped to
                navigate the often overwhelming family law space.
                <br />
                <br />
                Speak to our team for a free discussion about your situation,
                and get personalised advice and guidance to help you move
                forward effectively.
              </p>
            </div>
            <div className="mx-auto col-span-2 md:col-span-1">
              <h1 className="text-left text-xl text-blue-500 tracking-wide font-semibold mb-5">
                Negotiation Service
              </h1>
              <p className="text-xl text-gray-500">
                It’s not always easy negotiating with your former partner…
                <br />
                <br />
                MKI Legal can help you in reaching an agreement you’re happy
                with. We’ll work directly with your former partner to
                communicate what assets and debts you want to keep, split or
                sell.
                <br />
                <br />
                Our team will arrange disclosure of financial information with
                you and your former partner. We'll even handle communication
                with your ex, and their lawyers if needed - so you don’t have
                to.
                <br />
                <br />
                Reached an agreement already? Congratulations! We can even
                assist you in making it legally binding.
              </p>{" "}
            </div>
          </div>
          <Link href="/legal-representation">
            <button className="bg-primary text-white font-semibold text-lg rounded-md w-full md:w-1/2 py-3 px-5 mt-12">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* <button className="bg-primary text-white font-semibold text-lg rounded-md w-5/6 md:w-1/3 py-3 mt-20 mx-auto block">
      1300 967 552
      </button> */}
    </section>
  );
}
