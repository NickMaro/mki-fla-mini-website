import React, { useRef, useState } from "react";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Recaptcha from "react-google-recaptcha";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const RECAPTCHA_KEY = "6LcrbwohAAAAAJtot0nuBfDwPcgk-_kBPjClAYZW";

const FreeDiscussionForm = ({ isHidden, closeModal, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const freeDiscussionForm = useRef(null);
  const buttonName = `free-discussion-${name}`;
  const recaptchaRef = useRef(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      formUrl: window.location.href,
    };
    const recaptchaValue = recaptchaRef.current.getValue();
    // post data using fetch to submit data properly
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        // "g-recaptcha-response": recaptchaValue,
        ...payload,
        "form-name": "direct-free-discussion-form",
      }),
    })
      .then(() => {
        swal({
          title: "Thank You!",
          text: "We Have Received Your Enquiry",
          icon: "success",
          button: "Close",
        }).then((willCloseModal) => {
          if (willCloseModal) {
            closeModal();
          } else {
            freeDiscussionForm.current.reset();
          }
        });
      })
      .catch((error) =>
        swal({
          title: "Oops!",
          text: "Something went wrong.",
          icon: "error",
        })
      );
  };

  return (
    <form
      className={classNames("contact-form", {
        hidden: isHidden,
      })}
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      ref={freeDiscussionForm}
      name="direct-free-discussion-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        name="form-name" // this is the test for netfliy form
        type="hidden"
        value="direct-free-discussion-form"
        // {...register("form-name")}
      />
      <div className="hidden">
        <input name="bot-field" />
      </div>
      {/* <input type="hidden" {...register("formUrl")} value="" /> */}
      {/* Client First Name */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="First Name"
          {...register("clientFirstName", { required: true })}
        />

        {errors.clientFirstName && (
          <span className="text-red-600">Required</span>
        )}
      </div>

      {/* Client Surname */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="Surname"
          {...register("clientSurname", { required: true })}
        />

        {errors.clientSurname && <span className="text-red-600">Required</span>}
      </div>

      {/* Client Phone */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input mr-2"
          placeholder="Phone"
          {...register("clientPhone", { required: true })}
        />

        {errors.clientPhone && <span className="text-red-600">Required</span>}
      </div>

      {/* Client Email */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="e.g. john@hotmail.com"
          {...register("clientEmail", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        {errors.clientEmail && errors.clientEmail.type === "required" && (
          <span className="text-red-600">Required</span>
        )}

        {errors.clientEmail && errors.clientEmail.type === "pattern" && (
          <span className="text-red-600">Looks like this email is invalid</span>
        )}
      </div>

      {/* Client Message */}
      <div className="form-group mb-3 p-0 pos-rel">
        <textarea
          className="form-input"
          id="clientMessage"
          placeholder="How We Can Help You"
          rows="5"
          {...register("clientMessage", { required: true, minLength: 50 })}
        />

        {errors.clientMessage && errors.clientMessage.type === "required" && (
          <span className="text-red-600">Required</span>
        )}
        {errors.clientMessage && errors.clientMessage.type === "minLength" && (
          <span className="mt-2 text-red-600">
            You must provide at least 50 characters for the details
          </span>
        )}
      </div>
      <div className="w-full mb-2">
        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          id="recaptcha-google"
          onChange={() => setButtonDisabled(false)}
        />
      </div>
      <button
        className={classNames("btn btn-primary w-full", buttonName)}
        disabled={buttonDisabled}
      >
        Send
      </button>
    </form>
  );
};

FreeDiscussionForm.propTypes = {
  isHidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

FreeDiscussionForm.defaultProps = {
  isHidden: false,
  closeModal: false,
};

export default FreeDiscussionForm;
