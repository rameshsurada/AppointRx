import React from "react";
import { assets } from "./assets/assets_frontend/assets";
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            accusantium quisquam molestiae aperiam quis mollitia impedit non,
            eius in sunt porro sint voluptatum rerum expedita aspernatur numquam
            suscipit, nulla quae.
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5"> COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*right section */}
        <div>
          <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1 211-456-7227</li>
            <li>appointrx@gmail.com</li>
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
