import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name) {
      toast.error("Name is required!");
      return;
    }

    if (name.length < 2) {
      toast.error("Name must be at least 2 characters long!");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      toast.error("Name can only contain letters and spaces!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUser({ displayName: name, photoURL })
          .then(() => {
            toast.success("User Register Successfully");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center  mt-15">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
        <h2 className="text-center text-[35px] font-semibold ">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label ">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
                required
              />

              {/* photo URL */}

              <label className="label ">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input w-full"
                placeholder="Photo-URL"
                required
              />

              {/* email */}
              <label className="label ">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Sign up
              </button>
            </fieldset>
          </form>
          <div>
            <p className="text-center mt-3">
              Allready Have An Account ? Please{" "}
              <Link
                to={"/auth/login"}
                className="text-secondary font-semibold hover:underline "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
