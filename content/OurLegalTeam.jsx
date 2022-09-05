import React from "react";
import Image from "next/image";
import TeamDesktop from "../public/assets/team/mki_desktop.png";
import TeamMobile from "../public/assets/team/mki_mobile.png";

export default function OurLegalTeam() {
  return (
    <section className="w-full h-auto py-10 md:p-20 custom-container">
      <h5 className="text-center text-lg font-bold text-blue-500 uppercase mb-5 tracking-wider">
        Australian family lawyers
      </h5>
      <h1 className="text-center text-4xl font-semibold">
        Our Legal Team Are Here To Help
      </h1>
      <div className="mt-16 w-auto h-auto mx-auto hidden lg:flex justify-center">
        <Image
          src={TeamDesktop}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="MKI Legal Team"
          loading="lazy"
        />
      </div>
      <div className="mt-16 w-auto h-auto mx-auto flex lg:hidden justify-center">
        <Image
          src={TeamMobile}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="MKI Legal Team"
          loading="lazy"
        />
      </div>
    </section>
  );
}
