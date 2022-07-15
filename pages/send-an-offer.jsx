import React from "react";

import BaseLayout from "layouts/BaseLayout";
import FreeDiscussion from "components/FreeDiscussion";
import Featured from "components/Featured";
import Card from "components/Card";
import Hero from "components/Hero";

import ProperLinkModal from "components/NavLink";
import LegalTeam from "components/LegalTeam";

import Line2 from "../public/assets/images/Line-2.png";
import Line3 from "../public/assets/images/Capa-1.png";

import SS from "../public/assets/send-an-offer/Group 632.png";
import Group_634 from "../public/assets/send-an-offer/Group 634.png";

import Image from "next/image";
import Link from "next/link";

const SendAnOffer = () => {
  return (
    <BaseLayout isPreFooterVisible={false}>
      <Hero id="services-property-hero" hasImage={true}>
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center">
            <span className="block text-center">
              <span className="inline-block p-2 my-2">
                Free Negotiation Tool
              </span>
            </span>
            <span className="block text-center">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                Take The First Step in Reaching a Resolution
              </span>
            </span>
          </h1>
        </div>
        <div className="w-full lg:w-7/12 mx-auto mb-12 font-medium text-center">
          <h3 className="text-center">
            Negotiation is an ongoing process. The most important step is to get
            started...
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

      <section className="w-full h-auto flex flex-col justify-center bg-white py-20 relative overflow-hidden">
        <div className="w-1/2 h-auto absolute left-0">
          <Image
            src={Line2}
            quality={75}
            placeholder="blurred"
            alt="line-2"
            height={500}
            loading="lazy"
          />
        </div>
        <div className="w-1/2 absolute right-0">
          <Image
            src={Line3}
            quality={75}
            placeholder="blurred"
            alt="line-3"
            height={500}
            loading="lazy"
          />
        </div>
        <div className="mt-16 custom-container h-auto mx-auto py-10 md:p-20 bg-white md:shadow-lg md:rounded-md relative">
          <h1 className="text-center text-4xl font-semibold">
            Your First offer
          </h1>
          <div className="mt-16 w-full h-auto mx-auto">
            <div className="grid grid-cols-2 gap-12 mt-20">
              <div className="mx-auto col-span-2 lg:col-span-1">
                <Image
                  src={SS}
                  quality={75}
                  placeholder="blurred"
                  alt="Meagan"
                  loading="lazy"
                />
              </div>
              <div className="mx-auto col-span-2 lg:col-span-1">
                <p className="font-normal">
                  It can be tough starting talks around separation and what you
                  will split. It’s still an emotional time for all involved, and
                  you probably don’t know where to start…
                  <br />
                  <br />
                  Using our free negotiation tool, you can get the first offer
                  out on what to divide from the relationship. We’ll even send
                  the proposal on your behalf to get the ball rolling.
                  <br />
                  <br />
                  We’ve narrowed everything down to provide the essentials for
                  negotiation, and we’ll give you the structure to get that
                  important first letter out.
                </p>

                <div className="flex justify-center w-full mt-12">
                  <div className="w-full">
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
          </div>
        </div>
      </section>

      <section className="section-white bg-accent-400 relative">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">What Do I Get?</h2>
            <Card className="text-left shadow-none relative">
              <p>
                With this negotiation tool, you enter the assets and debts of
                the relationship and how you propose to divide everything. We’ll
                then send a secure (and confidential!) offer to your former
                partner about your proposal of how you want to split your assets
                and debts.
                <br />
                <br />
                So what's in the offer? The offer will outline what assets you
                want to keep, what you want to give to your partner, and what
                you propose to sell and split. We set that out in a proposal,
                along with a formal letter from MKI Legal explaining the process
                and some legal queries you may both have.
                <br />
                <br />
                <b>Did we mention it’s absolutely free?</b>
              </p>
              <br />
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/send-an-offer/Group 568.png"
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blurred"
                  alt="Consent orders family law"
                />
              </div>
              <h2 className="font-bold text-center uppercase my-6">
                How It Works
              </h2>

              <p>
                Just login, decide exactly how you want to apportion everything,
                and send it to your former partner for review.
                <br />
                <br />
                Your former partner then gets an email from us, inviting them to
                read the negotiation letter and view your off`er.
                <br />
                <br />
                You don't have to send anything to them, or even communicate
                with them! We will send it directly to them.
                <br />
                <br />
                Your partner will have the opportunity to either accept the
                offer, or decline it (with feedback). Only your partner can view
                the offer, as we include an easy security authentication just
                for them.
              </p>
            </Card>
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
      <section className="section-white relative">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">
              Why Can't I Just Talk To Them?
            </h2>
            <Card className="bg-transparenttext-left shadow-none relative">
              <p className="text-left">
                Sometimes it's better on paper, with a structured offer written
                by real lawyers.
                <br />
                <br />
                We make it easy. Add your assets and we take care of all the
                rest, including the legal issues…
                <br />
                <br />
                Our free negotiation tool is designed by experienced lawyers to
                guide you through making a real proposal to your partner. So
                send a genuine first offer, for free, and get the process
                started.
                <br />
                <br />
                The first step is often the hardest!
                <br />
                <br />
                You won't find a proposal tool like this anywhere else in
                Australia. Our firm specialises in family law. We help people go
                to negotiate, reach an agreement and get Consent Orders (the
                final step in making your agreement legally binding).
                <br />
                <br />
                You don’t have to go online to find a template, or waste time
                reading through complex legal websites trying to figure out what
                you should and shouldn’t do when negotiating.
                <br />
                <br />
                Plus, going through our platform might take out some of the
                ‘sting’ if you and your ex partner are not getting along. Having
                an app is a buffer between you both, and a formal letter from a
                professional family law firm helps even more. And remember,
                sending an offer doesn’t mean World War 3, it means you’re
                serious about sorting things in an amicable way and moving on.
              </p>
            </Card>

            <h2 className="font-bold uppercase mb-6">
              What If My Partner Declines The Offer?
            </h2>
            <Card className="bg-transparenttext-left shadow-none relative">
              <p className="text-left">
                Firstly, it can be helpful to talk about what you agree or don’t
                agree on. It’s okay to disagree, and is not uncommon to decline
                the first offer. Use the offer as a talking point.
                <br />
                <br />
                If declined, your former partner will send you some feedback
                about the offer. That way, you’ll be on the same page about what
                you agree (or don’t agree) on.
                <br />
                <br />
                If your offer gets rejected, it’s not the end of the world… We
                can help you revise and send a second offer, or take over the
                whole negotiation process for you. We have experience in
                negotiating matters and reaching an amicable agreement.
                <br />
                <br />
                If you just can’t seem to figure out an offer, or want an
                experienced team to ‘just handle it’ for you, MKI Legal can
                negotiate for you and help you reach an agreement. The right
                advice and support can be a gamechanger in moving towards a fair
                agreement. Click here for more information.{" "}
              </p>
            </Card>
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
      <section className="section-white bg-accent-400 relative">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">
              Safe, Secure, and Confidential
            </h2>
            <Card className="text-left shadow-none relative">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/send-an-offer/image 124.png"
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  placeholder="blurred"
                  alt="Consent orders family law"
                />
              </div>
              <p>
                We use google cloud services to store your information securely
                and confidentially. When we invite your partner to view your
                offer, they have to verify who they are. Only your partner can
                see your offer.
                <br />
                <br />
                Your offer is made confidentially and without prejudice. Making
                an offer will not ‘come back to bite you’ later. You can rest
                assured that your offer is safe, secure, and confidential - and
                won’t be used against you.
              </p>
              <br />
            </Card>
          </div>
        </div>
      </section>
      <section className="section-white bg-white relative">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-6">Time limits</h2>
            <Card className="bg-transparenttext-left shadow-none relative">
              <p className="text-left">
                The Court sets strict separation deadlines. If you are ‘Out of
                Time’, you could potentially miss out on dividing assets and
                have to seek permissions from the Court in order to divide
                everything.
                <br />
                <br />
                We’ve worked with clients who came to an agreement but never did
                anything beyond that. Years later, they have tried to finalise
                their agreement which is now a number of years old. The issues
                are:
                <ul className="my-6 list-disc pl-12">
                  <li>
                    The value of assets (including increases in super or a
                    business) will change and sometimes, dramatically. It is the
                    current values, not the values from many years ago, which
                    will be used. This may mean you have to pay more than you
                    previously would have!
                  </li>

                  <li>
                    Certain assets may be sold, disposed of or diminished. Years
                    later, there may be no equity in a property and you are both
                    responsible for the shortfall or your former partner could
                    increase arrears on a joint mortgage, and may make you
                    liable for more and affecting your credit rating.
                  </li>
                  <li>
                    The process becomes more complicated as lawyers need to look
                    at how things have changed and how you each have
                    contributed. This results in more costs to you.
                  </li>
                </ul>
              </p>

              <p className="font-bold my-6 text-left">
                Here are the time limits:
              </p>
              <ul className="my-6 list-disc pl-12 text-left">
                <li>
                  You have 2 years after separation if you are a de-facto couple
                  (living together but not married), or;
                </li>

                <li>
                  12 months post divorce, if you married. If you are married and
                  not yet divorced, your timer has not yet started!
                </li>
              </ul>

              <p className="text-left my-6">
                You’ll never reach an agreement without talking openly, and the
                longer you leave it, the worse your situation may end up being…
                <br />
                <br />
                It’s best to act now and sever the financial relationship,
                minimising your risk of liability. So, we recommend you get it
                sorted as soon as possible, and move towards making your
                agreement legally binding.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-white bg-accent-400 relative">
        <div className="custom-container">
          <div className="flex flex-col text-center items-center">
            <h2 className="font-bold uppercase mb-10">Why Is It Free?</h2>
            <Card
              className="text-left relative bg-white shadow-md"
              borderRadius="lg"
            >
              <div className="grid grid-cols-7 gap-12">
                <div className="col-span-7 lg:col-span-3 relative px-12">
                  <Image
                    src={Group_634}
                    quality={75}
                    placeholder="blurred"
                    alt="Meagan"
                    loading="lazy"
                  />
                </div>
                <div className="mx-auto col-span-7 lg:col-span-4">
                  <p>
                    We want to help make it easier for people to divide their
                    assets and deal with separation. We have great expertise in
                    the areas of family law and separation, as well as building
                    technology that makes people's lives easier. It’s free (and
                    risk free!) for a limited time, so it's easier than ever to
                    get started.
                    <br />
                    <br />
                    Don’t miss out on our free negotiation tool! In the future,
                    this will be a paid service.
                  </p>

                  <div className="flex justify-center w-full mt-12">
                    <div className="w-full">
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
            </Card>
            <h2 className="font-bold uppercase mb-6">
              But What If We Don’t Get On?{" "}
            </h2>
            <Card className="text-left shadow-none relative">
              <p>
                If you’re not on great terms, this negotiation tool is likely a
                great fit for you. You still get to create a free offer, and
                your partner will still receive it and be able to respond.
                <br />
                <br />
                We’ll send the offer to your partner on your behalf (from MKI
                Legal) so you don’t have to deal with them!
                <br />
                <br />
                You can also upgrade, where we take care of future negotiations,
                communications and disclosure (if needed). To view our full
                Negotiation Service, &nbsp;
                <span className="underline">click here</span>.
              </p>
              <br />
            </Card>
          </div>
        </div>
      </section>
      <section className="section-white">
        <LegalTeam />
      </section>
      <section className="section-grey">
        <FreeDiscussion />
      </section>
    </BaseLayout>
  );
};

export default SendAnOffer;
