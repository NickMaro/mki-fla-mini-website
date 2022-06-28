import React from "react";
import PropTypes from "prop-types";
import Collapse from "rc-collapse";
import { FaChevronRight } from "react-icons/fa";

const Accordion = ({ faqFor, openCount, openIndex }) => {
  const { Panel } = Collapse;


  const questions = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.for === faqFor
  );

  questions.sort((a, b) =>
    a.node.frontmatter.order > b.node.frontmatter.order
      ? 1
      : b.node.frontmatter.order > a.node.frontmatter.order
      ? -1
      : 0
  );

  const _openIndex =
    openIndex.length > 0 ? openIndex.map(item => `question-${item}`) : [];

  const defaultActiveKey = [];
  for (let i = 0; i < openCount; i++) {
    defaultActiveKey.push(`question-${i}`);
  }

  return (
    <div className="custom-container">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold text-center mb-6 uppercase">
          <span className="block md:inline-block mb-4 md:mb-0 mr-2">
            Frequently Asked
          </span>
          <span className="bg-accent text-white px-3 py-1">Questions</span>
        </h2>
        <p>Our family lawyers are here to help you</p>
      </div>
      <div className="-mx-4" id="faq-wrapper">
        <div className="px-4">
          <Collapse
            accordion={false}
            defaultActiveKey={[...defaultActiveKey, ..._openIndex]}
            expandIcon={props => <FaChevronRight />}
            className="w-full lg:w-10/12 mx-auto custom-accordion"
          >
            {questions.map((question, i) => (
              <Panel
                key={`question-${i}`}
                header={question.node.frontmatter.title}
                headerClass="focus:outline-none"
                className="mb-12 shadow-md rounded-md bg-white overflow-hidden"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: question.node.html }}
                />
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  faqFor: PropTypes.string,
};

Accordion.defaultProps = {
  openIndex: [],
  openCount: [],
};

export default Accordion;
