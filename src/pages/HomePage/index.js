import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container p-5">
        <h1>Welcome to Home</h1>
        <Link className="btn btn-danger mx-3" to={"/user"}>
          User
        </Link>
        <Link className="btn btn-primary" to={"/admin"}>
          Admin
        </Link>
      </div>
    </div>
  );
};