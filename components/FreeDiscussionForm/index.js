import React, { useRef, useState } from "react";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot
} from 'react-netlify-forms'

const FreeDiscussionForm = ({ isHidden, closeModal, name }) => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm({ mode: 'onBlur' })
  const netlify = useNetlifyForm({
    name: 'react-hook-form',
    action: '/success',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server')
    }
  })
  const onSubmit = (data) => netlify.handleSubmit(null, data)

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    // <form
    //   className={classNames("contact-form", {
    //     hidden: isHidden,
    //   })}
    //   onSubmit={handleSubmit(submitForm)}
    // >
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="First Name"
    //       {...register("firstName", { required: true })}
    //     />

    //     {errors.firstName && <span className="text-red-600">Required</span>}
    //   </div>

    //   {/* Client Surname */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="Surname"
    //       {...register("lastName", { required: true })}
    //     />

    //     {errors.lastName && <span className="text-red-600">Required</span>}
    //   </div>

    //   {/* Client Phone */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input mr-2"
    //       placeholder="Phone"
    //       {...register("phone", { required: true })}
    //     />

    //     {errors.phone && <span className="text-red-600">Required</span>}
    //   </div>

    //   {/* Client Email */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="e.g. john@hotmail.com"
    //       {...register("email", {
    //         required: true,
    //         pattern:
    //           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       })}
    //     />

    //     {errors.email && errors.email.type === "required" && (
    //       <span className="text-red-600">Required</span>
    //     )}

    //     {errors.email && errors.email.type === "pattern" && (
    //       <span className="text-red-600">Looks like this email is invalid</span>
    //     )}
    //   </div>

    //   {/* Client Message */}
    //   <div className="form-group mb-3 p-0 pos-rel">
    //     <textarea
    //       className="form-input"
    //       id="message"
    //       placeholder="How We Can Help You"
    //       rows="5"
    //       {...register("message", { required: true, minLength: 50 })}
    //     />

    //     {errors.message && errors.message.type === "required" && (
    //       <span className="text-red-600">Required</span>
    //     )}
    //     {errors.message && errors.message.type === "minLength" && (
    //       <span className="mt-2 text-red-600">
    //         You must provide at least 50 characters for the details
    //       </span>
    //     )}
    //   </div>

    //   <button type="submit" className={classNames("btn btn-primary w-full")}>
    //     Send
    //   </button>
    // </form>
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
        <Honeypot />
        {netlify.success && (
          <p sx={{ variant: 'alerts.success', p: 3 }}>
            Thanks for contacting us!
          </p>
        )}
        {netlify.error && (
          <p sx={{ variant: 'alerts.muted', p: 3 }}>
            Sorry, we could not reach servers. Because it only works on Netlify,
            our GitHub demo does not provide a response.
          </p>
        )}
        <div>
          <label htmlFor='email' sx={{ variant: 'forms.label' }}>
            Email:
          </label>
          <input
            type='email'
            name='email'
            id='email'
           {...register("email",{
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid email address'
              }
            })}
            sx={{
              variant: 'forms.input'
            }}
          />
          {errors.email && (
            <div sx={{ variant: 'text.error' }}>{errors.email.message}</div>
          )}
        </div>
        <div sx={{ pt: 3 }}>
          <button type='submit' sx={{ variant: 'buttons.success' }}>
            Submit
          </button>
          <button
            type='reset'
            onClick={() => reset()}
            sx={{ variant: 'buttons.danger' }}
          >
            Reset
          </button>
        </div>
      </NetlifyFormComponent>
    </NetlifyFormProvider>

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
