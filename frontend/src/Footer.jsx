import React from "react";
import { assets } from "./assets/assets_frontend/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <p className="text-3xl text-blue-800 font-bold mb-5 w-40">
            AppointRx
          </p>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            {" "}
            Easily book doctor appointments, manage your health records, and
            stay on top of your care—all in one place. We’re here to make your
            healthcare experience faster, easier, and more convenient.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5"> COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*right section */}
        <div>
          <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-99999-55555</li>
            <li>contact@appointrx.com</li>
          </ul>
        </div>
      </div>
      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025@ AppointRx - All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
