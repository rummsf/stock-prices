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
      <Link to={`/`}>
        <h1 className="h1">
          LSE Companies' <br />
          Performance
        </h1>
      </Link>
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
