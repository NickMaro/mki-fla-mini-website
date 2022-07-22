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
  const [submitting, setSubmitting] = useState(false);

  // const onSubmit = data => {
  //   const payload = {
  //     ...data,
  //     formUrl: window.location.href,
  //   }
  //   const recaptchaValue = recaptchaRef.current.getValue()
  //   // post data using fetch to submit data properly
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       'g-recaptcha-response': recaptchaValue,
  //       ...payload,
  //     }),
  //   })
  //     .then(() => {
  //       swal({
  //         title: "Thank You!",
  //         text: "We Have Received Your Enquiry",
  //         icon: "success",
  //         button: "Close",
  //       }).then(willCloseModal => {
  //         contactForm.current.reset();
  //       });
  //     })
  //     .catch(error =>
  //       swal({
  //         title: "Oops!",
  //         text: "Something went wrong.",
  //         icon: "error",
  //       })
  //     );
  // };
  const submitForm = async (data) => {
    try {
      setSubmitting(true);
      const rawResponse = await fetch(
        "https://us-central1-mki-legal-family-master.cloudfunctions.net/sendMKIFamilyMiniSiteEnquiry",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              data,
            },
          }),
        }
      );
      await rawResponse.json();

      swal({
        title: "Thank You!",
        text: "We Have Received Your Enquiry",
        icon: "success",
        button: "Close",
      }).then(() => {
        contactForm.current.reset();

        setSubmitting(false);
      });
    } catch (error) {
      setSubmitting(false);

      console.error("error", error);
    }
  };
  return (
    <div>
      <h2 className="font-bold mb-8">Arrange A Free Discussion</h2>
      <form
        // className="arrange-contact-form"
        // data-netlify="true"
        // data-netlify-recaptcha="true"
        // netlify-honeypot="field-buffer-guard"
        ref={contactForm}
        // name="direct-free-discussion-form"
        onSubmit={handleSubmit(submitForm)}
      >
        {/* <input
          type="hidden"
          value="direct-free-discussion-form"
          {...register("form-name")}
        />
        <div className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="field-buffer-guard" />
          </label>
        </div> */}
        <div className="flex flex-wrap mb-6 -mx-2">
          {/* <input
            type="hidden"
            {...register("formUrl")}
            value=""
          /> */}
          {/* Client First Name */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="firstName" className="mb-2 font-semibold">
              First Name
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              id="firstName"
              {...register("firstName", { required: true })}
            />

            {errors.firstName && <span className="text-red-600">Required</span>}
          </div>

          {/* Client Surname */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="clientSurname" className="mb-2 font-semibold">
              Surname
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("lastName", { required: true })}
            />

            {errors.lastName && <span className="text-red-600">Required</span>}
          </div>

          {/* Client Phone */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="phone" className="mb-2 font-semibold">
              Phone
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span className="text-red-600">Required</span>}
          </div>

          {/* Client Email */}
          <div className="w-full md:w-1/2 px-2 mb-2">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email
            </label>
            <input
              type="text"
              className="form-input border border-gray-300"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            {errors.email && errors.email.type === "required" && (
              <span className="text-red-600">Required</span>
            )}

            {errors.email && errors.email.type === "pattern" && (
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
              id="message"
              rows="5"
              {...register("message", { required: true, minLength: 50 })}
            />

            {errors.message && errors.message.type === "required" && (
              <span className="text-red-600">Required</span>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <span className="mt-2 text-red-600">
                You must provide at least 50 characters for the details
              </span>
            )}
          </div>
        </div>
        <div className="w-full mb-2">
          {/* <Recaptcha
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            size="normal"
            id="recaptcha-google"
            onChange={() => setButtonDisabled(false)}
          /> */}
        </div>
        <button
          className={classNames("btn btn-primary w-60", buttonName, {
            "cursor-not-allowed": submitting,
          })}
          disabled={submitting}
        >
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
