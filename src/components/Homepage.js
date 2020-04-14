import React from "react";
import { Link } from "react-router-dom";

const Homepage = props => {
  return (
    <div
      style={{
        backgroundColor: "blue"
      }}
    >
      <h1 className="h1">Stock Prices</h1>
      <Link to={`/lse`}>LSE</Link>
      <br />
      <Link to={`/aim`}>AIM</Link>
    </div>
  );
};

export default Homepage;
