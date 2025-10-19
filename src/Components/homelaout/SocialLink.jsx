import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-5 ">Login with</h2>
      <div className="space-y-3">
        <button className="btn   btn-outline w-full btn-secondary">
          <FcGoogle size={24} />
          Login with Google
        </button>

        <button className="btn btn-outline btn-primary w-full ">
          <FaGithub size={24} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
