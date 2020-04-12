import React, { Component } from "react";
import axios from "axios";

import "../App.css";
import CompaniesRouter from "./Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aimCompanies: [],
      lseCompanies: [],
      searchQuery: ""
    };
  }

  render() {
    return (
      <div className="App">
        {Object.keys(CompaniesRouter).map(router => (
          <div>{router}</div>
        ))}
      </div>
    );
  }
}
export default App;
