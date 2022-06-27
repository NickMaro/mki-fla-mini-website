import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from 'prop-types';

import FreeDiscussionButton from "@components/FreeDiscussionButton";

const ContactTitle = ({ isMeetingTitle }) => {
  if(isMeetingTitle) {
    return (
      <>
        <span className="inline-block px-3 py-1 mt-4 mb-2 mr-2 bg-accent text-white uppercase">
          Arrange a Meeting
        </span>
        <span className="block md:inline-block uppercase"> with Our Team</span>
      </>
    )
  }

  return (
    <>
      <span className="inline-block px-3 py-1 mt-4 mb-2 mr-2 bg-accent text-white uppercase">
        Free
      </span>
      <span className="block md:inline-block uppercase">Confidential Discussion</span>
    </>
  )
}

const Contact = ({ isMeetingTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phoneNumber
          phoneNumberFormat
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  return (
    <div className="custom-container">
      <div className="flex flex-col">
        <h2 className="w-full mb-12 font-bold text-center uppercase">
          <ContactTitle isMeetingTitle={isMeetingTitle} />
        </h2>
        <div className="w-full flex flex-col items-center sm:w-full sm:flex-row lg:justify-center">
          <div className="w-8/12 lg:w-4/12 px-2 mb-6 sm:mb-0">
            <a
              href={`tel:${siteMetadata.phoneNumber}`}
              className="btn btn-primary block w-full"
            >
              Call Us - {siteMetadata.phoneNumberFormat}
            </a>
          </div>
          <div className="w-8/12 lg:w-4/12 px-2">
            <FreeDiscussionButton
              name="hello"
              className="btn btn-outline-accent block w-full"
              text="Let Us Call You"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isMeetingTitle: PropTypes.bool
};

Contact.defaultProps = {
  isMeetingTitle: false
};

export default Contact;
