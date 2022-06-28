import React from "react";

import BaseLayout from "layouts/BaseLayout";
import Contact from "components/Contact";
import FreeDiscussion from "components/FreeDiscussion";
import Featured from "components/Featured";
import Card from "components/Card";
import Hero from "components/Hero";
import HeroButtonsV2 from "components/HeroButtonsV2";

import heroBgImage from "../public/assets/separation/hero.jpeg";
import HaveComeToAnAgreement from "../public/assets/separation/have-come-to-an-agreement-about-our-children.jpeg";
import HowAboutChildren from "../public/assets/separation/how-about-childrens-arrangements.jpeg";
import PageBreaker from "../public/assets/separation/page-breaker.jpg";
import WhenIsTheBestTime from "../public/assets/separation/when-is-the-best-time-to-see-a-separation-lawyer.jpeg";
import Image from "next/image";

const SeparationService = () => {
  return (
    <BaseLayout>
      <Hero
        id="services-property-hero"
        bgImages={heroBgImage}
        altImageText="Separation Lawyers Perth"
      >
        <div className="flex flex-col mb-12">
          <h1 className="text-5xl xl:text-6xl font-extrabold text-center md:text-left">
            <span className="inline-block bg-accent p-2 my-2 text-white">
              Separation
            </span>
            <span className="block">
              <span className="inline-block bg-accent p-2 my-2 text-white">
                Lawyers Perth
              </span>
            </span>
          </h1>
        </div>
        <div className="w-1/2 mb-12 font-medium"></div>
        <HeroButtonsV2 />
      </Hero>

      <section className="section-grey">
        <Featured />
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <h2 className="font-bold text-center mb-6">
              <span>WHAT DOES IT MEAN TO BE </span>
              <span className="text-white bg-accent px-2 mr-2">SEPARATED?</span>
              <br />
            </h2>
            <p className="text-center mb-12">
              There are two main types of separation- physical separation and
              separation under the same roof.
            </p>

            <Card hasBottomMargin={true} title="PHYSICAL SEPARATION">
              <p>
                This type of separation is more simple and straightforward. If
                you and your ex-partner have split, and one of you have moved
                into different accommodation and is living separately, this is
                usually quite clearly deemed as separation.
              </p>
              <br />
              <p className="font-bold">Case study</p>
              <br />
              <p>
                Jess and Jill have been married for 2 years. For the past 6
                months, the couple have been fighting a lot. Two months ago,
                Jess announced to Jill that she is moving out, packed her bags
                and moved into her mother’s house. Since moving out, the couple
                have not spoken or seen each other. It is likely that they will
                been deemed as separated.
              </p>
            </Card>

            <Card
              hasBottomMargin={true}
              title="SEPARATION UNDER THE SAME ROOF"
            >
              <p>
                This type of separation is a little bit trickier. If for
                whatever reason you split up with your ex-partner but they
                continue to live under the same roof, this can still be deemed
                as separation. What separation under the same roof looks like is
                a bit different for every couple, but it essentially means that
                even though you live in the same home, you lead separate lives.
                What this could look like includes things like eating meals
                separately, socialising separately, sleeping in different beds,
                not sharing household chores and keeping finances separate.
              </p>
              <br />
              <p className="font-bold">Case study</p>
              <br />
              <p>
                Abby and Andrew have been married for 7 years. In recent times,
                Abby has been unhappy in the marriage and asked Andrew if he
                could move out. Andrew told Abby that he cannot afford to at the
                moment, because he is currently out of work. For the past month,
                Andrew has been sleeping in the spare room, doing his own
                cooking, buying his own household items from his own account and
                not spending time or socialising with Abby. This is very
                different to previously in their marriage. It is likely that
                Abby and Andrew have separated, even though they continue to
                live in the same house.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full h-80 overflow-hidden relative">
        <Image
          src={PageBreaker}
          quality={100}
          placeholder="blurred"
          alt="Separation Lawyers Near Me"
        />
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Card
              hasBottomMargin={true}
              title="ARE THERE ANY IMPLICATION IN ME BEING PHYSICALLY SEPARATED OR SEPARATED UNDER THE SAME ROOF?"
            >
              <p>
                The only difference comes when you are looking to get divorced.
                You need to be separated for a minimum of 12 months before you
                apply for a divorce. If you have been separated under the same
                roof, you will need to provide an affidavit for evidence to
                support this. A separation lawyer can help you get more
                information about this and help you to prepare it.
              </p>
              <br />
            </Card>

            <Card
              hasBottomMargin={true}
              title="DOES IT MATTER HOW LONG I’VE BEEN SEPARATED FOR BEFORE I START MAKING ARRANGEMENTS WITH MY ASSETS?
              "
            >
              <p>
                No, you can start making arrangements about your property
                division from the date you separate.
              </p>
              <br />
            </Card>

            <Card
              hasBottomMargin={true}
              title="HOW ABOUT MY CHILDREN’S ARRANGEMENTS?"
              image={
                <Image
                  src={HowAboutChildren}
                  placeholder="blurred"
                  layout="fill"
                  objectFit="cover"
                  alt="Separation Lawyers can help you with your matter"
                />
              }
            >
              <p>
                No, you can start making arrangements for co-parenting from the
                date you separate.
              </p>
              <br />
            </Card>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <Contact />
      </section>

      <section className="section-white">
        <div className="custom-container">
          <div className="flex flex-col">
            <Card
              hasBottomMargin={true}
              title="I’M INTERESTED IN GETTING A DIVORCE. DO I NEED TO BE SEPARATED FOR A CERTAIN AMOUNT OF TIME BEFORE APPLYING FOR DIVORCE?"
            >
              <p>
                This is the part that matters about how long you have been
                separated. In order to apply for divorce, you and your
                ex-partner must be separated for a minimum of 12 months.
              </p>
              <br />
            </Card>

            <Card
              hasBottomMargin={true}
              title="IS THERE A TIME LIMIT IN WHICH I NEED TO HAVE FULLY SEPARATED MY ASSETS FROM MY EX-PARTNER?
              "
            >
              <p>
                Married couples- if you were married, there is a time limit of
                12 months from the date of divorce in which to apply for
                property and financial orders. De Facto couples- if you and your
                ex- partner were de facto, you have two years from the date of
                separation in which to apply for property and financial orders.
              </p>
              <br />
            </Card>

            <Card
              hasBottomMargin={true}
              title="WHEN IS THE BEST TIME TO SEE A SEPARATION LAWYER?
              "
              image={
                <Image
                  src={WhenIsTheBestTime}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blurred"
                  alt="Get help from a top separation lawyer"
                />
              }
              direction="rtl"
            >
              <p>
                A separation lawyer can be extremely helpful through the whole
                process of splitting up. At an initial stage, one of our lawyers
                will be able to advise you on questions such as:
              </p>
              <br />
              <ol className="list-decimal ml-5">
                <li className="xl:text-lg">
                  How do I divide my superannuation interests?
                </li>
                <li className="xl:text-lg">
                  Who gets to live in the family home after separation?
                </li>
                <li className="xl:text-lg">
                  If my child gets sick, who makes the decisions regarding
                  medical care?
                </li>
                <li className="xl:text-lg">
                  What do I have to do if I want to take my child overseas?
                </li>
                <li className="xl:text-lg">
                  What are my options when it comes to child support?{" "}
                </li>
                <li className="xl:text-lg">
                  How much time should my kids be spending with me and my
                  partner?
                </li>
                <li className="xl:text-lg">
                  Do we need to sell the family home or can one of us buy the
                  other out?
                </li>
                <li className="xl:text-lg">Who pays the mortgage? </li>
                <li className="xl:text-lg">
                  If my partner and I cannot reach an agreement, how do we
                  resolve our family law issues?
                </li>
                <li className="xl:text-lg">
                  How much am I entitled to from our asset pool?{" "}
                </li>
              </ol>
            </Card>

            <Card
              hasBottomMargin={true}
              title="ME AND THE OTHER PARTY HAVE SEPARATED AND HAVE COME TO AN AGREEMENT ABOUT THE ASSETS WE OWN TOGETHER. WHAT NOW?
              "
            >
              <p>
                If you reach an agreement with your ex-partner, a family lawyer
                can help you prepare that agreement so it is enforceable and
                also make sure that it covers all the issues that you and your
                ex-partner may not have considered, such as :
              </p>
              <br />

              <ul className="list-disc xl:ml-10 xs:ml-5">
                <li className="xl:text-lg">
                  How the funds in joint accounts is to be divided
                </li>
                <li className="xl:text-lg">
                  If one person is buying the other person out, what happens if
                  they cannot obtain finance approval?
                </li>
                <li className="xl:text-lg">
                  If there are personal loans and credit card debts, who is
                  responsible for the repayments?
                </li>
                <li className="xl:text-lg">
                  How to effectively deal with business interests, such as
                  organising a transfer of shares, organising the resignation by
                  one person as director and employee, whether a family trust
                  needs to be restructured, and whether a fair market value has
                  been attributed to the business.
                </li>
              </ul>

              <br />
              <p>
                Once everything has been thoroughly covered in your agreement,
                our team of specialist separation lawyers can help you complete
                the legal paperwork and drafter the necessary terms to make sure
                the agreement is accurate and protects your interests.
              </p>
            </Card>

            <Card
              hasBottomMargin={true}
              title="ME AND MY EX-PARTNER HAVE SEPARATED AND HAVE COME TO AN AGREEMENT ABOUT OUR CHILDREN, WHAT NOW?
              "
              image={
                <Image
                  src={HaveComeToAnAgreement}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blurred"
                  alt="Speak to a separation lawyer in Perth, WA today"
                />
              }
              direction="rtl"
            >
              <p>
                When it comes to parenting arrangements, a separation lawyer can
                help you consider
              </p>
              <br />

              <ul className="list-disc ml-5">
                <li className="xl:text-lg">Who the child lives with</li>
                <li className="xl:text-lg">
                  Who makes the decisions in relation to the children’s
                  schooling, health and medication
                </li>
                <li className="xl:text-lg">
                  Who the children live with and who they spend holidays with
                </li>
                <li className="xl:text-lg">Travelling arrangements</li>
              </ul>

              <br />
              <p>
                Our team of specialist lawyers can then help you to make this
                into an enforceable agreement, providing the whole family with a
                sense of certainty moving forward.{" "}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-grey">
        <FreeDiscussion />
      </section>
    </BaseLayout>
  );
};

export default SeparationService;
