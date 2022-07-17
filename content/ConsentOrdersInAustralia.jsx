import React from "react";
import Image from "next/image";
import Line2 from "../public/assets/images/Line-2.png";
import Line3 from "../public/assets/images/Capa-1.png";

import SS from "../public/assets/images/Group-557.png";
import Link from "next/link";

export default function ConsentOrdersInAustralia() {
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
      <div className="mt-16 custom-container h-auto mx-auto py-10 md:p-20 bg-white md:shadow-lg md:rounded-md relative">
        <h5 className="text-center text-lg font-bold text-blue-500 uppercase mb-5 tracking-wider">
          MAKE IT LEGALLY BINDING
        </h5>
        <h1 className="text-center text-4xl font-semibold">
          Consent Orders in Australia
        </h1>
        <div className="mt-16 w-full h-auto mx-auto">
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="mx-auto col-span-2 lg:col-span-1">
              <Image
                src={SS}
                quality={90}
                placeholder="blurred"
                alt="Meagan"
                loading="lazy"
              />
              <Link href="/consent-orders">
                <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-4">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="mx-auto col-span-2 lg:col-span-1">
              <p className="text-gray-500 text-xl font-normal">
                Consent orders are vital to make the agreement you’ve reached
                with your former partner legally binding. If you don’t make the
                agreement legally binding, then your partner can change their
                mind later on (even if you’re signed a document such as a
                statutory declaration).
                <br />
                <br />
                Our family lawyers will prepare your consent orders and lodge
                them with the court on your behalf. Our service costs a fraction
                of what other lawyers charge. We collect the necessary
                information both online and during a discussion with a family
                lawyer. Contact us today to have a free discussion with our
                legal team about consent orders.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
