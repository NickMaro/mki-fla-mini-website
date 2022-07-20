import React from "react";
import { CallIcon, LocationIcon, MailIcon } from "components/Svgs";
import ProperLinkModal from "components/NavLink";

export default function GetInTouch({ isDiscussionFreeToShow = false }) {
  return (
    <section className="w-full h-auto py-10 md:p-20">
      <h5 className="text-center text-lg font-bold text-blue-500 uppercase mb-5 tracking-wider">
        contact us
      </h5>
      <h1 className="text-center text-4xl font-semibold">
        Get In Touch With MKI Legal
      </h1>
      <div className="mt-16 max-w-4xl h-auto mx-auto">
        <div className="mx-auto flex flex-col justify-center items-center">
          <CallIcon />
          <p className="mt-3 font-medium text-xl text-gray-600">1300 967 552</p>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center mt-20">
          <MailIcon />
          <p className="mt-3 font-medium text-xl text-gray-600">
            help@familylawassist.com.au
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20">
          <div className="mx-auto flex flex-col justify-center items-center col-span-3 md:col-span-1">
            <LocationIcon />
            <p className="mt-3 text-center font-medium text-xl text-gray-600">
              NSW
              <br />
              Level 11,
              <br />
              66 Clarence Street
              <br />
              SYDNEY NSW 2000
            </p>
          </div>
          <div className="mx-auto flex flex-col justify-center items-center col-span-3 md:col-span-1">
            <LocationIcon />
            <p className="mt-3 text-center font-medium text-xl text-gray-600">
              WA
              <br />
              Suite 1, Level 4,
              <br />
              200 Adelaide Terrace,
              <br />
              EAST PERTH WA 6004
            </p>
          </div>

          <div className="mx-auto flex flex-col justify-center items-center col-span-3 md:col-span-1">
            <LocationIcon />
            <p className="mt-3 text-center font-medium text-xl text-gray-600">
              QLD
              <br />
              Coming soon
              {/* <br />
              200 Adelaide Terrace,
              <br />
              EAST PERTH WA 6004 */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
