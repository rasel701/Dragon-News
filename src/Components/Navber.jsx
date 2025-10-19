import React from "react";
import { NavLink } from "react-router";
import user from "../assets/assets/user.png";

const Navber = () => {
  return (
    <div className="flex justify-between mt-8 items-center">
      <div></div>
      <div className="nav flex gap-4 text-accent font-[17px]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={user} alt="" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navber;
