import React, { useEffect, useState } from "react";
import classNames from "classnames";

// import "./styles.css";
import NavLink from "components/NavLink";

const FlipButton = ({ className }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active => !active);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    site: {
      siteMetadata: {
        phoneNumber: "1300 967 552",
        phoneNumberFormat: "1300 967 552",
      },
    },
  };
  const { siteMetadata } = data.site;

  const phone = {
    number: siteMetadata.phoneNumber,
    format: siteMetadata.phoneNumberFormat,
  };

  const buttons = [
    {
      linkText: phone.format,
      phoneNumber: phone.number,
      linkTo: "/",
      type: "tel",
    },
    {
      linkText: "Free Discussion",
      phoneNumber: "",
      linkTo: "/",
      type: "modal",
    },
  ];

  return (
    <div
      className={classNames(
        `btn-flip relative ${!!active ? "active" : ""}`,
        className
      )}
    >
      {buttons.map((button, i) => {
        const className = i === 0 ? "btn-front" : "btn-back";
        return (
          <div key={`button${i}`} className="absolute flex w-full">
            <NavLink
              text={button.linkText}
              to={button.linkTo}
              phoneNumber={button.phoneNumber}
              type={button.type}
              formButtonName="homepage-hero"
              className={`btn block w-full btn-primary ${className}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FlipButton;
