import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full ">
          <button className=" btn justify-start bg-base-100 join-item">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className=" btn justify-start bg-base-100 join-item">
            <FaTwitter></FaTwitter> Twiter
          </button>
          <button className=" btn justify-start bg-base-100 join-item">
            <FaInstagram></FaInstagram> Instragram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
