import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, NavLink, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { users, loading, setLoading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading />;
    // return <h2>Loading News....</h2>;
  }

  if (!users) {
    return <Navigate to="/auth/login" state={location} replace />;
  }

  return children;
};

export default PrivateRoute;
