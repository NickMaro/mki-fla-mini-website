import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardImage = ({ image, order, imageWrapperClass }) => {
  return (
    !!image && (
      <div
        className={classNames(
          "col-span-1 sm:mb-0 relative",
          order,
          imageWrapperClass
        )}
      >
        <div className="w-full h-full">{image}</div>
      </div>
    )
  );
};

const Card = ({
  children,
  title,
  direction,
  hasBottomMargin,
  image,
  className,
  imageWrapperClass,
}) => {
  let imageOrder = "";
  let textOrder = "";

  if (direction === "rtl") {
    imageOrder = "xl:order-2";
    textOrder = "xl:order-1";
  }

  return (
    <div
      className={classNames(
        "grid grid-cols-2 p-6 sm:p-0 shadow-lg overflow-hidden rounded-2xl",
        { "mb-4 sm:mb-20": hasBottomMargin },
        className
      )}
    >
      <CardImage
        image={image}
        order={imageOrder}
        imageWrapperClass={imageWrapperClass}
      />
      <div
        className={classNames(textOrder, "px-0 sm:p-6 lg:p-12", {
          "col-span-2": !image,
          "col-span-1": image,
        })}
      >
        <div className="flex flex-col h-full">
          <h2 className={`${!!title ? "mb-6" : ""} font-bold uppercase`}>
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  title: PropTypes.string.isRequired,
  hasBottomMargin: PropTypes.bool,
  image: PropTypes.element,
  className: PropTypes.string,
  imageWrapperClass: PropTypes.string,
};

Card.defaultProps = {
  direction: "ltr",
  hasBottomMargin: true,
  image: null,
  classNames: "",
  imageWrapperClass: "",
};

export default Card;
