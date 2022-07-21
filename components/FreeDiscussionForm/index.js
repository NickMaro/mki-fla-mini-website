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

const RECAPTCHA_KEY = "6LfKMAohAAAAALg2jA1FaEtZ7-nPc2WpM6m3xBDi";

const FreeDiscussionForm = ({ isHidden, closeModal, name }) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  const freeDiscussionForm = useRef(null);
  const buttonName = `free-discussion-${name}`;
  const recaptchaRef = useRef(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitting(true);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": event.target.getAttribute("name"), email }),
      })
        .then((res) => {
          setIsSubmitting(false);
          // setCurrentStep(2);
          console.log("res",res)
        })
        .catch((error) => {
          setIsSubmitting(false);
          alert(error);
        });
    } else {
      setError("Please check your email address");
    }
  };
  // const onSubmit = (data) => {
  //   console.log("first")

  //   const payload = {
  //     ...data,
  //     formUrl: window.location.href,
  //   };
  //   // const recaptchaValue = recaptchaRef.current.getValue();
  //   // post data using fetch to submit data properly
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       // "g-recaptcha-response": recaptchaValue,
  //       ...payload,
  //     }),
  //   })
  //     .then((res) => {
  //       console.log("form subm", res);

  //       swal({
  //         title: "Thank You!",
  //         text: "We Have Received Your Enquiry",
  //         icon: "success",
  //         button: "Close",
  //       }).then((willCloseModal) => {
  //         if (willCloseModal) {
  //           closeModal();
  //         } else {
  //           freeDiscussionForm.current.reset();
  //         }
  //       });
  //     })
  //     .catch((error) =>
  //       swal({
  //         title: "Oops!",
  //         text: "Something went wrong.",
  //         icon: "error",
  //       })
  //     );
  // };
console.log(errors)
  return (
    <form
    name="direct-free-discussion-form"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    onSubmit={handleSubmit}
    className="w-full md:w-2/3"
  >
    <input type="hidden" name="form-name" value="direct-free-discussion-form" />

    <input
      name="email"
      type="email"
      placeholder="Enter your Email to begin"
      value={email}
      onChange={onChange}
      className="bg-white shadow-md rounded-md w-full h-12 focus:outline-none text-sm md:text-base text-center font-light placeholder:text-gray-400"
    />
    <p
      className={classNames(
        "w-full text-red-500 text-sm mt-1 text-center font-light",
        {
          hidden: error === "",
        }
      )}
    >
      {error}
    </p>
    <p className="hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </p>

    <button
      type="submit"
      className="text-white bg-resolvy-blue-200 shadow-md font-bold text-lg h-12 w-full rounded-lg mt-4 hover:bg-resolvy-blue-400 flex justify-center items-center"
    >
      Sign Up Today&nbsp;&nbsp;
      {/* {isSubmitting ? (
        <Oval color="#fff" secondaryColor="#fafafa" strokeWidth={5} strokeWidthSecondary={5} width={15} height={15}/>
      ) : null} */}
    </button>
  </form>
    // <form
    //   className={classNames("contact-form", {
    //     hidden: isHidden,
    //   })}
    //   data-netlify="true"
    //   // data-netlify-recaptcha="true"
    //   netlify-honeypot="bot-field"
    //   ref={freeDiscussionForm}
    //   name="direct-free-discussion-form"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   <input
    //     type="hidden"
    //     name="form-name"
    //     value="direct-free-discussion-form"
    //     {...register("form-name")}

    //   />

    //   {/* <input
    //     type="hidden"
    //     value="direct-free-discussion-form"
    //     {...register("form-name")}
    //   /> */}
    //   {/* <div className="hidden">
    //     <label>
    //       Don’t fill this out if you’re human:{" "}
    //       <input name="field-buffer-guard" />
    //     </label>
    //   </div> */}
    //   {/* <input type="hidden" {...register("formUrl")} value="" /> */}
    //   {/* Client First Name */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="First Name"
    //       {...register("clientFirstName", { required: true })}
    //     />

    //     {errors.clientFirstName && (
    //       <span className="text-red-600">Required</span>
    //     )}
    //   </div>

    //   {/* Client Surname */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="Surname"
    //       {...register("clientSurname", { required: true })}
    //     />

    //     {errors.clientSurname && <span className="text-red-600">Required</span>}
    //   </div>

    //   {/* Client Phone */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input mr-2"
    //       placeholder="Phone"
    //       {...register("clientPhone", { required: true })}
    //     />

    //     {errors.clientPhone && <span className="text-red-600">Required</span>}
    //   </div>

    //   {/* Client Email */}
    //   <div className="mb-2 p-0">
    //     <input
    //       type="text"
    //       className="form-input"
    //       placeholder="e.g. john@hotmail.com"
    //       {...register("clientEmail", {
    //         required: true,
    //         pattern:
    //           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       })}
    //     />

    //     {errors.clientEmail && errors.clientEmail.type === "required" && (
    //       <span className="text-red-600">Required</span>
    //     )}

    //     {errors.clientEmail && errors.clientEmail.type === "pattern" && (
    //       <span className="text-red-600">Looks like this email is invalid</span>
    //     )}
    //   </div>

    //   {/* Client Message */}
    //   <div className="form-group mb-3 p-0 pos-rel">
    //     <textarea
    //       className="form-input"
    //       id="clientMessage"
    //       placeholder="How We Can Help You"
    //       rows="5"
    //       {...register("clientMessage", { required: true, minLength: 50 })}
    //     />

    //     {errors.clientMessage && errors.clientMessage.type === "required" && (
    //       <span className="text-red-600">Required</span>
    //     )}
    //     {errors.clientMessage && errors.clientMessage.type === "minLength" && (
    //       <span className="mt-2 text-red-600">
    //         You must provide at least 50 characters for the details
    //       </span>
    //     )}
    //   </div>
    //   {/* <div className="w-full mb-2">
    //     <Recaptcha
    //       ref={recaptchaRef}
    //       sitekey={RECAPTCHA_KEY}
    //       size="normal"
    //       id="recaptcha-google"
    //       onChange={() => setButtonDisabled(false)}
    //     />
    //   </div> */}
    //   <button
    //   type="submit"
    //     className={classNames("btn btn-primary w-full", buttonName)}
    //     // disabled={buttonDisabled}
    //   >
    //     Send
    //   </button>
    // </form>
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
