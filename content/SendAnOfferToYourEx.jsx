import React from "react";
import Image from "next/image";
import Line2 from "../public/assets/images/Line-2.png";
import Line3 from "../public/assets/images/Capa-1.png";

import SS from "../public/assets/images/Group-556.png";

export default function SendAnOfferToYourEx() {
  return (
    <section className="w-full h-auto flex flex-col justify-center bg-white py-20 relative overflow-hidden">
      <div className="w-1/2 h-auto absolute left-0">
        <Image src={Line2} quality={90} placeholder="blurred" alt="line-2" height={500}/>
      </div>
      <div className="w-1/2 absolute right-0">
        <Image src={Line3} quality={90} placeholder="blurred" alt="line-3" height={500}/>
      </div>
      <div className="mt-16 container h-auto mx-auto p-20 bg-white shadow-lg rounded-md relative">
        <h5 className="text-center text-sm text-accent-700 uppercase">
          NEGOTIATION LETTER
        </h5>
        <h1 className="text-center text-2xl font-semibold">
          Send An Offer To Your Ex
        </h1>
        <div className="mt-16 w-full h-auto mx-auto">
          <div className="grid grid-cols-2 gap-12 mt-20">
            <div className="mx-auto">
              <p className="text-gray-500">
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
                <span className="font-semibold text-gray-800">
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
            <div className="mx-auto">
              <Image src={SS} quality={90} placeholder="blurred" alt="Meagan" />

              <button className="bg-primary text-white font-semibold text-lg rounded-md w-full py-3 mt-12">
                1300 123 123
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
