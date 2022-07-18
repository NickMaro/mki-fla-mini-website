import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";


const ProperLink = ({
  to,
  children,
  className,
  activeClassName,
  external,
  attrs,
}) => {
  if (!!external) {
    return (
      <a href={to} className={className} {...attrs}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={to}
      className={className}
      activeClassName={activeClassName}
      {...attrs}
    >
      {children}
    </Link>
  );
};

ProperLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  external: PropTypes.bool,
  attrs: PropTypes.object,
};

export default ProperLink;
