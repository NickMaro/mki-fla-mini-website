import React, { useRef, useState } from "react";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Recaptcha from "react-google-recaptcha";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const RECAPTCHA_KEY = "6Lcac30bAAAAAG59_ff0nQna52HYesgLS7g1IDQ-";

const ContactForm = ({ name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const contactForm = useRef(null);
  const buttonName = `direct-free-discussion-${name}`;
  const recaptchaRef = useRef(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSubmit = data => {
    const payload = {
      ...data,
      formUrl: window.location.href,
    }
    const recaptchaValue = recaptchaRef.current.getValue()
    // post data using fetch to submit data properly
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        'g-recaptcha-response': recaptchaValue,
        ...payload,
      }),
    })
      .then(() => {
        swal({
          title: "Thank You!",
          text: "We Have Received Your Enquiry",
          icon: "success",
          button: "Close",
        }).then(willCloseModal => {
          contactForm.current.reset();
        });
      })
      .catch(error =>
        swal({
          title: "Oops!",
          text: "Something went wrong.",
          icon: "error",
        })
      );
  };

  return (
    <div>
      <h2 className="font-bold mb-8">Arrange A Free Discussion</h2>
      <form
        className="arrange-contact-form"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="field-buffer-guard"
        ref={contactForm}
        name="direct-free-discussion-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          value="direct-free-discussion-form"
          {...register("form-name")}
        />
        <div className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="field-buffer-guard" />
          </label>
        </div>
        <div className="flex flex-wrap mb-6 -mx-2">
          <input
            type="hidden"
            {...register("formUrl")}
            value=""
          />
          {/* Client First Name */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="clientFirstName" className="mb-2 font-semibold">
              First Name
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              id="clientFirstName"
              {...register("clientFirstName", { required: true })}
            />

            {errors.clientFirstName && (
              <span className="text-red-600">Required</span>
            )}
          </div>

          {/* Client Surname */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="clientSurname" className="mb-2 font-semibold">
              Surname
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("clientSurname", { required: true })}
            />

            {errors.clientSurname && (
              <span className="text-red-600">Required</span>
            )}
          </div>

          {/* Client Phone */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="clientPhone" className="mb-2 font-semibold">
              Phone
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("clientPhone", { required: true })}
            />
            {errors.clientPhone && (
              <span className="text-red-600">Required</span>
            )}
          </div>

          {/* Client Email */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="clientEmail" className="mb-2 font-semibold">
              Email
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("clientEmail", {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            {errors.clientEmail && errors.clientEmail.type === "required" && (
              <span className="text-red-600">Required</span>
            )}

            {errors.clientEmail && errors.clientEmail.type === "pattern" && (
              <span className="text-red-600">
                Looks like this email is invalid
              </span>
            )}
          </div>
          {/* Client Message */}
          <div className="w-full px-2 mb-2">
            <label htmlFor="clientMessage" className="mb-2 font-semibold">
              Brief Details of Your Circumstance
            </label>
            <textarea
              className="form-input border border-gray-300"
              id="clientMessage"
              rows="5"
              {...register("clientMessage", { required: true, minLength: 50 })}
            />

            {errors.clientMessage && errors.clientMessage.type === "required" && (
              <span className="text-red-600">Required</span>
            )}
            {errors.clientMessage &&
              errors.clientMessage.type === "minLength" && (
                <span className="mt-2 text-red-600">
                  You must provide at least 50 characters for the details
                </span>
              )}
          </div>
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
        <button className={classNames("btn btn-primary w-60", buttonName)} disabled={buttonDisabled}>
          Submit Your Details
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactForm;
