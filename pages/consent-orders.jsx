import React from "react";

import BaseLayout from "layouts/BaseLayout";
import FreeDiscussion from "components/FreeDiscussion";
import Featured from "components/Featured";
import Card from "components/Card";
import Content from "components/Content";
import Hero from "components/Hero";
import Accordion from "components/Accordion";

import ProperLinkModal from "components/NavLink";
import LegalTeam from "components/LegalTeam";
import HowItWorks from "components/HowItWorks";
import NewPricing from "components/NewPricing";
import Image from "next/image";
import Link from "next/link";

import ServicePropertySettle from "../public/assets/images/service-property-settle.jpg";
import NoSeriousDiscussion from "../public/assets/images/no serious discussion 2.jpeg";
import AgreementReached from "../public/assets/images/agreement reached.jpg";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ConsentOrdersEssentials = ({ blog }) => {
  return (
    <BaseLayout isPreFooterVisible={false}>
      <Hero id="services-property-hero" hasImage={true}>
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center">
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                Online Consent Orders
              </span>
            </span>
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                From Just $990*
              </span>
            </span>
          </h1>
        </div>
        <div className="w-7/12 mx-auto mb-12 font-medium text-center">
          <h3 className="text-center">
            Get affordable Consent Orders for a fraction of the time and cost.
            Reviewed and lodged by leading family lawyers. <br />
            Available Australia-Wide
          </h3>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-4/12">
            <ProperLinkModal
              text="Save Thousands Now"
              to="/"
              type="modal"
              className="btn block w-full btn-primary btn-modal"
              formButtonName="homepage-hero"
            />
          </div>
        </div>
        <p className=" absolute inset-x-0 bottom-0 text-center mb-5 text-sm text-gray-500 italic">
          {" "}
          * The price excludes court filing fees. Terms and conditions apply.{" "}
        </p>
      </Hero>
      <section className="section-grey">
        <Featured />
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Content
              title="Consent Orders for Less"
              image={
                <Image
                  src={AgreementReached}
                  quality={100}
                  placeholder="blurred"
                  layout="fill"
                  objectFit="cover"
                  alt="Why you need consent orders?"
                  loading="lazy"
                />
              }
            >
              <p>
                You’ve separated from your partner and (finally!) reached an
                agreement on who gets what… It’s now time to make your agreement
                legally binding. If you’re not there yet, Consent Orders are not
                for you.
              </p>
              <br />

              <p>
                We know how expensive legal work can seem to be as you’re
                researching across the web. Traditional law firms can easily
                charge over $3,000 to help you separate from your partner. But
                this comes on their time frames, with their costs added.
              </p>
              <br />

              <p>
                It doesn’t have to be that way… Our lawyers can help you get
                Consent Orders for less. Save time and money, with the exact
                same legally binding outcome...
              </p>
              <br />
              <p>
                Sure, we can offer you the full-service, where we take care of
                every detail. If you’ve got the money, it’s a great option to
                have an experienced lawyer holding your hand through the process
                from negotiation to the courtroom.
              </p>
              <br />

              <p>
                But the truth is... getting Consent Orders doesn’t have to be so
                hard. That’s why we can offer Consent Orders Documents to you
                from just $990*.
              </p>
              <br />
              <p>
                We’ve made an easy online system that allows us to get what we
                need quicker and more effectively. No, you don’t need multiple
                lawyer meetings (often charging over $300+ an hour!), going over
                whether your split seems fair.
              </p>
              <br />
              <p>
                We’ve made it as easy and as simple for you - provide the
                details we need, have a quick chat with our legal team, and our
                lawyers then prepare your Consent Orders. After that, you just
                sign the application and we’ll file it with the Courts!
              </p>
            </Content>
          </div>
        </div>
      </section>
      <section className="section-white bg-accent-400">
        <div className="custom-container">
          <div className="flex flex-col">
            <HowItWorks buttonText="Get Started Now" title="How It Works">
              <div>
                <p>
                  <b>Enter the information online.</b> We’ll gather some basic
                  details about you, your former partner, and the assets and
                  debts of the relationship.
                </p>
              </div>
              <div>
                <p>
                  <b>Speak with a family lawyer.</b> Our legal team will call
                  you for a free consultation about your situation, and gather
                  any further information (if we need it). You can rest assured
                  that you’re on the right track!
                </p>
              </div>
              <div>
                <p>
                  <b>Documents prepared.</b> Our experienced family lawyers will
                  draft your Form 11 Application for Consent Orders on your
                  behalf. No more wasting your time painfully trying to read
                  through the many government websites and templates.{" "}
                </p>
              </div>
              <div>
                <p>
                  <b>You sign & we lodge.</b> After your application is
                  completed, we’ll send you and your former partner copies for
                  signing. Send it back, and we’ll lodge it with the courts for
                  you! How easy is that?
                </p>
              </div>
            </HowItWorks>
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
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Content
              title="Why You Need Consent Orders"
              image={
                <Image
                  src={NoSeriousDiscussion}
                  quality={100}
                  placeholder="blurred"
                  layout="fill"
                  objectFit="cover"
                  alt="Why you need consent orders?"
                  loading="lazy"
                />
              }
              titlePosition="left"
            >
              <p>
                It can be exhausting trying to reach an agreement after you
                separate from your partner. Who gets what? Can I keep this?
              </p>
              <br />
              <p>
                Now that you’ve reached an agreement, it’s time to safeguard
                your future and sever the financial relationship with your ex.
              </p>
              <br />
              <p>
                <b>With Our Essentials Consent Orders Package, you’ll get:</b>
              </p>
              <br />
              <ul className="list-disc list-outside ml-4">
                <li>
                  One on one time with a lawyer to make sure you’re on track
                  (included at no extra cost!){" "}
                </li>
                <li>
                  A legally binding, court-ordered agreement on what’s being
                  divided, split, or kept.{" "}
                </li>
                <li>
                  Certainty that your agreement is final - meaning your partner
                  can’t come back years down the future, demanding that they
                  want a “bigger slice of the pie” (it happens, and without a
                  legally binding agreement, it’s completely within their rights
                  to do so).{" "}
                </li>
                <li>
                  Peace of mind that the relationship is over - it’s time to
                  move on!
                </li>
              </ul>
            </Content>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">
              What happens if you don’t Get consent orders?
            </h2>
            <Card className="bg-red-600 bg-opacity-20 text-center">
              <p>
                <b>Warning!</b>
              </p>
              <br />
              <p>
                Getting Consent Orders, or a Binding Financial Agreement, are
                the only ways to make your agreement legally binding!
              </p>
              <br />
              <p>
                Consent Orders are more affordable than a BFA, which is often
                very specific on how things are split. BFA’s are more expensive,
                yet both provide certainty on your agreement.
              </p>{" "}
              <br />
              <p>
                Without a binding agreement in place, your former partner can
                demand more assets or money in the future - and they’re allowed
                to if your original agreement isn’t legally binding.
              </p>
              <br />
              <p>Protect yourself, and get consent orders now.</p>
            </Card>
            <div className="w-full md:w-4/12">
              <ProperLinkModal
                text="Get Started Now"
                to="/"
                type="modal"
                className="btn block w-full btn-primary btn-modal"
                formButtonName="homepage-hero"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-white bg-accent-400">
        <div className="custom-container xl:px-56">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold mb-6">How Is It So Much Cheaper?</h2>
            <div className="text-left mb-6">
              <p>
                We’re able to make the process so much more affordable by
                removing some of the traditional extras charged by other law
                firms…
              </p>
              <br />
              <p>
                By submitting some of your own information online, you save time
                and money on meetings with lawyers working out details. We don’t
                need to sit down and charge you to go over trivial things like
                bank account numbers etc.
              </p>
              <br />
              <p>
                With our online app, the entire process is so much quicker. We
                all save time, and you get Consent Orders faster and cheaper.
                It’s that simple!
              </p>
              <br />
              <p>
                Most firms charge by time - but we’re not most firms! Enjoy a
                fixed-fee outcome with transparent pricing - starting from just
                $990!*
              </p>
              <br />
            </div>
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-8 ">
              <NewPricing
                theme="accent"
                title="Essentials Package"
                subtitle="From $990*"
                className="w-full"
              >
                <div name="tick">
                  <p>Consent Orders for Property Division</p>
                </div>

                <div name="tick">
                  <p>
                    Includes standard transfer of house, mortgage, assets and
                    debts
                  </p>
                </div>

                <div name="tick">
                  <p>Includes lodgement of your documents.</p>
                </div>

                <div name="tick">
                  <p>
                    45 minute initial consultation with a lawyer (phone or
                    video) ($295 value included)
                  </p>
                </div>

                <div name="tick">
                  <p>
                    Legal assistance limited to document preparation and
                    procedural support
                  </p>
                </div>

                <div name="tick">
                  <p>Save thousands on legal fees!</p>
                </div>

                <div name="cross">
                  <p>Excludes negotiation with your partner</p>
                </div>
                <div name="cross">
                  <p>
                    Documents only so legal advice about your circumstances is
                    not included
                  </p>
                </div>

                <div name="cross">
                  <p>Excludes business interests</p>
                </div>

                <div name="cross">
                  <p>
                    Extra $440 for each super fund being split (no charge if
                    there's no super transfer)
                  </p>
                </div>

                <div name="cross">
                  <p>Excludes complex situations*</p>
                </div>
              </NewPricing>
              <NewPricing
                theme="gray"
                title="Full Service"
                subtitle="Contact Us"
              >
                <div name="tick">
                  <p>
                    Consent Orders for Property Division OR Children’s matters
                  </p>
                </div>

                <div name="tick">
                  <p>Includes help for those with Business interests</p>
                </div>

                <div name="tick">
                  <p>Includes superannuation transfers</p>
                </div>

                <div name="tick">
                  <p>
                    Negotiation and communication with your former partner and
                    their lawyer
                  </p>
                </div>

                <div name="tick">
                  <p>Suitable for complex sitautions or splits</p>
                </div>

                <div name="tick">
                  <p>
                    Detailed legal advice and assistance for the duration of
                    your matter, including whether the split looks fair
                  </p>
                </div>

                <div name="footnote">
                  <Link href="/consent-orders-lawyers-perth">
                    <p className="underline text-xl">
                      view our Full Service option.
                    </p>
                  </Link>
                </div>
              </NewPricing>
            </div>
            <div className="w-full md:w-4/12">
              <ProperLinkModal
                text="Get Started Now"
                to="/"
                type="modal"
                className="btn block w-full btn-primary btn-modal"
                formButtonName="homepage-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <LegalTeam />
      </section>
      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Content
              title="What You Don’t Get"
              titlePosition="left"
              className="mb-8"
              image={
                <Image
                  src={ServicePropertySettle}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blurred"
                  alt="Why you need consent orders?"
                  loading="lazy"
                />
              }
            >
              <p>
                Our Essentials Package ends with you getting Consent Orders for
                a fraction of the price. We provide the essentials, and do away
                with some of the costly extras…
              </p>
              <br />

              <p>
                <b>Negotiation</b>
              </p>
              <br />
              <p>
                Come to us with an agreement in place. For this package, we
                can’t help negotiate with your former partner, or help you
                determine what a ‘fair split’ looks like. This often takes
                months of back and forth communication with you, your ex, and
                their lawyers. By coming to us with an agreement, you can save
                thousands. Reach out to us if you need help negotiating with
                your ex partner.{" "}
              </p>
              <br />

              <p>
                <b>Superfund Transfer</b>
              </p>
              <br />
              <p>Are you planning on splitting superannuation funds?</p>
              <p>
                The essentials package is still for you but there is an
                additional fee of $440 when splitting superannuation, as our
                team needs to work directly with the super fund to facilitate
                the transfer. Even with this extra cost, you can still save
                thousands!
              </p>
              <br />

              <p>
                If you think you need more assistance with your matter, like
                help with negotiating, view our Full Service option.
              </p>
            </Content>
            <Card className="bg-accent-600 bg-opacity-20 text-center">
              <p>
                <b>Our quality of service and attention to detail remains! </b>
              </p>
              <br />
              <p>
                You still get lawyer reviewed and approved documents… We’ll even
                lodge them with the courts so you don’t have to. You’ll just
                have to send us back the signed documents.{" "}
              </p>
              <br />

              <p>
                If our affordable, low-cost, quicker Consent Orders Essentials
                package sounds like the right fit for you, Get Started.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="section-white">
        <Accordion faqFor="consent-orders-essentials" blog={blog} />
      </section>
      <section className="section-grey">
        <FreeDiscussion />
      </section>
    </BaseLayout>
  );
};

export default ConsentOrdersEssentials;

export async function getStaticProps() {
  const files = fs.readdirSync("mdx/faq");

  const blog = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("mdx/faq", fileName),
      "utf-8"
    );

    const { data: formatter, content } = matter(markdownWithMeta);
    return {
      slug,
      formatter,
      content,
    };
  });

  return {
    props: {
      blog,
    },
  };
}
