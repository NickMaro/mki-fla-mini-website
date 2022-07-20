import React from "react";
import Image from "next/image";
import Line2 from "../public/assets/images/Line-2.png";
import Line3 from "../public/assets/images/Capa-1.png";

import SS from "../public/assets/images/Group-556.png";
import Link from "next/link";

export default function SendAnOfferToYourEx() {
  return (
    <section className="w-full h-auto flex flex-col justify-center bg-white py-20 relative overflow-hidden">
      <div className="w-1/2 h-auto absolute left-0">
        <Image
          src={Line2}
          quality={90}
          placeholder="blurred"
          alt="line-2"
          height={500}
          loading="lazy"
        />
      </div>
      <div className="w-1/2 absolute right-0">
        <Image
          src={Line3}
          quality={90}
          placeholder="blurred"
          alt="line-3"
          height={500}
          loading="lazy"
        />
      </div>
      <div className="mt-16 custom-container h-auto mx-auto py-10 md:p-20 bg-white md:shadow-lg rounded-md relative">
        <h5 className="text-center text-lg font-bold text-blue-500 uppercase mb-5 tracking-wider">
          NEGOTIATION LETTER
        </h5>
        <h1 className="text-center text-4xl font-semibold">
          Send An Offer To Your Ex
        </h1>
        <div className="mt-16 w-full h-auto mx-auto">
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="mx-auto col-span-2 lg:col-span-1">
              <p className="text-gray-500 text-xl">
                Take the important first step, for free! Sending a proposal on
                how you want to split your assets and debts is a crucial first
                step in the negotiation process…
                <br />
                <br />
                We’ve created this free online tool that allows you to document
                and send a proposal to your former partner on how you propose to
                divide the assets and debts of the relationship.
                <br />
                <br />
                Just fill in some information online, and we will automatically
                send an offer letter to your former partner. Only they can view
                it - and they will have an opportunity to accept or reject your
                offer (with feedback).
                <br />
                <br />
                It’s quick, easy to get started, and there’s no risk to you.
                Free for a limited time only*
              </p>
            </div>
            <div className="mx-auto col-span-2 lg:col-span-1">
              <Image
                src={SS}
                quality={90}
                placeholder="blurred"
                alt="bg-design"
                loading="lazy"
              />
              <Link href="/send-an-offer">
                <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
