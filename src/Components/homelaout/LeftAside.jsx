import React, { Suspense } from "react";
import Categorys from "../Categorys";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        }
      >
        <Categorys />
      </Suspense>
    </div>
  );
};

export default LeftAside;
