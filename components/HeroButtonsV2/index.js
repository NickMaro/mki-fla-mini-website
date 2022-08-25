import React from "react";

import FlipButton from "components/FlipButton";
import NavLink from "components/NavLink";

const HeroButtonsV2 = ({
  flip = true,
  text = "Let Us Call You",
  to = "/",
  type = "modal",
  classes=""
}) => {
  return (
    <div className={`flex flex-col xl:flex-row items-center md:items-start ${classes}`}>
      <FlipButton
        className="w-7/12 md:w-5/12 xl:w-3/12 h-12 mb-4 xl:mb-0"
        flip={flip}
      />
      <div className="w-7/12 md:w-5/12 xl:w-3/12 xl:px-4 h-12">
        <NavLink
          text={text}
          to={to}
          type={type}
          className="btn block w-full btn-outline-primary"
          formButtonName="homepage-hero"
        />
      </div>
    </div>
  );
};

export default HeroButtonsV2;
