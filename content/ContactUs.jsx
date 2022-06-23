import React from "react";
import { CallIcon, LocationIcon, MailIcon } from "../components/Svgs";

export default function ContactUs() {
  return (
    <section className="w-full h-auto p-20">
      <h5 className="text-center text-sm text-accent-700 uppercase">
        Contact us
      </h5>
      <h1 className="text-center text-2xl font-semibold">
        Get In Touch With MKI Legal
      </h1>
      <div className="mt-16 max-w-xl h-auto mx-auto">
        <div className="mx-auto flex flex-col justify-center items-center">
          <CallIcon />
          <p className="mt-3">1300 Number</p>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center mt-20">
          <MailIcon />
          <p className="mt-3">help@familylawassist.com.au</p>
        </div>

        <div className="grid grid-cols-2 mt-20">
          <div className="mx-auto flex flex-col justify-center items-center">
            <LocationIcon />
            <p className="mt-3 text-center">
              NSW
              <br />
              Level 11,
              <br />
              66 Clarence Street
              <br />
              SYDNEY NSW 2000
            </p>
          </div>
          <div className="mx-auto flex flex-col justify-center items-center">
            <LocationIcon />
            <p className="mt-3 text-center">
              WA
              <br />
              Suite 1, Level 4,
              <br />
              200 Adelaide Terrace,
              <br />
              EAST PERTH WA 6004
            </p>
          </div>
        </div>

        <button className="bg-primary text-white font-semibold text-lg rounded-md w-1/2 py-3 mt-20 mx-auto block">
        Free Discussion
        </button>
      </div>
    </section>
  );
}
