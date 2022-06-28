import Image from "next/image";
import React from "react";

import News_7 from "../../public/assets/featured/7news.svg"
import foxsports from  "../../public/assets/featured/fox-sports.svg"
import triple from "../../public/assets/featured/triple-m.png"
import herald from "../../public/assets/featured/herald-sun.svg"
import newcom from "../../public/assets/featured/new-com-au.svg"
import pr from "../../public/assets/featured/6pr-882-news-talk.svg"
import gb from "../../public/assets/featured/2gb-837am.svg"
import west from "../../public/assets/featured/The-West-Australian-Logo.svg"

const featuredMedia = [
  {
    src: News_7,
    alt: "7news - Family Law Legal Advice",
    className: "w-full md:w-4/5",
  },
  {
    src: foxsports,
    alt: "Fox Sports - ",
  },
  {
    src: triple,
    alt: "Triple M Logo",
  },
  {
    src: herald,
    alt: "Herald Sun",
    className: "w-full md:w-4/5",
  },
  {
    src: newcom,
    alt: "New.com.au",
    className: "w-full md:w-4/5",
  },
  {
    src: pr,
    alt: "6pr-882-newsTalk",
    className: "w-full md:w-4/5",
  },
  {
    src: gb,
    alt: "2gb-837am",
    className: "w-full md:w-3/5",
  },
  {
    src: west,
    alt: "The-West-Australian-Logo",
    className: "py-10",
  },
];

const Featured = () => {
  return (
    <div className="custom-container">
      <div className="flex flex-wrap justify-center mb-4 mx-auto w-full xl:w-3/4">
        {featuredMedia.map(({ src, alt, className = "w-full" }, i) => {
          return (
            <div
              className="flex justify-center items-center w-1/2 md:w-1/4 p-4 mb-6 lg:mb-0"
              key={`featuredMedia-${i}`}
            >
              <Image src={src} quality={90} placeholder="blurred" alt={alt} />
            </div>
          );
        })}
      </div>
      <div className="italic text-center">
        MKI Legal Has Been Featured In These Publications
      </div>
    </div>
  );
};

export default Featured;
