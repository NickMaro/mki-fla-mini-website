import React from "react";
import Image from "next/image";
import AustraliaRegion from "../public/assets/team/whole-team.png";

export default function OurLegalTeam() {
  return (
    <section className="w-full h-auto p-20">
      <h5 className="text-center text-sm text-accent-700 uppercase">
        Australian family lawyers
      </h5>
      <h1 className="text-center text-2xl font-semibold">
      Our Legal Team Are Here To Help
      </h1>
      <div className="mt-16 w-auto h-auto mx-auto flex justify-center">
        <Image
          src={AustraliaRegion}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="australia-region"
        />
      </div>
    </section>
  );
}
