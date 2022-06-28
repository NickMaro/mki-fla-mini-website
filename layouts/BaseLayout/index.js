import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Footer from "components/Footer";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "rc-collapse/assets/index.css";
// import "@styles/_tailwind.css";

const DefaultLayout = ({ children }) => {
  // const [showPopup, setShowPopup] = useState(false);
  const [extCount, setExtCount] = useState(0);

  // const handlePopupClose = () => setShowPopup(false);
  // const handlePopupShow = () => setShowPopup(true);

  /**
   *
   * @param {MouseEvent} e
   */
  const isExiting = (e) => {
    if (e.clientY < 0 && extCount === 0) {
      // handlePopupShow();
      setExtCount(1);
    }
  };

  return (
    <div
      className="layout-wrapper"
      id="layoutWrapper"
      onMouseLeave={isExiting}
      role="main"
    >
      <Header />
      <main className="z-40">{children}</main>
      <Footer />
    </div>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hasProgressBar: PropTypes.bool,
  isPreFooterVisible: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  hasProgressBar: false,
  isPreFooterVisible: true,
};

export default DefaultLayout;
