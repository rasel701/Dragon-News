import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className="w-11/12 p-5 mx-auto">
        <Navber></Navber>
      </div>
      <main className="w-11/12 mx-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
