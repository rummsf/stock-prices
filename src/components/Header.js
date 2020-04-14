import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div
      style={{
        backgroundColor: "#0b27a3",
        opacity: "20%"
      }}
    >
      <h1 className="h1">
        <a href="http://localhost:3000/home">
          LSE Companies' <br />
          Performance
        </a>
      </h1>
      <Link to={`/lse`}>
        <h2 className="h2">Main Market</h2>
      </Link>
      <Link to={`/aim`}>
        <h2 className="h2">Alternative Investment Market</h2>
      </Link>
    </div>
  );
};
export default Header;
