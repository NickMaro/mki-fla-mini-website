import React from "react";

import BaseLayout from "layouts/BaseLayout";
import ContactForm from "components/ContactForm";
import GetInTouch from "components/GetInTouch";

const ContactUs = () => {
  return (
    <BaseLayout>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-wrap -mx-4">
            <div className="flex flex-col w-full lg:w-4/12 xl:w-5/12 pl-4 mb-4">
              <h1 className="text-4xl lg:text-5xl font-bold mb-10 uppercase leading-10	">
                It's
                <span className=" my-5 px-3 py-1 ">Free</span>
                To Discuss Your Situation
              </h1>
              <h3>
                Fill In Your Details And <br />
                We’ll Call You Back, <br />
                or Call Us On <b>(08) 9470 2777</b> <br />
              </h3>
            </div>
            <div className="w-full lg:w-8/12 xl:w-7/12 p-6 rounded-lg md:shadow-lg ">
              <ContactForm name="contact-page" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <GetInTouch />
      </section>
    </BaseLayout>
  );
};

export default ContactUs;
