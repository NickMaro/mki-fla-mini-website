import React, { Children } from "react";
import classNames from "classnames";

const HowItWorks = ({ children, title, linePadding }) => {
  const arr = Children.toArray(children);

  return (
    <div className="flex flex-col items-center xl:px-56">
      <h2 className={`${!!title ? "mb-10" : ""} font-bold text-center`}>
        {title}
      </h2>
      <div className="relative flex mb-16">
        <div
          className={classNames(
            "h-auto w-8 py-4 md:w-16 md:py-9 flex items-center justify-center absolute inset-0 z-0",
            linePadding
          )}
        >
          <div className="w-1 md:w-2 bg-accent-600 h-full"></div>
        </div>
        <div className="z-10 flex flex-col gap-6">
          {arr.map((item, i) => {
            return (
              <div
                className="flex gap-6 md:gap-24 items-center"
                key={`step-${i + 1}`}
              >
                <div>
                  <div className="rounded-full bg-white border-2 text-2xl font-medium text-accent-600 border-gray-400 w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>

                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
