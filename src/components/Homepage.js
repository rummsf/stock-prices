import React from "react";
import { Link } from "react-router-dom";
import AIM from "../AIM.jpg";
import LSE from "../LSE.jpg";

const Homepage = props => {
  return (
    <>
      <body>
        <hr />
        <h2>London Stock Exchange Analysis </h2>
        <hr />
        <p className="p">
          Select either the main market or alternative investment market to
          learn about LSE companies' performance this quarter
          <Link to={`/lse`}>
            <img src={LSE} alt="nothing" className="img" />
          </Link>
          <Link to={`/aim`}>
            <img src={AIM} alt="nothing" className="img" />
          </Link>
        </p>
      </body>
    </>
  );
};

export default Homepage;
