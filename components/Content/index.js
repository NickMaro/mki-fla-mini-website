import React from "react";
import ProperLinkModal from "components/NavLink";
import classNames from "classnames";

const Content = ({
  children,
  title,
  titlePosition = "center",
  image,
  className,
}) => {
  return (
    <div className={classNames(className)}>
      <div className="flex flex-col h-full">
        <h2
          className={`${
            !!title ? "mb-10" : ""
          } font-bold text-center lg:text-${titlePosition}`}
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-8/12">{children}</div>
        <div className="w-full lg:w-4/12 flex flex-col gap-4">
          <div className="w-full h-full relative">{image}</div>
          <div className="w-full">
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
    </div>
  );
};

export default Content;
