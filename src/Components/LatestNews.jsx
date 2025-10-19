import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary p-3">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptatum repudiandae accusamus adipisci fuga. Repudiandae repellat
          magnam animi saepe cumque.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
