import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/image-2.png";
import Logo2 from "../../public/assets/logo/image-3.png";
import Logo3 from "../../public/assets/logo/image-5.png";

export default function LogoBanner() {
  return (
    <div className="bg-blue-600 p-20 flex items-center justify-around">
      <div className="w-1/5">
        <Image
          src={Logo}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="MKI Legal Logo"
        />
      </div>
      <div className="w-1/5">
        <Image
          src={Logo2}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="MKI Legal Logo"
        />
      </div>
      <div className="w-1/5">
        <Image
          src={Logo3}
          quality={90}
          placeholder="blurred"
          className="mb-6"
          alt="MKI Legal Logo"
        />
      </div>
    </div>
  );
}
