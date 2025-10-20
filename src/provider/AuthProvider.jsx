import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { useLocation } from "react-router";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(users);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        console.log("User is signed out");
      }
      setLoading(false);
    });

    return () => {
      unsubscriber();
    };
  }, []);

  const LogOutUser = () => {
    return signOut(auth);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        users,
        setUsers,
        LogOutUser,
        logInUser,
        loading,
        setLoading,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
