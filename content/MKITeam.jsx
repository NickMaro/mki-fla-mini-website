import Image from "next/image";
import React from "react";

import FeaturedIn from "../public/assets/images/featured-in.png";

import Nick from "../public/assets/team/nick.png";
import Marta from "../public/assets/team/marta.png";
import Angelo from "../public/assets/team/angelo.png";
import Zoe from "../public/assets/team/zoe.png";
import Stefan from "../public/assets/team/stefan.png";
import Meagan from "../public/assets/team/meagan.png";
import Esther from "../public/assets/team/esther.png";
import Abdul from "../public/assets/team/abdul.png";
import Jessie from "../public/assets/team/jessie.png";
import Badreiya from "../public/assets/team/badrieya.png";

const team = [
  Nick,
  Marta,
  Angelo,
  Zoe,
  Stefan,
  Meagan,
  Esther,
  Abdul,
  Jessie,
  Badreiya,
];

export default function MKITeam() {
  return (
    <section className="w-full h-auto">
      <div className="w-full">
        <Image
          src={FeaturedIn}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="FeaturedIn"
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-10 gap-10 container mx-auto md:px-32 pt-20">
        {team.map((t, idx) => (
          <div className="col-span-5 lg:col-span-2 p-4 lg:p-0" key={idx}>
            <Image
              src={t}
              quality={90}
              placeholder="blurred"
              className="mb-6"
              alt={t}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
