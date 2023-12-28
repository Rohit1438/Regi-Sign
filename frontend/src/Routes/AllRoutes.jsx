import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

import Login from "../Pages/Login";

import SignUp from "../Pages/SignUp";
import { PrivateRoute } from "./PrivateRoute";


export const AllRoutes = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
