import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import lseCompanies from "../lse_prices_df_csv_to_json.json";
import "../App.css";
import history from "../history";
import Header from "./Header";
import Homepage from "./Homepage";
import { AIMExchangeChart, AIMCompanyIndex, AIMCompanyShow } from "./AIM";
import { LSEExchangeChart, LSECompanyIndex, LSECompanyShow } from "./LSE";
// import CompaniesRouter from "./Router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aimCompanies: [],
      lseCompanies: {},
      searchQuery: ""
    };
  }

  componentDidMount = () => {
    this.setState({ lseCompanies });
  };

  changeSearchQuery = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header />
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
                  <AIMExchangeChart
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
              <Route exact path="/" component={Homepage} />

              <Route
                exact
                path="/lse"
                render={props => (
                  <LSEExchangeChart
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

  // refactor
  // render() {
  //   return (
  //     <div className="App">
  //       <Router history={history}>
  //         <Homepage />
  //         <div>
  //           {Object.keys(CompaniesRouter).map(router => (
  //             <div>{router}</div>
  //           ))}
  //         </div>
  //       </Router>
  //     </div>
  //   );
  // }
}
export default App;
