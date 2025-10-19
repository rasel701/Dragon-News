import React from "react";
import logo from "../assets/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 ">
      <img className="mt-10" src={logo} alt="" />
      <h2 className="text-accent">Journalism Without Fear or Favour</h2>
      <p>{format(new Date(), "EEEE, MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;
