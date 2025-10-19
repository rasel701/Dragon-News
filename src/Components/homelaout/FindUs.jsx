import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-bold mb-4">Find Us On</h2>
      <div className="mt-2">
        <div className="flex flex-col justify-start ">
          <button className="btn justify-start bg-base-100">
            <FaFacebook /> Facebook
          </button>
          <button className="btn justify-start bg-base-100">
            <FaTwitter /> Twitter
          </button>
          <button className="btn justify-start bg-base-100">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
