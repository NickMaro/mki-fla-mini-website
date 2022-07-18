import React from "react";

import BaseLayout from "layouts/BaseLayout";
import Contact from "components/Contact";
import FreeDiscussion from "components/FreeDiscussion";
import Featured from "components/Featured";
import Card from "components/Card";
import Hero from "components/Hero";
import HeroButtonsV2 from "components/HeroButtonsV2";
// import Accordion from "../components/Accordion";
import Link from "next/link";
import heroBgImage from "../public/assets/consent-orders/hero.jpeg";

import WhatAreConsentOrders from "../public/assets/consent-orders/what_are_consent_orders.jpg";
import WhatDoWeNeedFromYou from "../public/assets/consent-orders/what_do_we_need_from_you.jpg";
import BenefitsOfConsentOrders from "../public/assets/consent-orders/benefits_of_consent_orders.jpg";
import WhatCanIIncludeInMyConsentOrders from "../public/assets/consent-orders/what-can-i-include-in-my-consent-orders.jpeg";
import ConsentOrdersHero from "../public/assets/consent-orders/consent-orders-hero.jpeg";
import Image from "next/image";

const ConsentOrderService = () => {
  return (
    <BaseLayout>
      <Hero
        id="services-property-hero"
        bgImages={heroBgImage}
        altImageText="Consent Orders Lawyers Perth"
      >
        <div className="flex flex-col mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center md:text-left">
            <span className="inline-block bg-accent p-2 my-2 text-white">
              Get Consent Orders
            </span>
            <span className="block">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                in Perth
              </span>
            </span>
          </h1>
        </div>
        <div className="xl:w-1/2 w-full mb-12 font-medium text-center md:text-left">
          <h3>Get Started With A Free Confidential Discussion</h3>
        </div>

        <HeroButtonsV2 />
      </Hero>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Card
              title="WHAT ARE CONSENT ORDERS?"
              image={
                <Image
                  src={WhatAreConsentOrders}
                  quality={75}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blurred"
                  alt="Consent Orders"
                />
              }
              direction="rtl"
            >
              <p>
                Consent Orders are a collection of documents lodged with the
                court that turns the agreement you have with your partner into
                final court orders. Consent orders make your agreement legally
                binding.
              </p>
              <br />
              <p>
                The agreement could be in relation to parenting such as for
                example who the child lives with, who the child spends time
                with, limitations on travel and other parenting issues.
              </p>
              <br />
              <p>
                It can also deal with property and financial matters such as how
                assets are to be divided, spousal maintenance, and how
                superannuation is divided (called super split).
              </p>
              <br />
              <p>
                Consent orders, once approved, have the same effect as if a
                judge made those orders at trial.
              </p>
              <br />
            </Card>
            <Card title="WHEN ARE CONSENT ORDERS USED?">
              <p>
                Consent Orders are used after you have separated and reached an
                agreement on some or all of these:
              </p>
              <br />
              <ul className="list-disc xl:ml-10 ml-5">
                <li>Parenting, eg how time with your children is divided</li>
                <li>
                  Property, eg how you divide the assets and debts of the
                  relationship
                </li>
                <li>
                  Spousal maintenance, e.g. one spouse paying some money to the
                  other spouse.
                </li>
              </ul>
              <br />
              <p>
                You can make Consent Orders immediately after you have
                separated. There is no waiting period after separation.
              </p>
              <br />
              <p>
                The agreement that you reach with your former partner has solid
                foundations i.e you have discussed all the assets and
                liabilities that you have and both parties are clear as to what
                they will be keeping and what they will be responsible for.
              </p>
              <br />
              <p>
                If you can’t reach an agreement with your partner, learn more
                about{" "}
                <Link
                  href="/property-dispute-lawyers-perth/"
                  className="text-accent hover:underline"
                >
                  property litigation
                </Link>{" "}
                and{" "}
                <Link
                  href="/child-custody-and-support-lawyers-perth/"
                  className="text-accent hover:underline"
                >
                  child litigation
                </Link>
                .
              </p>
              <br />
            </Card>

            <Card
              title="WHAT DO WE NEED FROM YOU?"
              image={
                <Image
                  src={WhatDoWeNeedFromYou}
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  placeholder="blurred"
                  alt="Get family law advice on Consent Orders"
                />
              }
              direction="rtl"
            >
              <p>
                If the above sounds like your situation, you may find that
                consent orders are the most appropriate route for you and your
                situation…
              </p>
              <br />
              <p>This is when we invite you in for an initial consultation.</p>
              <br />
              <p>
                At the consultation, we will work with you to understand the
                agreement that you have with your ex-partner i.e who the
                children will live with, what finances and assets will be
                divided, who is keeping what, will someone take over the
                mortgage? Will there be cash payments?
              </p>
              <br />
              <p>
                We also help you think about the finer details or mention things
                that may have been missed which need agreement.
              </p>
              <br />
              <p>
                Remember: Your agreement is not legally binding at this point.
              </p>
              <br />
            </Card>
            <Card title="HOW TO FINALISE THE AGREEMENT?">
              <p>This is where Consent Orders come in. How can we help?</p>
              <br />
              <p>
                After understanding your agreement, we draft your consent orders
                documents in terms of the agreement that you have reached.
              </p>
              <br />
              <p>
                We offer fixed fee packages to draft your consent orders
                documents so that you know what your costs will be. Contact us
                to discuss our fixed fee packages.
              </p>
              <br />
              <p className="font-bold">
                What Happens Once The Documents Are Drafted?
              </p>
              <br />
              <p>
                Once the documents are drafted, they will need to be signed by
                you and your former partner in the presence of an authorised
                witness.
              </p>
              <br />
              <p>
                Once the documents are signed by both parties, they will need to
                be lodged with the Family Court.
              </p>
              <br />
              <p>
                Once lodged, the Family Court will allocate a Consent Orders
                hearing. The parties do not need to attend the hearing. At the
                hearing, a judicial officer will review your Consent Orders and
                if satisfied, make the orders you have proposed to the court.
              </p>
              <br />
              <p>
                If orders are made, the clock starts ticking on the obligations
                under the orders i.e. refinancing and transferring the family
                home, closing joint accounts, transferring cars etc.
              </p>
              <br />
            </Card>
            <Card
              hasBottomMargin={true}
              title="BENEFITS OF CONSENT ORDERS"
              image={
                <Image
                  src={BenefitsOfConsentOrders}
                  quality={100}
                  layout="fill"
                  placeholder="blurred"
                  objectFit="cover"
                  alt="Top consent orders lawyers in Perth"
                />
              }
              direction="ltr"
            >
              <p>
                Without having a formalised agreement, your former partner may
                go back on any agreement which you have.
              </p>
              <br />
              <p>
                For property and financial matters, your former partner has 12
                months after divorce if you are married, or 2 years after
                separation if you are de-facto, to make a property settlement
                claim. If nothing is finalised, you are leaving yourself open to
                having proceedings commenced against you out of the blue. This
                is particularly the case for married couples who separate but
                then do not worry about formally getting divorce.
              </p>
              <br />
              <p>
                Also, without finalising your agreement and legally untying
                yourself from your former partner, you may still be liable for a
                joint mortgage, debt or bills after you have separated if your
                former partner does not uphold the agreement. This could result
                in you losing thousands of dollars repaying these liabilities,
                you having to spend thousands of dollars on legal fees to sort
                it out and your credit score being negatively affected.
              </p>
              <br />
              <p>By doing Consent Orders, you have the benefit of:</p>
              <br />
              <ul className="list-disc xl:ml-10 ml-5">
                <li>The obligations under the orders legally binding;</li>
                <li>
                  The orders are legally enforced - if your ex-partner goes
                  against anything in the order, you can enforce them;
                </li>
                <li>
                  Subject to exceptions, the orders are difficult to have
                  changed or overturned. This gives you a high level of
                  certainty.
                </li>
                <li>Nominal stamp duty is payable on transfers of property</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <Contact />
      </section>

      <section className="section-white">
        <div className="custom-container">
          <h2 className="font-bold text-center uppercase mb-4">
            <span>What Does The Court Look For?</span>
            <br />
          </h2>
          <p className="w-full text-center">
            This depends on whether you have made consent orders about property
            settlement or children’s arrangements.
            <br />
            <br />
            The court will look at your proposed property split and determine if
            it is ‘just and equitable’. How this will be determined is based on
            what’s known as a ‘four stage process’. This process involves:
          </p>
        </div>
      </section>

      <section className="section-grey">
        <div className="custom-container">
          <div className="flex flex-col">
            <Card title="FOR PROPERTY CONSENT ORDERS">
              <ol className="list-decimal xl:ml-10 ml-5">
                <li>
                  <p className="font-bold">Determining the net asset pool</p>
                  <p>
                    This step includes tallying up all of the assets of the
                    relationship and subtracting the total amount of liabilities
                    of the relationship.
                  </p>
                  <br />
                </li>
                <li>
                  <p className="font-bold">
                    Determining each party’s contributions
                  </p>
                  <p>
                    This step includes looking at each person’s contributions to
                    the relationship. These contributions include:
                  </p>
                  <ul className="list-disc xl:ml-10 ml-5">
                    <li>
                      Initial Contributions- contributions at the commencement
                      of cohabitation;
                    </li>
                    <li>Contributions during the relationship; and</li>
                    <li>Contributions since the date of separation.</li>
                  </ul>
                  <p>
                    There are three different types of contributions that will
                    be considered by the court. These are:
                  </p>
                  <ul className="list-disc xl:ml-10 ml-5">
                    <li>
                      Financial Contributions- Financial contributions can
                      include lump sum payments, for example paying the deposit
                      on a house, and ongoing payments such as home loan
                      repayments, utility bills and groceries
                    </li>
                    <li>
                      Home Maker and Parent Contributions – this means raising
                      children under 18 and doing various homemaker tasks such
                      as cooking, cleaning, washing and gardening;
                    </li>
                    <li>
                      Non-Financial Contributions – this means contributions
                      that are neither financial nor home maker/ parenting
                      contributions- typically includes things like undertaking
                      renovations, improvements, or working in a family business
                      for no pay.
                    </li>
                  </ul>
                  <br />
                </li>
                <li>
                  <p className="font-bold">
                    Determining each person’s future needs.
                  </p>
                  <p>
                    This step looks at what each party’s likely future needs
                    are. This can include factors such as:
                  </p>
                  <ul className="list-disc xl:ml-10 ml-5">
                    <li>a person’s age and health; </li>
                    <li>
                      a person’s income, earning capacity and financial
                      resources
                    </li>
                    <li>care of children under 18</li>
                    <li>whether a person is receiving child support</li>
                  </ul>
                  <p>
                    If one party has greater future needs than the other, they
                    will get a percentage adjustment in their favour. For
                    example, a percentage division of net assets based on the
                    parties’ contributions might be 50/50. However, the wife may
                    then get a 10% adjustment in her favour because she has
                    greater future needs than the husband. This would result in
                    a final percentage division of net assets of 60/40 in favour
                    of the wife.
                  </p>
                  <br />
                </li>
                <li>
                  <p className="font-bold">
                    The fourth and final step is to make sure that the proposed
                    percentage division of net assets is just and equitable.
                  </p>
                  <p>
                    This is because the Family Court has a duty to make property
                    and financial orders that are just and equitable. Get in
                    touch with our team of family lawyers to find out what a
                    just and equitable split might look like in your
                    circumstances.
                  </p>
                </li>
              </ol>
            </Card>

            <Card title="What Is A Super Split?" hasBottomMargin={true}>
              <p>
                Superannuation splitting is the legal term for dividing
                superannuation between super accounts after a relationship
                breakdown.
              </p>
              <br />
              <p>
                For example, Matt has $100,000 in his super account. His Wife,
                Ann has $50,000. If Matt and Ann decide to do a super split,
                funds are transferred from Matt’s super fund to Ann’s super
                fund. For example Matt can transfer $20,000 to Ann’s account. If
                a super split occurs, Matt’s super fund will directly transfer
                the $20,000 to Ann’s fund.
              </p>
              <br />
              <p>
                The transfer is between super funds. Money is not directly paid
                to Ann. After the transfer occurs, normal super rules apply as
                to when you can access it (eg at retirement age or financial
                hardship etc).
              </p>
              <br />
              <p>Married couples can do a super split all around Australia.</p>
              <br />
              <p>
                In every state in Australia, except WA, de facto couples are
                able to divide their super.{" "}
              </p>
              <br />
              <p>
                In Western Australia, de facto couples cannot divide their super
                (however super is taken into account as a financial resource)
                when deciding what is a fair division of the assets. This means
                if for example, if someone has more super, they may get less of
                the other assets.{" "}
              </p>
              <br />
              <p>
                Super splits are included in property consent orders. The super
                fund will need to have notice of the split before the consent
                orders are filed with the court.{" "}
              </p>
            </Card>

            <Card title="For Children’s Arrangements" hasBottomMargin={true}>
              <p>
                The Family Court’s paramount consideration when determining
                parenting arrangements for children under 18 is the best
                interests of the child.
              </p>
              <br />
              <p>
                When determining this, the court will look at two primary
                considerations, and a long list of additional considerations.
              </p>
              <br />
              <p className="font-bold">Primary Considerations:</p>
              <ul className="list-disc xl:ml-10 ml-5">
                <li>
                  The benefit to the child of having a meaningful relationship
                  with both parents; and
                </li>
                <li>
                  The need to protect the child from physical or psychological
                  harm from being subjected or exposed to child abuse, neglect
                  or family violence.
                </li>
              </ul>
              <br />
              <p className="font-bold">Additional Considerations:</p>
              <p>
                Additional considerations include things like: a child’s views,
                the extent to which a parent has taken the opportunity to spend
                time with the child, the extent to which a parent has fulfilled
                their obligations to maintain the child, and the capacity of a
                parent to provide for the child’s emotional and intellectual
                needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full h-80 overflow-hidden relative">
        <Image
          src={WhatCanIIncludeInMyConsentOrders}
          quality={75}
          layout="fill"
          objectFit="cover"
          placeholder="blurred"
          alt="Consent orders family law"
        />
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Card title="WHAT CAN I INCLUDE IN MY CONSENT ORDERS?">
              <p>
                In your consent orders, you can include orders about your
                property split and parenting arrangements.
              </p>
              <br />
            </Card>

            <Card title="WHAT CAN’T I INCLUDE IN MY CONSENT ORDERS?">
              <p>
                Your consent orders cannot include orders about child support.
                This must be organised through the Department of Human Services,
                or through a different kind of agreement called a child support
                agreement.
              </p>
              <br />
              <p>
                Get in touch with our family lawyers for more information about
                child support agreements.
              </p>
            </Card>

            <Card title="TIME FRAME">
              <p>
                To draft your Consent Orders, it will usually take us about 4 to
                6 weeks to have finalised documents (i.e documents which you
                approve).
              </p>
              <br />
              <p>
                If you have a superannuation split, the draft documents will
                also need approval by the super fund.
              </p>
              <br />
              <p>
                Once the documents have been approved, they will be lodged with
                the Family Court.
              </p>
              <br />
              <p>
                Usually it takes 6 to 7 weeks to get a Consent Orders hearing
                listed by the Family Court. You will not need to attend this
                hearing.
              </p>
              <br />
              <p>
                All together, the process can take approximately 3 to 5 months.
                This does not include the time after the orders are made in
                terms of the action obligations under the orders i.e.
                refinancing and transferring the family home, closing joint
                accounts, transferring cars etc.
              </p>
              <br />
            </Card>

            <Card title="WHAT HAPPENS IF MY PARTNER AND I CANNOT COME TO AN AGREEMENT?">
              <p>
                If you cannot come to a financial agreement with your partner,
                the best option is usually to go through dispute resolution. The
                main dispute resolution methods are negotiation and mediation,
                with arbitration and counselling being less commonly used. These
                methods can be helpful in assisting you reach an agreement. In
                fact, it is required that you attempt dispute resolution before
                you go to court, unless you are exempt because of exceptional
                circumstances such as fraud, urgency or family violence.
              </p>
              <br />
              <p>
                It is up to you and your partner which form of dispute
                resolution you wish to utilise. If dispute resolution is
                successful and you come to an agreement, you can either convert
                this into an informal agreement, consent orders or a binding
                financial agreement.
              </p>
            </Card>

            <Card title="WHAT HAPPENS IF WE ATTEMPT DISPUTE RESOLUTION AND STILL CANNOT COME TO AN AGREEMENT?">
              <p>
                If all other options have been exhausted and an agreement still
                can’t be reached, then the last resort is to take your case to
                the Family Court of Western Australia and to let the court to
                decide your property division for you. It is possible to
                represent yourself in court, but legal advice is certainly
                recommended.
              </p>
            </Card>

            <Card
              title="WHEN SHOULD I GET LEGAL ADVICE?"
              hasBottomMargin={true}
              image={
                <Image
                  src={ConsentOrdersHero}
                  quality={75}
                  placeholder="blurred"
                  layout="fill"
                  objectFit="cover"
                  alt="Get help with consent orders in Perth WA?"
                />
              }
              direction="rtl"
            >
              <p className="w-full text-left">
                We highly recommend getting legal advice from our team of
                experienced family lawyers as early as possible. This is
                important for the following reasons:
              </p>
              <br />
              <ol className="list-disc xl:ml-10 ml-5 w-full text-left">
                <li>
                  We will help you understand your legal rights and entitlements
                  in regard to both your children and property matters. This
                  will arm you with important information to aid you in coming
                  to an agreement with your partner.
                </li>
                <li>
                  We will help you understand the next steps involved in the
                  process, including the various avenues in and outside of the
                  Family Court.
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <Featured />
      </section>
      <section className="section-white">
        {/* <Accordion faqFor="consent-orders" /> */}
      </section>

      <section className="section-grey">
        <FreeDiscussion />
      </section>
    </BaseLayout>
  );
};

export default ConsentOrderService;
