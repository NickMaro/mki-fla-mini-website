import classNames from "classnames";
import Image from "next/image";
import React, { Children } from "react";

import TickSVG from "../../public/assets/icons/check.svg";
import CrossSVG from "../../public/assets/icons/cross.svg";

const NewPricing = ({ children, theme, title, subtitle, className }) => {
  const childrenArr = Children.toArray(children);
  const footnote = childrenArr.find((items) => items.props.name === "footnote");
  return (
    <>
      <div
        className={classNames(
          "rounded-md w-full flex-col shadow-md",
          className
        )}
      >
        <div
          className={classNames(
            "p-4 text-white text-center flex flex-col items-center gap-1 justify-center text-xl font-bold rounded-t-md",
            {
              "bg-accent": theme === "accent",
              "bg-gray-400": theme === "gray",
            }
          )}
        >
          <div>
            <p>{title}</p>
          </div>
          <div>
            <p className="text-2xl">{subtitle}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-b-md flex flex-col gap-4 text-left">
          {childrenArr.map((item, i) => {
            if (item.props.name === "footnote") return "";
            return (
              <div className="flex items-center gap-8" key={i}>
                <div>
                  <div className="w-6 h-6">
                    <Image
                      src={item.props.name === "tick" ? TickSVG : CrossSVG}
                      alt={item.props.name}
                      loading="lazy"
                      placeholder="blurred"
                    />
                  </div>
                </div>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      {/* {!!footnote && footnote} */}
    </>
  );
};

export default NewPricing;
