import React from "react";
import { Link } from "react-router-dom";

class LSECompanyIndex extends React.Component {
  suppressionKeyWords = [
    "trust",
    "investment",
    "investments",
    "fund",
    "shares"
  ];

  createIndexData = props => {
    const companiesKeyValueArray = Object.entries(this.props.lseCompanies);
    let realCompanyObjects = [];
    companiesKeyValueArray.map(([key, value]) => {
      for (const keyWord in this.suppressionKeyWords) {
        if (!value.name.includes(keyWord)) {
          let dataObject = {
            name: value.name,
            quarterly_percentage_change:
              Math.round(value.quarterly_percentage_change * 100) / 100
          };
          realCompanyObjects.push(dataObject);
        }
      }
    });
    return realCompanyObjects;
  };

  getCompanyObjects = props => {
    this.createIndexData(props);
  };

  sortCompanies = () => {
    let sortedCompanies = [
      this.getCompanyObjects(this.props).filter(
        company => company.name.toLowerCase().includes(this.props.searchQuery)
        //   || company.sector.toLowerCase()
        //   .includes(this.props.searchQuery)
      )
    ];

    switch (this.props.match.params.sort) {
      case "companies":
        return sortedCompanies;
      case "name":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case "sector":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.sector.localeCompare(b.sector);
        });
        break;
      case "quarterly_percentage_change":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.quarterly_percentage_change - b.quarterly_percentage_change;
        });
        break;
      default:
        return sortedCompanies;
    }
    return sortedCompanies;
  };

  render() {
    const sortedCompanies = this.sortedCompanies();
    return (
      <div>
        <h1>test</h1>
        <div>
          <div class="ui search">
            <div class="ui large icon input">
              <input
                class="prompt"
                type="text"
                placeholder="Search for a company or CID"
                onChange={event =>
                  this.props.changeSearchQuery(event.target.value)
                }
              />
              <i class="search icon" />
            </div>
          </div>
        </div>
        <br />
        <div>
          <table className="ui celled center aligned table">
            <thead>
              <tr>
                <th>
                  <Link to={`/companies/cid`}>ID </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedCompanies.map(company => {
                return (
                  <tr key={company.name}>
                    <td>{company.cid} </td>
                    <td>
                      <Link to={`/companies/show/${company.name}`}>
                        {company.name}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default LSECompanyIndex;
