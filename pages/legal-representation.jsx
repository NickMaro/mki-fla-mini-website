import React from "react";

import BaseLayout from "layouts/BaseLayout";
// import Contact from "@components/Contact";
import FreeDiscussion from "components/FreeDiscussion";
import Featured from "components/Featured";
import Card from "components/Card";
// import Content from "components/Content";
import Hero from "components/Hero";
// import Accordion from "components/Accordion";

import ProperLinkModal from "components/NavLink";
import LegalTeam from "components/LegalTeam";
import HowItWorks from "components/HowItWorks";
import NewPricing from "components/NewPricing";
import LegalAdviceCards from "components/LegalAdviceCards";

import TickSVG from "../public/assets/icons/check.svg";
import ItsExhausting from "../public/assets/separation-negotiation/its_exhausting.png";
import HomeChildren from "../public/assets/images/Home-children-card.jpg";
import Image from "next/image";
import Link from "next/link";

const SeparationNegotiation = () => {
  return (
    <BaseLayout isPreFooterVisible={false}>
      <Hero id="services-property-hero" hasImage={true}>
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center">
            <span className="block text-center">
              <span className="inline-block p-2 my-2">
                Separation Negotiation
              </span>
            </span>
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                Reach an Agreement. Guided by a Lawyer
              </span>
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-7/12 mx-auto mb-12 font-medium text-center">
          <h3 className="text-center">
            We'll take care of it. Get access to a family lawyer that helps you
            negotiate and reach an agreement with your ex partner.
          </h3>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-4/12">
            <ProperLinkModal
              text="Get Started now"
              to="/"
              type="modal"
              className="btn block w-full btn-primary btn-modal"
              formButtonName="homepage-hero"
            />
          </div>
        </div>
      </Hero>
      <section className="section-grey">
        <Featured />
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-bold text-center uppercase">
                It's Exhausting
              </h2>
            </div>
            <div className="w-full text-justify px-0 lg:px-32">
              <p>
                Going through separation is exhausting, stressful, and often
                frustrating. It can take couples months (or even years) to
                finalise everything properly at the end of a relationship.
              </p>
              <br />

              <p>Seriously, it doesn’t have to be that way…</p>
              <br />
              <p>
                The right advice, early on, from an experienced family lawyer
                can be a gamechanger in how you navigate your separation. We
                know this because we’ve helped hundreds of people just like you.
              </p>
            </div>
            <div className="w-full h-auto relative">
              <Image
                src={ItsExhausting}
                quality={75}
                placeholder="blurred"
                layout="responsive"
                objectFit="contain"
                alt="Why you need consent orders?"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-bold text-center uppercase">Negotiation</h2>
            </div>
            <div className="w-full text-justify px-0 lg:px-32">
              <p>
                Whether you’re on friendly terms with your former partner (or
                can’t even stand to think about them!), we can help you move
                forward by taking an active role in your separation from an
                early stage.
              </p>
              <br />
              <p>
                For an introductory $150/week, you’ll get access to a family
                lawyer that will help you negotiate with your former partner.
                It’s that simple.
              </p>
              <br />
              <p>
                We’ll help you find out what you’re entitled to, and take care
                of negotiating towards that final agreement. We’ll even take
                care of exchanging any relevant documents for you… All while
                communicating directly with your former partner (or their
                lawyer, if necessary). That’s right, we take care of everything
                so you don’t have to.
              </p>
              <br />
              <p>
                Once you’ve reached an agreement, we can also assist in{" "}
                <Link
                  href="/consent-orders-lawyers-perth"
                  className="underline"
                >
                  applying for Consent Orders
                </Link>{" "}
                with the courts to make the agreement legally binding.
              </p>
              <br />
            </div>
            <div className="flex justify-center w-full">
              <div className="w-full md:w-4/12">
                <ProperLinkModal
                  text="Get Started now"
                  to="/"
                  type="modal"
                  className="btn block w-full btn-primary btn-modal"
                  formButtonName="homepage-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-white bg-accent-400">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">Time Tips</h2>
            <Card className="bg-red-100 text-center">
              <p>
                <b>
                  Warning! After you’ve separated, these are the time limits
                  that apply, depending on whether you’re married or not:
                </b>
              </p>
              <br />
              <ul className="list-disc text-justify mb-6 pl-4">
                <li>
                  <p>
                    If you’re divorced, there is a deadline of 12 months from
                    the date your divorce order takes effect to finalise your
                    property and financial matters, or
                  </p>
                </li>
                <li>
                  <p>
                    If you’re in a de facto relationship, there is a deadline of
                    2 years from the date of your separation.
                  </p>
                </li>
              </ul>
              <p className="text-justify">
                If you don’t finalise your financial split before then, then you
                might be prevented from doing so (unless the court gives you an
                extension). This means you might be lumped with more debt than
                is fair, or your partner may keep more than they’re entitled to!
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-bold text-center uppercase">How It Works</h2>
            </div>
            <div className="text-left xl:px-56 mb-6">
              <p>
                First of all, it’s completely normal to have doubts or worries
                about dividing all your stuff. No one expects you to be a pro at
                negotiating the division of everything you and your partner have
                owned since the start of the relationship. Here's how we can
                help you...
              </p>
            </div>
            <HowItWorks buttonText="Get Started Now" linePadding="md:py-32">
              <div>
                <p>
                  <b>Initial Consultation</b> - Meet with our team for an
                  initial consultation, and we’ll start by building a financial
                  overview of all your assets and debts. It’s helpful to figure
                  out how much everything might be worth at a high level…Got
                  stuff you definitely want to keep? What about things you would
                  be willing to let go, or sell and split the proceeds? Great.
                  We’ll reach an understanding of how you want things to go, and
                  we’ll also help you determine what a fair split looks like
                  (e.g. what the court would give you).
                </p>
              </div>
              <div>
                <p>
                  <b>Ongoing Negotiations</b> - We’ll negotiate on your behalf
                  to help you reach an agreement with your partner. We’ll set
                  out your position letters. Not only will we write it for you,
                  we’ll also send it and communicate with your former partner on
                  your behalf. As this progresses, we’ll be the first point of
                  contact for your former partner (or their lawyer) moving
                  forward.
                </p>
              </div>
              <div>
                <p>
                  <b>Disclosure</b> - We will facilitate the exchanging of the
                  relevant financial documents so we can build an accurate
                  picture of the assets and debts you each have. Exchanging
                  financial documents with your partner helps you check what
                  financial resources your partner has, and vice versa. This
                  creates more transparency and trust in the negotiations -
                  giving you a better chance to reach an agreement.
                </p>
              </div>
            </HowItWorks>
            <div className="flex justify-center w-full">
              <div className="w-full md:w-4/12">
                <ProperLinkModal
                  text="Get Started now"
                  to="/"
                  type="modal"
                  className="btn block w-full btn-primary btn-modal"
                  formButtonName="homepage-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white bg-accent-400">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold mb-6 uppercase">Pricing</h2>
            <div className="flex flex-col md:flex-row items-start justify-center gap-12 mb-8">
              <div className="w-full md:w-9/12 xl:px-56">
                <NewPricing
                  theme="accent"
                  title="Assets & Debts Negotiation"
                  subtitle="from $150 / week"
                  className="w-auto"
                >
                  <div name="tick">
                    <p>
                      Legal advice from an experienced family lawyer about
                      splitting your assets and debts
                    </p>
                  </div>

                  <div name="tick">
                    <p>
                      Help documenting the assets and debts of the relationship
                    </p>
                  </div>

                  <div name="tick">
                    <p>Includes lodgement of your documents</p>
                  </div>

                  <div name="tick">
                    <p>Facilitating the exchanging of disclosure</p>
                    <p>Advice on what is a fair split </p>
                  </div>

                  <div name="tick">
                    <p>
                      Drafting and responding to offers to your former partner
                      on what to split, keep etc
                    </p>
                  </div>

                  <div name="tick">
                    <p>
                      Ongoing negotiations with your former partner (and their
                      lawyers if they have them)
                    </p>
                  </div>

                  <div name="tick">
                    <p>
                      Peace of mind that an expert is guiding you towards
                      reaching an agreement
                    </p>
                  </div>
                  <div name="tick">
                    <p>
                      A transparent payment plan that can save you spending
                      thousands of dollars at traditional law firms that charge
                      an upfront lump sum fee or by 6 minutes time slots*
                    </p>
                  </div>
                </NewPricing>
              </div>
            </div>
            <div className="w-full md:w-4/12 mb-8">
              <ProperLinkModal
                text="Get Started Now"
                to="/"
                type="modal"
                className="btn block w-full btn-primary btn-modal"
                formButtonName="homepage-hero"
              />
            </div>
            <div className="text-center xl:px-56">
              *Minimum subscription period is 3 months. Realistically, this is
              how long it takes for us to do everything properly and start
              negotiations.
              <br />
              <br />
              We’re offering our negotiation package as a subscription, so you
              know exactly what you are getting when you actually need it - and
              can easily budget for the cost.
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-bold text-center uppercase">
                What about our children?
              </h2>
            </div>
            <div className="text-center">
              <p>
                Yes, we can also assist with negotiations over children’s
                matters for just
              </p>
            </div>
            <div className="text-center">
              <p>
                from <span className="text-3xl font-bold">$200</span>/week
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 xl:px-32">
              <div className="flex items-center w-full md:w-6/12 relative">
                <div className="flex">
                  <Image
                    src={HomeChildren}
                    quality={75}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blurred"
                    alt="Why you need consent orders?"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12">
                <Card hasBottomMargin={false}>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="w-6 h-6">
                          {/* <img className="" src={TickSVG} alt="" /> */}
                        </div>
                      </div>
                      Legal advice from an experienced family lawyer about your
                      children and your options
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="w-6 h-6">
                          {/* <img className="" src={TickSVG} alt="" /> */}
                        </div>
                      </div>
                      Negotiate how much time the children spend with you, where
                      they live, their schooling, handover, holiday, birthdays
                      etc.
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="w-6 h-6">
                          {/* <img className="" src={TickSVG} alt="" /> */}
                        </div>
                      </div>
                      Ongoing negotiations with your former partner (and their
                      lawyers if they have them)
                    </div>
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="w-6 h-6">
                          {/* <img className="" src={TickSVG} alt="" /> */}
                        </div>
                      </div>
                      Peace of mind that an expert is guiding you towards
                      reaching an agreement
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="flex justify-center w-full mt-8">
              <div className="w-full md:w-4/12">
                <ProperLinkModal
                  text="Get Started now"
                  to="/"
                  type="modal"
                  className="btn block w-full btn-primary btn-modal"
                  formButtonName="homepage-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LegalAdviceCards />

      <section className="section-white">
        <LegalTeam />
      </section>
      <section className="section-grey">
        <FreeDiscussion />
      </section>
    </BaseLayout>
  );
};

export default SeparationNegotiation;
