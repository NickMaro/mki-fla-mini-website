import classNames from "classnames";
import Link from "next/link";
import React from "react";

const services = [
  { path: "/consent-orders", name: "Consent Orders" },
  { path: "/legal-representation", name: "Legal Representation" },
];
const ServicesMenu = () => {
  return (
    <div className="hidden group-hover:block absolute left-0">
      <div class="up-arrow ml-7 mt-3" />
      <div className="sm:mb-0 bg-accent text-white shadow-xl w-64 p-5">
        {services.map((service, i) => (
          <div
            className="w-full flex flex-col justify-center py-4"
            key={`serviceLink-${i}`}
          >
            <Link href={service.path}>
              <p
                className={classNames(
                  "nav-link text-white hover:bg-opacity-30 hover:bg-black"
                )}
              >
                {service.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMenu;
