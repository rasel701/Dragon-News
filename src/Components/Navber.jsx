import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navber = () => {
  const { users, setUsers, LogOutUser } = useContext(AuthContext);
  console.log(users);

  const handleUserLogOut = () => {
    LogOutUser()
      .then(() => {
        console.log("Successfully logout");
        setUsers(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-between mt-8 items-center">
      <div>
        <h2>{users?.displayName}</h2>
      </div>
      <div className="nav flex gap-4 text-accent font-[17px]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={users ? users.photoURL : user}
          alt=""
        />
        {users ? (
          <button onClick={handleUserLogOut} className="btn btn-primary px-6">
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
