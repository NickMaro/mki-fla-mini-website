import React from "react";
import Card from "components/Card";
import Image from "next/image";
import DottedLine from "../../public/assets/images/curved-dotted-line.png";

const LegalAdviceCards = () => {
  return (
    <>
      <section className="section-white bg-accent-400 py-16">
        <div className="custom-container">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-center">
              <span>
                5 BENEFITS OF GETTING{" "}
                <span className="bg-accent text-white">LEGAL ADVICE</span> EARLY
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-gap bg-accent-400 py-16">
        <div className="custom-container">
          <div className="flex flex-col">
            <div className="flex w-full mb-6">
              <div className="mr-6 pt-6">
                <h1 className="text-5xl font-bold text-accent">1</h1>
              </div>
              <Card className="w-full xl:w-7/12 z-10 bg-white">
                <p>
                  Seeing a lawyer doesn’t mean you’re about to start World War
                  III. Getting legal advice early can help you make informed
                  decisions about your separation.
                </p>
                <br />
                <p>
                  Getting legal advice can give you clarity about the law and
                  the legal process, and improve your chances of avoiding a
                  stressful and expensive Family Court battle.
                </p>
              </Card>
              <div className="hidden xl:flex items-center mt-40 relative">
                <div className="transform scale-x-150 -scale-y-150">
                  <Image
                    src={DottedLine}
                    alt="dotted-line"
                    loading="lazy"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex xl:w-7/12 w-full mb-6">
              <div className="mr-6 pt-6">
                <h1 className="text-5xl font-bold text-accent">2</h1>
              </div>
              <Card className="bg-white">
                <p>
                  You may not have been through a separation before. You may not
                  know where you stand, where to start or what to do. It is
                  normal to feel overwhelmed by the situation.
                </p>
                <br />
                <p>
                  Speaking to an experienced family lawyer is often the first
                  step to get clarity about your rights, your options, and what
                  to do next.
                </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full mb-6">
              <div className="mr-6 pt-6">
                <h1 className="text-5xl font-bold text-accent">3</h1>
              </div>
              <Card className="w-full xl:w-7/12 z-10 bg-white">
                <p>
                  If you and your partner are amicable, then an experienced
                  family lawyer can advise you about your options for making an
                  agreement.
                </p>
                <br />
                <p>
                  If you and your partner are not so amicable, then an
                  experienced family lawyer can advise you about the various
                  options available to you for resolving the matter.
                </p>
              </Card>
              <div className="hidden xl:block">
                <div className="transform scale-150 -translate-y-14">
                  <Image
                    src={DottedLine}
                    alt=""
                    loading="lazy"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex w-full justify-end mb-6">
              <div className="hidden xl:block">
                <div className="transform -scale-x-150 scale-y-150 -translate-y-14">
                  <Image
                    src={DottedLine}
                    alt=""
                    loading="lazy"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="mr-6 pt-6">
                <h1 className="text-5xl font-bold text-accent">4</h1>
              </div>
              <Card className="w-full xl:w-7/12 z-10 bg-white">
                <p>
                  A family lawyer can also help prepare you if you do need to go
                  to court as a last resort.
                </p>
                <br />
                <p>
                  Sitting down with a lawyer for an initial meeting will give
                  you important information such as:
                </p>
                <br />
                <p>
                  <ul className="list-disc pl-6">
                    <li className="mb-4">
                      What a fair division of the assets of the relationship
                      looks like, how much you should get, and how much your
                      partner should get.
                    </li>
                    <li className="mb-4">
                      How parenting arrangements for children under 18 are
                      determined, and how much time you and your partner should
                      be spending with your children.
                    </li>
                    <li className="mb-4">
                      The process for making an agreement with your partner
                      legally binding.
                      <br />
                    </li>
                  </ul>
                </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full">
              <div className="mr-6 pt-6">
                <h1 className="text-5xl font-bold text-accent">5</h1>
              </div>
              <Card className="w-full xl:w-7/12 z-10 bg-white">
                <p>
                  Sitting down with a lawyer can also help answer questions you
                  might have, such as:
                </p>
                <br />
                <p>
                  <ul className="list-disc pl-6">
                    <li className="mb-4">
                      How do I divide superannuation interests?
                    </li>
                    <li className="mb-4">
                      Who gets to live in the family home after separation?
                    </li>
                    <li className="mb-4">
                      If my child gets sick, who makes the decisions regarding
                      medical care?
                    </li>
                    <li className="mb-4">
                      What do I have to do if I want to take my child overseas?
                    </li>
                    <li className="mb-4">
                      What are my options when it comes to child support?
                    </li>
                    <li className="mb-4">
                      How much time should my kids be spending with me and my
                      partner?
                    </li>
                    <li className="mb-4">
                      Do we need to sell the family home or can one of us buy
                      the other out?
                    </li>
                    <li className="mb-4">Who pays the mortgage?</li>
                    <li className="mb-4">
                      If my partner and I cannot reach an agreement, how do we
                      resolve our family law issues?
                    </li>
                  </ul>
                </p>
              </Card>
              <div className="hidden xl:block">
                <div className="transform scale-150 -translate-y-14">
                  <Image
                    src={DottedLine}
                    alt=""
                    loading="lazy"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalAdviceCards;
