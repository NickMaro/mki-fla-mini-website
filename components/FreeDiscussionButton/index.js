import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import FreeDiscussionForm from "../FreeDiscussionForm";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "1050",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "2rem",
    width: "100%",
    maxWidth: "500px",
    padding: "0px",
    transform: "translate(-50%, -50%)",
  },
};

const getPhoneInfo = () => {
  const phoneNumber = document.querySelector("#callPhoneNumber")?.getAttribute("href");
  const phoneNumberText = document.querySelector("#callPhoneNumberText")?.innerHTML;

  return {
    number: phoneNumber,
    text: phoneNumberText
  }
}

const FreeDiscussionButton = ({ text, className, name }) => {
  const [show, setShow] = useState(false);
  const [phoneInfo, setPhoneInfo] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhoneInfo(getPhoneInfo())
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Modal.setAppElement("#___gatsby");

  

  return (
    <>
      <button onClick={handleShow} className={className}>
        {text}
      </button>
      <Modal
        closeTimeoutMS={200}
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
        preventScroll={true}
        contentLabel="Free Discussion with MKI Legal"
      >
        <div className="bg-gray-100 p-4 relative">
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mx-auto mb-2 leading-normal">
              <span className="bg-accent text-white px-4 uppercase">Free Discussion</span>
            </h2>
            {phoneInfo &&
              <h2 className="text-2xl font-extrabold mb-2">Call Us Now -
                <a href={`${phoneInfo.number}`} className="hover:underline">
                  {phoneInfo.text}
                </a>
              </h2>
            }

            <div className="flex items-center w-full">
              <div className="mx-6 h-px flex-grow border border-gray-200"></div>
              <div>or</div>
              <div className="mx-6 h-px flex-grow border border-gray-200"></div>
            </div>
            <div className="w-full text-center">Leave your details and we will call you back.</div>
          </div>

          <button
            onClick={handleClose}
            type="button"
            className="close absolute float-none top-0 right-0 m-0 p-4 cursor-pointer bg-transparent border-none text-2xl font-semibold opacity-50 hover:opacity-75 appearance-none"
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="relative bg-gray-100 p-4 flex-auto">
          <FreeDiscussionForm closeModal={handleClose} name={name} />
        </div>
      </Modal>
    </>
  );
};

FreeDiscussionButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FreeDiscussionButton.defaultProps = {
  className: "",
};

export default FreeDiscussionButton;
