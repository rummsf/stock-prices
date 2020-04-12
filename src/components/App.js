import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "../App.css";
import { AIMCompanyChart, AIMCompanyIndex, AIMCompanyShow } from "./AIM";
import { LSECompanyChart, LSECompanyIndex, LSECompanyShow } from "./LSE";
import Homepage from "./Homepage";
import history from "../history";

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
    return <div className="App">this.aimRouter() this.lseRouter()</div>;
  }

  aimRouter() {
    return (
      <div>
        <Router history={history}>
          <Homepage />
          <div>
            <Switch>
              <Route
                exact
                path="/aim/show/:company"
                render={props => (
                  <AIMCompanyShow
                    {...props}
                    aimCompanies={this.state.aimCompanies}
                  />
                )}
              />
              <Route
                exact
                path="aim/companies/show/chart/:company"
                render={props => (
                  <AIMCompanyChart
                    {...props}
                    aimCompanies={this.state.aimCompanies}
                  />
                )}
              />
              <Route
                path="aim/companies/:sort"
                render={props => (
                  <AIMCompanyIndex
                    {...props}
                    aimCompanies={this.state.aimCompanies}
                    searchQuery={this.state.searchQuery}
                    changeSearchQuery={this.changeSearchQuery}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }

  lseRouter() {
    return (
      <div>
        <Router history={history}>
          <Homepage />
          <div>
            <Switch>
              <Route
                exact
                path="/lse/show/:company"
                render={props => (
                  <LSECompanyShow
                    {...props}
                    lseCompanies={this.state.lseCompanies}
                  />
                )}
              />
              <Route
                exact
                path="lse/companies/show/chart/:company"
                render={props => (
                  <LSECompanyChart
                    {...props}
                    lseCompanies={this.state.lseCompanies}
                  />
                )}
              />
              <Route
                path="lse/companies/:sort"
                render={props => (
                  <LSECompanyIndex
                    {...props}
                    lseCompanies={this.state.lseCompanies}
                    searchQuery={this.state.searchQuery}
                    changeSearchQuery={this.changeSearchQuery}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
