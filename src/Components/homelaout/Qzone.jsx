import React from "react";
import swimmingImage from "../../assets/assets/swimming.png";
import classImage from "../../assets/assets/class.png";
import playGroundImage from "../../assets/assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-4">Q-Zone</h2>
      <div className="flex flex-col justify-center space-x-2 ">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playGroundImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
