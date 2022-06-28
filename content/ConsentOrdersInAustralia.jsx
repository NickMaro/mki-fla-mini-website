import React from "react";
import Image from "next/image";
import Line2 from "../public/assets/images/Line-2.png";
import Line3 from "../public/assets/images/Capa-1.png";

import SS from "../public/assets/images/Group-557.png";

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

              <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-4">
                Get Started
              </button>
            </div>
            <div className="mx-auto col-span-2 lg:col-span-1">
              <p className="text-gray-500 text-xl font-normal">
                The employment law system in Australia is separated into either
                a State-based employment system or a Federal employment system.
                <br />
                <br />
                In Western Australia, you are likely in the Federal system if
                you work for a company, the Federal government, a not-for-profit
                that sells goods or services (as oppose to relying entirely on
                donations or grants) or certain local councils.
                <br />
                <br />
                <span className="font-semibold text-gray-600">
                  Most employees in Australia fall under the Federal system.
                </span>
                <br />
                <br />
                The employment relationship is governed in a variety of ways
                including private contracts between employer and employee,
                awards which apply to specific industries, enterprise bargaining
                agreements and legislation such as the Fair Work Act.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
