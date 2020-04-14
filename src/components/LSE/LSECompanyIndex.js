// import React from "react";
// import { Link } from "react-router-dom";

// class LSECompanyIndex extends React.Component {
//   render() {
//     return <div>LSE EXCHANGE</div>;
//   }
// }

// export default LSECompanyIndex;

// class CityIndex extends React.Component {
//   sortCompanies = () => {
//     let sortedCompanies = [
//       ...this.props.companies.filter(
//         company =>
//           company.company.toLowerCase().includes(this.props.searchQuery) ||
//           company.country.toLowerCase().includes(this.props.searchQuery)
//       )
//     ];

//     switch (this.props.match.params.sort) {
//       case "companies":
//         return sortedcompanies;
//       case "company":
//         sortedcompanies = sortedcompanies.sort((a, b) => {
//           return a.company.localeCompare(b.company);
//         });
//         break;
//       case "country":
//         sortedcompanies = sortedcompanies.sort((a, b) => {
//           return a.country.localeCompare(b.country);
//         });
//         break;
//       case "id":
//         sortedcompanies = sortedcompanies.sort((a, b) => {
//           return a.client_company_id - b.client_company_id;
//         });
//         break;

//       default:
//         return sortedcompanies;
//     }
//     return sortedcompanies;
//   };

//   render() {
//     const sortedcompanies = this.sortcompanies();
//     return (
//       <div>
//         <div>
//           <div class="ui search">
//             <div class="ui large icon input">
//               <input
//                 class="prompt"
//                 type="text"
//                 placeholder="Search for a company or CID"
//                 onChange={event =>
//                   this.props.changeSearchQuery(event.target.value)
//                 }
//               />
//               <i class="search icon" />
//             </div>
//           </div>
//         </div>
//         <br />
//         <div>
//           <table className="ui celled center aligned table">
//             <thead>
//               <tr>
//                 <th>
//                   <Link to={`/companies/id`}>ID </Link>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedcompanies.map(company => {
//                 return (
//                   <tr key={company.company}>
//                     <td>{company.client_company_id} </td>
//                     <td>
//                       <Link to={`/companies/show/${company.company}`}>
//                         {company.company}
//                       </Link>
//                     </td>
//                     <td>
//                       <Link to={`/companies/show/chart/${company.country}`}>
//                         {company.country}
//                       </Link>
//                     </td>

//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
