import React from "react";
import PropTypes from "prop-types";

import FreeDiscussionButton from "components/FreeDiscussionButton";
import Image from "next/image";
import Bubbles from "../../public/assets/images/MKI-discussion-bubbles.png";

const FreeDiscussion = ({ tagline }) => {
  const data = {
    site: {
      siteMetadata: {
        phoneNumber: "1300 967 552",
        phoneNumberFormat: "1300 967 552",
      },
    },
  };
  const { siteMetadata } = data.site;

  return (
    <div className="custom-container">
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-5/12 xl:w-6/12 px-4 flex items-center">
          <Image
            src={Bubbles}
            quality={80}
            placeholder="blurred"
            alt="Chat To Our Team Of Family Lawyers Today"
            loading="lazy"
          />
        </div>
        <div className="lg:w-7/12 xl:w-6/12 px-4">
          <h2 className="mb-6 font-bold text-center lg:text-left uppercase">
            <span className="block">{tagline}</span>
            <span className="inline-block px-3 py-1 mt-4 bg-accent text-white">
              Free Discussion
            </span>
          </h2>
          <p className="mb-12 text-center lg:text-left">
            The family law team at MKI Legal can assist you with any questions
            about your family law matter, separation, splitting your assets or
            your children. We can help you make the right decision on what to do
            next.
          </p>
          <div className="flex flex-wrap lg:flex-nowrap -mx-2 flex-col sm:flex-row items-center sm:items-start">
            <div className="w-8/12 sm:w-6/12 lg:w-auto flex-grow px-2 mb-6 sm:mb-0">
              <a
                href={`tel:${siteMetadata.phoneNumber}`}
                className="btn btn-primary block w-full"
              >
                Call Us - {siteMetadata.phoneNumberFormat}
              </a>
            </div>
            <div className="w-8/12 sm:w-6/12 lg:w-auto flex-grow lg:flex-grow-0 lg:flex-shrink px-2">
              <FreeDiscussionButton
                name="hello"
                className="btn btn-outline-accent block w-full"
                text="Let Us Call You"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FreeDiscussion.propTypes = {
  tagline: PropTypes.string,
  name: PropTypes.string,
};

FreeDiscussion.defaultProps = {
  tagline: "Not Sure What To Do Next?",
};

export default FreeDiscussion;
