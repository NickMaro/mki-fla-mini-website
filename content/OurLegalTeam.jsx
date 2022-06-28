import React from "react";
import Image from "next/image";
import MKITeamDesktop from "../public/assets/team/MKI 2022 Desktop.png";
import MKITeamMobile from "../public/assets/team/MKI 2022 Mobile.png";

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
          src={MKITeamDesktop}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="australia-region"
          loading="lazy"
        />
      </div>
      <div className="mt-16 w-auto h-auto mx-auto flex lg:hidden justify-center">
        <Image
          src={MKITeamMobile}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="australia-region"
          loading="lazy"
        />
      </div>
    </section>
  );
}
