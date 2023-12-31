import { useContext, useEffect, useState } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  const token = localStorage.getItem("regsign") || "";

  const location = useLocation();
  //
  return isAuth ? (
    children
  ) : (
    <Navigate
      // state={location.pathname}
      to={"/login"}
    />
  );
};
