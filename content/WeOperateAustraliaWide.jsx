import React from "react";
import Image from "next/image";
import AustraliaRegion from "../public/assets/images/australia-region.png";

export default function WeOperateAustraliaWide() {
  return (
    <section className="w-full h-auto p-20">
      <h1 className="text-center text-2xl font-semibold">We Operate Australia Wide</h1>
      <div className="mt-16 max-w-xl h-auto mx-auto">
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
