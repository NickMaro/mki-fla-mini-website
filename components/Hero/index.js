import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Slider from "react-slick";
import Image from "next/image";

const HeroImage = ({
  bgImages,
  sliderSettings,
  altImageText = "Change Image Text",
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...sliderSettings,
  };

  if (Array.isArray(bgImages)) {
    return (
      <div className="hero-section-bg-image">
        <div className="absolute inset-0">
          <Slider {...settings}>
            {bgImages.map((bgImage, i) => (
              <div className="absolute">
                <Image
                  key={`heroBgImage-${i}`}
                  src={bgImage}
                  style={{ position: "absolute" }}
                  alt={`Hero Section Image-${i}`}
                  loading="lazy"
                  placeholder="blurred"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="overlay" />
        <div className="blue-overlay" />
      </div>
    );
  }

  return (
    <div className="hero-section-bg-image">
      <div className="absolute w-full h-full">
        {bgImages ? (
          <Image
            src={bgImages}
            alt={altImageText}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            placeholder="blurred"
          />
        ) : null}
      </div>
      <div className="overlay"></div>
      <div className="blue-overlay"></div>
    </div>
  );
};

const HeroSection = ({
  id,
  bgImages,
  className,
  children,
  altImageText = "Change Image Text",
  sliderSettings = {},
  hasImage = true,
}) => {
  return (
    <section
      className={classNames(
        "landing hero-section min-h-screen lg:min-h-0 flex items-center",
        className
      )}
      id={id}
    >
      {hasImage && (
        <HeroImage
          bgImages={bgImages}
          sliderSettings={sliderSettings}
          altImageText={altImageText}
        />
      )}
      <div className="custom-container h-full py-12 relative z-20">
        <div className="flex flex-wrap -mx-4 h-full">
          <div className="w-full px-4 flex flex-col justify-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.defaultProps = {
  className: "",
  id: "",
};

HeroSection.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeroSection;
