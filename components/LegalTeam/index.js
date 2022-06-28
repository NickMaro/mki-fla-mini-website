import React from "react";
import Image from "next/image";
import TeamDesktop from "../../public/assets/team/MKI 2022 Desktop.png";
import TeamMobile from "../../public/assets/team/MKI 2022 Mobile.png";

const LegalTeam = ({ children }) => {
  return (
    <div className="custom-container">
      {!!children ? (
        children
      ) : (
        <div className="flex flex-wrap -mx-4 text-center justify-center mb-5">
          <div className="w-full px-4 mb-4">
            <h2 className="font-bold uppercase">
              Our
              <span className="inline-block bg-accent text-white px-3 py-1 m-2">
                Legal Team
              </span>
              Are Here To Help
            </h2>
          </div>
          <div className="w-full px-4 xl:w-7/12">
            <p>
              The family lawyers at MKI Legal can help you get the right
              information, understand where you stand, prepare the legal
              documents, negotiate with your partner or if required, start
              family court proceedings.
            </p>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="w-full hidden lg:block">
          <Image
            src={TeamDesktop}
            quality={80}
            placeholder="blurred"
            alt="Best Family Lawyers Team In Perth"
          />
        </div>
        <div className="w-full px-4 lg:hidden">
          <Image
            src={TeamMobile}
            quality={50}
            loading="lazy"
            placeholder="blurred"
            alt="Best Family Lawyers Team In Perth"
          />
        </div>
      </div>
    </div>
  );
};

export default LegalTeam;
