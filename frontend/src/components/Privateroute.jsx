import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function Privateroute() {
  let isLoggedIn = false;
  if (localStorage.getItem("token")) {
    isLoggedIn = true;
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
  //   return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}

export default Privateroute;
