import React from "react";
import Image from "next/image";
import Vector from "../public/assets/images/Line-6.png";
import { TickIcon } from "../components/Svgs";

export default function MostOnlinePopularServices() {
  return (
    <section className="w-full h-auto bg-accent-700 bg-opacity-10 py-20 relative overflow-hidden">
   

      <h1 className="text-center text-2xl font-semibold my-4">
        Most Online Popular Services
      </h1>
      <div className="w-full h-auto relative flex flex-col justify-center">
      <div className="w-screen h-96 flex flex-col absolute">
        <Image src={Vector} quality={90} placeholder="blurred" alt="Meagan" />
      </div>
      <div className="mt-16 container h-auto mx-auto relative grid grid-cols-2 gap-20">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden col-span-2 md:col-span-1">
          <div className="bg-accent text-white p-4 text-center text-xl">
            Send a Negotiation Letter (Free)
          </div>

          <div className="p-12">
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Send an offer letter to your former partner
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Help preparing an offer based on your assets & debts
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Easy online app - Just fill in some details and submit!
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Prepared and sent by lawyers
                </p>
              </li>
            </ul>
            <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12 mx-auto block">
              Get Started For Free
            </button>
          </div>
        </article>

        <article className="bg-white shadow-lg rounded-lg overflow-hidden col-span-2 md:col-span-1">
          <div className="bg-accent text-white p-4 text-center text-xl">
            Consent Orders from $999
          </div>

          <div className="p-12">
            <ul className="space-y-4">
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Send an offer letter to your former partner
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Help preparing an offer based on your assets & debts
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Easy online app - Just fill in some details and submit!
                </p>
              </li>
              <li className="flex">
                <div className="w-1/12">
                  <TickIcon />
                </div>
                <p className="pl-4 w-11/12 text-left">
                  Prepared and sent by lawyers
                </p>
              </li>
            </ul>
            <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12 mx-auto block">
              Save Thousands
            </button>
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}
