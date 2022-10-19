import React from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>page not found</h1>
      <button onClick={handleClick}>Take me back to home</button>
    </div>

    // <div>
    //   <Navigate to="/" />
    // </div>
  );
}
