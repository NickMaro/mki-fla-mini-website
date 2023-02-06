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

import ServicePropertySettle from "../public/assets/images/service-property-settle.jpg";
import NoSeriousDiscussion from "../public/assets/images/no serious discussion 2.jpeg";
import AgreementReached from "../public/assets/images/agreement reached.jpg";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import HeroButtonsV2 from "components/HeroButtonsV2";

const ConsentOrdersEssentials = ({ blog }) => {
  return (
    <BaseLayout isPreFooterVisible={false}>
      <Hero id="services-property-hero" hasImage={true}>
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center">
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                Property Consent Orders
              </span>
            </span>
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                From Just $990*
              </span>
            </span>
          </h1>
        </div>
        <div className="max-w-2xl mx-auto mb-12 font-medium text-center">
          <h3 className="text-center">
            Get affordable Consent Orders for a fraction of the time and cost.
            Reviewed and lodged by leading family lawyers. <br />
            Available Australia-Wide
          </h3>
        </div>
        <HeroButtonsV2
          text="Get Instant Quote"
          type="external"
          to="https://app.familylawassist.com.au/consent-order-pricing"
          classes="justify-center md:items-center"
        />

        <p className="text-center my-5 text-sm text-gray-500 italic">
          * The price excludes court filing fees. Terms and conditions apply.
        </p>
      </Hero>

      <section className="w-full max-w-[800px] h-[220px] md:h-[450px] mx-auto block bg-gray-100 lg:my-3 relative">
        <iframe
          src="https://player.vimeo.com/video/795834795?h=58ed90dafa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullscreen
          width="100%"
          height="100%"
          title="Kerryann On Getting Consent Orders"
        />
      </section>
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
                  quality={75}
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
                  draft your Application for Consent Orders (including the
                  minute) on your behalf. No more wasting your time painfully
                  trying to read through the many government websites and
                  templates.{" "}
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
                text="Get Instant Quote"
                to="https://app.familylawassist.com.au/consent-order-pricing"
                type="external"
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
                  quality={75}
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

                <li>We will lodge the signed documents with the court.</li>
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
            <Card className="bg-red-600 bg-opacity-20 text-left" title="">
              <p>
                <b>Warning!</b>
              </p>
              <br />
              <p>
                If you’ve reached an agreement with your former partner, There
                are only 2 ways to make it legally binding:
                <ol className="list-decimal">
                  <li className="ml-8 pl-3"> Getting consent orders.</li>
                  <li className="ml-8 pl-3">
                    {" "}
                    Signing a Binding Financial Agreement (<b>BFA</b>).{" "}
                  </li>
                </ol>
              </p>
              <br />
              <p>
                Signing a piece of paper, statutory declaration or affidavit
                does not make it legally binding.
                <br />
                <br />
                Consent Orders cost less than a BFA so they’re the ideal
                situation for lots of people.
                <br />
                <br />
                Without consent orders or a BFA, your partner can simply change
                their mind (no matter what you've signed). In this case, they
                can go after you for more.
                <br />
                <br />
                Delaying making your agreement legally binding (e.g. signing
                consent orders) can also be risky. The court will look at the
                assets you both have now (not at separation). So if you receive
                an inheritance, your property increases in value, you win the
                lotto, your business increases in value, you earn more money,
                you get a redundancy or you get a pay-out after you’ve separated
                - your partner can go after those extra assets.
                <br />≈ There are also deadlines that apply to financalising
                your property split. If you fall outside the deadline, you might
                be prevented from getting anything (we discuss this in more
                detail below).
              </p>{" "}
              <br />
              <p>Protect yourself, and get consent orders now.</p>
            </Card>
            <div className="w-full md:w-4/12">
              <ProperLinkModal
                text="Get Instant Quote"
                to="https://app.familylawassist.com.au/consent-order-pricing"
                type="external"
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
                If you go to another law firm, you can easily be charged $4,000
                to $5,000 to get Consent Orders. In some states, we’ve seen
                firms charging over $6,000 for Consent Orders!
              </p>
              <br />
              <p>
                We focus on the essentials. We’ll get the documents and
                lodgement done, without the costly extras that you probably
                don’t need…
              </p>
              <br />
              <p>
                We specialise in Consent Orders Applications, so we’re able to
                offer cost effective, affordable services.{" "}
              </p>
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
                Most firms charge by time - but we’re not most firms. Enjoy a
                fixed-fee outcome with transparent pricing - starting from just
                $990!*
              </p>
              <br />
            </div>
            <div className="grid grid-cols-2 md:flex-row items-start justify-center gap-8 mb-8 ">
              <NewPricing
                theme="accent"
                title="Essentials Package"
                subtitle="From $990*"
                className="col-span-2 md:col-span-1"
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
                    there is no super transfer)
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
                className="col-span-2 md:col-span-1"
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

                {/* <div name="footnote">
                  <Link href="/consent-orders-lawyers-perth">
                    <p className="underline text-xl pt-2">
                      view our Full Service option.
                    </p>
                  </Link>
                </div> */}
              </NewPricing>
            </div>
            <div className="w-full md:w-4/12">
              <ProperLinkModal
                text="Get Instant Quote"
                to="https://app.familylawassist.com.au/consent-order-pricing"
                type="external"
                className="btn block w-full btn-primary btn-modal"
                formButtonName="homepage-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-4">
              Why consent orders can be difficult (without legal help)?
            </h2>
            <Card className=" text-left" title="">
              <br />
              <p className="underline italic">
                Why it's so hard without a lawyer
              </p>
              <br />
              <p>
                {" "}
                <span className="font-semibold">
                  “We found the process difficult, bordering on distressing”
                </span>{" "}
                - what an MKI Legal Client thought{" "}
                <span className="font-semibold">before</span> they used us.
              </p>
              <br />
              <p>
                The application for consent orders has over 50 complex
                questions. Then there is the Minute. The Minute is the most
                important part of your consent orders application… You have to
                get the Minute right as it documents exactly how your assets and
                debts will be divided, and what your legal obligations are -
                lots of people mess this part up completely.
              </p>
              <br />
              <p>
                Many people even submit the Consent Orders application to the
                court only to get rejected. If you get it wrong, that’s more
                time and more stress added to the process…
                <br />
                <br />
                It’s already stressful enough to separate and then reach an
                agreement… The final stage is making sure the agreement is
                recorded legally. This is the most important part!
                <br />
                <br />
                It is a difficult document, a lot of people struggle to wrap
                their head around it.
                <br />
                <br />
                You really want to make sure it's done correctly. When dividing
                everything you own, including your home and all the
                superannuation that you’ve worked hard to accumulate, it’s
                important to get it sorted properly. If not, you may miss out on
                assets and money. Your partner may walk away with more, with you
                getting less. You may even try it yourself and get rejected by
                the courts, costing you even more in the long run.
                <br />
                <br />
                With MKI Legal, we take care of it and cut what you don’t need
                out.
                <br />
                <br />
                You’ll get your Consent Orders done right, with assistance on
                the process and lodgement.
                <br />
                <br />
                Save time, money, and get your agreement recorded properly...
                It’s not just filling out the court form, it’s the minute,
                lodgement with the court, and so on.
                <br />
                <br />
                <span className="italic">
                  {" "}
                  Simply put, if you stuff it up, you lose out.
                </span>
              </p>{" "}
              <br />
              <p>
                We reduce stress and make it easier for you to deal with… We
                take care of it for you. Having a lawyer do it for you just
                makes it all easier.
              </p>
              <br />
              <p className="underline italic">Can I do it myself?</p>
              <br />
              <p>
                {" "}
                <span className="font-semibold">
                  “One of the most complex things I’ve seen”
                </span>{" "}
                - what people tell us when trying to complete the application
                for consent orders documents{" "}
                <span className="font-semibold">themselves</span>.
              </p>
              <br />
              <p>
                A lot of our clients tell us that the application for consent
                orders (or Form 11 in WA) is “one of the most complex things
                they’ve seen”. Many who attempt the 20+ page court document
                struggle to fill it out, or don’t know where to even start. Many
                struggle to get their head around the minute as well (or are not
                even aware that a minute is needed). Some clients have told us,
                “We tried to do it ourselves but just couldn't’.{" "}
              </p>
              <br />
              <p>
                It’s simply best to get it done right by an expert who knows
                what they’re doing.{" "}
              </p>
            </Card>
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
                  quality={75}
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
