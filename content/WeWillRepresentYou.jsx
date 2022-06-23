import React from "react";
import Image from "next/image";
import Meagan from "../public/assets/images/meagan.png";
import ColorBg from "../public/assets/images/Group-545.png";
import Vector from "../public/assets/images/vector.png";

import Nick from "../public/assets/team/nick.png";


export default function WeWillRepresentYou() {
  return (
    <section className="w-full h-auto bg-accent-700 bg-opacity-10 py-20 relative overflow-hidden">
      <div className="w-full h-auto flex flex-col items-end absolute bottom-0">
        <Image
          src={Vector}
          quality={90}
          placeholder="blurred"
          alt="Meagan"
        />
        </div>
      <div className="mt-16 container h-auto mx-auto p-20 bg-white shadow-lg rounded-md relative">
        <div className="w-32 h-32 bg-white border border-accent-600 rounded-full absolute z-20 -left-12 -top-12">
        <Image
          src={Nick}
          quality={90}
          placeholder="blurred"
          alt="Meagan"
        />
        </div>
        <div className="w-40 h-auto absolute -right-12 -top-6 z-1">
        <Image
          src={ColorBg}
          quality={90}
          placeholder="blurred"
          alt="Meagan"
        />
        </div>
        <div className="w-48 h-auto flex flex-col items-end absolute -bottom-8 -right-28">
        <Image
          src={Meagan}
          quality={90}
          placeholder="blurred"
          alt="Meagan"
        />
        </div>
        
        <h5 className="text-left text-sm text-accent-700 uppercase">
          MKI LEGAL
        </h5>
        <h1 className="text-left text-2xl font-semibold">
          We Will Represent You
        </h1>
        <div className="mt-16 w-full h-auto mx-auto">
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="mx-auto">
              <h1 className="text-left text-sm text-accent-700 mb-5">
                Legal Advice
              </h1>

              <p>
                A Senior employment lawyer will be involved in your matter so
                you can rest assured you are getting accurate and reliable
                advice.
                <br />
                <br />
                A Senior employment lawyer will be involved in your matter so
                you can rest assured you are getting accurate and reliable
                advice.
                <br />
                <br />A Senior employment lawyer will be involved in your matter
                so you can rest assured you are getting accurate and reliable
                advice.
              </p>
            </div>
            <div className="mx-auto">
              <h1 className="text-left text-sm text-accent-700 mb-5">
                Negotiation Service
              </h1>
              <p>
                We provide the best value service in our industry. We are
                confident that our cost structure and rates are better than any
                other employment law firm in Perth, without sacrificing quality.
                Our expertise is in employment law, so we can deliver a far
                better service at a far better price.
                <br />
                <br />
                We provide the best value service in our industry. We are
                confident that our cost structure and rates are better than any
                other employment law firm in Perth, without sacrificing quality.
                Our expertise is in employment law, so we can deliver a far
                better service at a far better price.
              </p>{" "}
            </div>
          </div>

          <button className="bg-primary text-white font-semibold text-lg rounded-md w-1/3 py-3 mt-20 mx-auto block">
            1300 123 123
          </button>
        </div>
      </div>
    </section>
  );
}
