import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props:any ) {
    console.log(props.isSignedIn,"proted");
  if (!props.isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return props.children;
}
export default ProtectedRoute;
