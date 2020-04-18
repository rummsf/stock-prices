import React from "react";
import { Link } from "react-router-dom";

class LSECompanyIndex extends React.Component {
  sortCompanies = () => {
    let sortedCompanies = [
      ...this.props.companies.filter(
        company =>
          company.company.toLowerCase().includes(this.props.searchQuery) ||
          company.country.toLowerCase().includes(this.props.searchQuery)
      )
    ];

    switch (this.props.match.params.sort) {
      case "companies":
        return sortedCompanies;
      case "company":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.company.localeCompare(b.company);
        });
        break;
      case "country":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
        break;
      case "id":
        sortedCompanies = sortedCompanies.sort((a, b) => {
          return a.client_company_id - b.client_company_id;
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
                  <Link to={`/companies/id`}>ID </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedCompanies.map(company => {
                return (
                  <tr key={company.company}>
                    <td>{company.client_company_id} </td>
                    <td>
                      <Link to={`/companies/show/${company.company}`}>
                        {company.company}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/companies/show/chart/${company.country}`}>
                        {company.country}
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
