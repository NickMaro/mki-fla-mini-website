import React from "react";

import { featuredMedia } from "@/config";

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
              <img className={className} src={src} alt={alt} />
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
