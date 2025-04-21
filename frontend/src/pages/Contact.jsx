import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold"> US</span>
        </p>
      </div>
      {/* -- left section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {" "}
        <img src={assets.contact_image} className="w-full md:max-w-[360px]" />
        {/* -- right section --- */}
        <div className=" flex flex-col justify-center items-start gap-6 ">
          {" "}
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            500001, Mallepally<br></br>
            Hyderabad, Telengana
          </p>
          <p className="text-gray-500">
            Tel: (415) 555‑0132 <br />
            Email: contact@appointrx.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
