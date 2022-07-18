import React from "react";
import PropTypes from "prop-types";
import FreeDiscussionButton from "components/FreeDiscussionButton";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import ServicesMenu from "../Header/ServicesMenu";

const NavLink = ({
  to,
  className,
  phoneNumber,
  formButtonName = "",
  text,
  type = "",
  hasSubNav = false,
}) => {
  const router = useRouter();

  switch (type) {
    case "services":
      return (
        <div
          className={classNames(
            "group relative",
            {
              "nav-link nav-active-link text-white bg-accent":
                router.pathname === to,
              "nav-link text-black hover:text-white hover:bg-accent":
                router.pathname !== to,
              "hoverable text-black": hasSubNav,
            },
            className
          )}
        >
          {text}
          <ServicesMenu />
        </div>
      );

    case "external":
      return (
        <a href={to} className={className} target="_blank" rel="noreferrer">
          {text}
        </a>
      );
    case "modal":
      return (
        <FreeDiscussionButton
          className={className}
          name={formButtonName}
          text={text}
        />
      );
    case "tel":
      return (
        <a href={`tel:${phoneNumber}`} className={className}>
          {text}
        </a>
      );
    default:
      return (
        <Link href={to}>
          <p
            className={classNames(
              {
                "nav-link nav-active-link text-white bg-accent":
                  router.pathname === to,
                "nav-link text-black hover:text-white hover:bg-accent":
                  router.pathname !== to,
              },
              className
            )}
          >
            {text}
          </p>
        </Link>
      );
  }
};

NavLink.defaultProps = {
  className: "",
  phoneNumber: "",
};

NavLink.propTypes = {
  type: PropTypes.string.isRequired,
  formButtonName: PropTypes.string.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default NavLink;
