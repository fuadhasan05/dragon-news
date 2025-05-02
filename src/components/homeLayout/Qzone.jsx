import React from "react";
import SwimmingImg from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlayImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-lg space-y-5">
      <h2 className="font-bold">Q-Zone</h2>
      <div className="flex justify-center gap-9">
        <img src={SwimmingImg} alt="" />
      </div>
      <div className="flex justify-center">
        <img src={ClassImg} alt="" />
      </div>
      <div className="flex justify-center">
        <img src={PlayImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
