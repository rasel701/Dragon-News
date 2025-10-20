import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { setUsers, logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.state?.pathname);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => {
        toast.success("User Login Successfully");
        navigate(location?.state?.pathname || "/");
      })
      .catch((error) => {
        toast.error(error?.code);
      });
  };
  return (
    <div className="flex justify-center items-center  mt-20">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
        <h2 className="text-center text-[35px] font-semibold ">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label ">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <div>
            <p className="text-center mt-3">
              Don't Have An Account ? Please{" "}
              <Link
                type="submit"
                to={"/auth/register"}
                className="text-secondary font-semibold hover:underline "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
