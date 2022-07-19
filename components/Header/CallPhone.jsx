import React from "react";

const CallPhone = () => {
  return (
    <a href="tel:+611300967552" id="callPhoneNumber" className="px-4">
      <div className="flex items-center">
        <svg
          width="25"
          height="41"
          viewBox="0 0 25 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 0C1.34315 0 0 1.34315 0 3V37.7895C0 39.4463 1.34315 40.7895 3 40.7895H22C23.6569 40.7895 25 39.4463 25 37.7895V3C25 1.34315 23.6569 0 22 0H3ZM22.3684 2.63184H2.63159V38.1582H22.3684V2.63184Z"
            fill="#00B5F6"
          />
          <path
            d="M19.7156 24.0979L19.0583 26.9472C18.9659 27.3501 18.6119 27.6319 18.1971 27.6319C11.0645 27.6313 5.26315 21.8308 5.26315 14.6989C5.26315 14.2845 5.54499 13.9301 5.94789 13.8382L8.79767 13.181C9.21269 13.0848 9.63677 13.3002 9.80922 13.6932L11.1244 16.7602C11.2782 17.1215 11.1745 17.5424 10.8705 17.7906L9.3484 19.0126C10.3091 20.9692 11.9002 22.5601 13.8577 23.5212L15.1039 22.0004C15.3496 21.6957 15.7737 21.5903 16.135 21.7467L19.2025 23.0615C19.5714 23.2555 19.8117 23.6852 19.7156 24.0979Z"
            fill="#00B5F6"
          />
        </svg>
        <div className="flex flex-col pl-2">
          <div className="text-accent font-semibold text-base leading-none animate-bounce">
            Free Discussion
          </div>
          <div className="font-semibold text-base" id="callPhoneNumberText">
            1300 967 552
          </div>
        </div>
      </div>
    </a>
  );
};

export default CallPhone;
