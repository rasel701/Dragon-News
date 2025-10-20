import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <MoonLoader
        color="#1337ea"
        cssOverride={{}}
        loading
        size={200}
        speedMultiplier={10}
      />
    </div>
  );
};

export default Loading;
