import React from "react";
import Image from "next/image";
import Vector from "../public/assets/images/Line-6.png";
import { TickIcon } from "../components/Svgs";
import Link from "next/link";

export default function MostPopularOnlineServices() {
  return (
    <section className="w-full h-auto bg-accent-700 bg-opacity-10 py-20 relative overflow-hidden">
      <h1 className="text-center text-4xl font-semibold my-4">
        Most Popular Online Services
      </h1>
      <div className="w-full h-auto relative flex flex-col justify-center">
        <div className="w-screen h-96 flex flex-col absolute">
          <Image
            src={Vector}
            quality={90}
            placeholder="bg-vector"
            alt="Meagan"
            loading="lazy"
          />
        </div>
        <div className="mt-16 custom-container h-auto mx-auto relative grid grid-cols-2 gap-10 md:gap-20 xl:gap-56">
          <article className="bg-white shadow-lg rounded-xl overflow-hidden col-span-2 md:col-span-1">
            <div className="bg-accent text-white p-8 text-center text-xl">
              Send a Negotiation Letter (Free)
            </div>

            <div className="p-8 lg:p-16 py-8">
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Send a proposal to your former partner to split your
                    finances
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Prepare an offer based on who keeps which assets & debts
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Easy online process - just fill in some details and send it
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Sent online directly to your partner through our online
                    system
                  </p>
                </li>
              </ul>
              <Link href="/send-an-offer">
                <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12 mx-auto block">
                  Get Started For Free
                </button>
              </Link>
            </div>
          </article>

          <article className="bg-white shadow-lg rounded-xl overflow-hidden col-span-2 md:col-span-1">
            <div className="bg-accent text-white p-8 text-center text-xl">
              Consent Orders from $999
            </div>

            <div className="p-8 lg:p-16 py-8">
              <ul className="space-y-4">
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Consent Orders for Property Division prepared by our family
                    lawyers
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Includes lodgement of your documents.
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    45 minute initial consultation with a lawyer
                  </p>
                </li>
                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">
                    Save thousands on legal fees
                  </p>
                </li>

                <li className="flex">
                  <div className="w-1/12">
                    <TickIcon />
                  </div>
                  <p className="pl-4 w-11/12 text-left">Starting from $990</p>
                </li>
              </ul>
              <Link href="/consent-orders">
                <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12 mx-auto block">
                  Find out more
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
