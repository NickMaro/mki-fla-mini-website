import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/image-2.png";
import Logo2 from "../../public/assets/logo/image-3.png";
import Logo3 from "../../public/assets/logo/image-5.png";

export default function LogoBanner() {
  return (
    <div className="bg-blue-600 px-20 py-10 flex items-center justify-around">
      <div className="custom-container grid grid-cols-3 gap-12">
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
          <Image
            src={Logo}
            quality={90}
            loading="lazy"
            placeholder="blurred"
            className="mb-6"
            alt="MKI Legal Logo"
            objectFit="contain"
            height={200}
          />
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
          <Image
            src={Logo2}
            quality={90}
            loading="lazy"
            placeholder="blurred"
            className="mb-6"
            alt="MKI Legal Logo"
          />
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
          <Image
            src={Logo3}
            quality={90}
            loading="lazy"
            placeholder="blurred"
            alt="MKI Legal Logo"
            objectFit="contain"
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
