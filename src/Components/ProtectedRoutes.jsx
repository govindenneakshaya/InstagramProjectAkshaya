import React from "react";
import Login from "./Login";

function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    return  children ;
  } else {
    return <Login />;
  }
}

export default ProtectedRoutes;
