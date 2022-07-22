import React, { useRef, useState } from "react";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const FreeDiscussionForm = ({ isHidden, closeModal, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const freeDiscussionForm = useRef(null);

  const submitForm = async (data) => {
    try {
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
      }).then((willCloseModal) => {
        if (willCloseModal) {
          closeModal();
        } else {
          freeDiscussionForm.current.reset();
        }
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <form
      className={classNames("contact-form", {
        hidden: isHidden,
      })}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        />

        {errors.firstName && <span className="text-red-600">Required</span>}
      </div>

      {/* Client Surname */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="Surname"
          {...register("lastName", { required: true })}
        />

        {errors.lastName && <span className="text-red-600">Required</span>}
      </div>

      {/* Client Phone */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input mr-2"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />

        {errors.phone && <span className="text-red-600">Required</span>}
      </div>

      {/* Client Email */}
      <div className="mb-2 p-0">
        <input
          type="text"
          className="form-input"
          placeholder="e.g. john@hotmail.com"
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
          <span className="text-red-600">Looks like this email is invalid</span>
        )}
      </div>

      {/* Client Message */}
      <div className="form-group mb-3 p-0 pos-rel">
        <textarea
          className="form-input"
          id="message"
          placeholder="How We Can Help You"
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

      <button type="submit" className={classNames("btn btn-primary w-full")}>
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


