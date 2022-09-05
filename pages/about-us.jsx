import React from "react";

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

import TeamDesktop from "../public/assets/team/mki_desktop.png";
import TeamMobile from "../public/assets/team/mki_mobile.png";

import Image from "next/image";
// import Contact from "../components/Contact";
// import Featured from "../components/Featured";
import DefaultLayout from "layouts/BaseLayout";

const team = [
  {
    path: Nick,
    name: "NICHOLAS MAROUCHAK",
    position: "Director",
  },
  { path: Marta, name: "MARTA MAROUCHAK", position: "Lawyer" },
  { path: Angelo, name: "ANGELO RECHICHI", position: "Lawyer" },
  { path: Zoe, name: "ZOE KALIMERIS", position: "Lawyer" },
  { path: Stefan, name: "STEFAN BANOVICH", position: "Director" },
  { path: Meagan, name: "MEAGAN HILLIER", position: "Lawyer" },
  { path: Esther, name: "ESTHER POWER", position: "Lawyer" },
  { path: Abdul, name: "ABDUL AL ASADI", position: "Lawyer" },
  { path: Jessie, name: "Jessie", position: "Paralegal" },
  { path: Badreiya, name: "BADREIYA MOOSA-PITT", position: "Paralegal" },
];

const PeopleList = ({ people }) => {
  return people.map((d, i) => {
    const { path, name, position } = d;

    return (
      <div key={i} className="col-span-3 px-4 mb-12 flex flex-col items-center">
        <div className="mb-4 px-12 xl:px-24">
          <Image
            src={path}
            quality={75}
            placeholder="blurred"
            className="mb-6"
            alt={name}
            loading="lazy"
          />
        </div>
        <h3 className="font-bold uppercase mb-4 md:text-xl text-2xl text-center">
          {name}
        </h3>
        <p className="mb-4 text-lg">{position}</p>
      </div>
    );
  });
};

const AboutUS = () => {
  return (
    <DefaultLayout>
      <section className="bg-white pt-12 md:pt-24">
        <div className="custom-container">
          <h1 className="text-5xl lg:text-6xl text-center font-bold leading-relaxed">
            The <span className="bg-accent text-white px-2">Legal Team</span> To
            Help You
          </h1>
        </div>
      </section>

      <section className="xl:p-16 my-10">
        <div className="custom-container">
          <p className="text-center text-lg">
            Meet the legal team at MKI Legal.
          </p>
          <div className="hidden lg:block w-full">
            <Image
              className="w-full"
              src={TeamDesktop}
              quality={80}
              placeholder="blurred"
              alt="MKI Legal Team"
            />
          </div>
          <div className="block lg:hidden w-full">
            <Image
              className="w-full"
              src={TeamMobile}
              quality={50}
              placeholder="blurred"
              alt="MKI Legal Team"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 md:py-24 container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-9 gap-12 ">
          <PeopleList people={team} />
        </div>
      </section>

      {/* <section id="contact" className="section-grey">
        <Contact isMeetingTitle={true} />
      </section>

      <section className="section-grey">
        <Featured />
      </section> */}
    </DefaultLayout>
  );
};

export default AboutUS;
