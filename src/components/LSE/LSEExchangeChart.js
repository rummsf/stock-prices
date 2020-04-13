import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const ExchangeChart = props => {
  const companiesKeyValueArray = Object.entries(props.lseCompanies);
  const realDataObjects = [];

  companiesKeyValueArray.map(([key, value]) => {
    if (
      value.quarterly_percentage_change !== 0 &&
      value.quarterly_percentage_change <= 1000
      // ? value.quarterly_percentage_change
      // : 1000
    ) {
      let dataObject = {
        x: value.name,
        y: value.quarterly_percentage_change
        // y: Number.parseFloat(value.quarterly_percentage_change).toFixed(3)
      };
      realDataObjects.push(dataObject);
    }
  });

  return (
    <ScatterChart
      width={1400}
      height={1000}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="x" name="Company Name" />
      <YAxis type="number" dataKey="y" name="Quarterly Price Change" unit="%" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter
        name="LSE Exchange"
        data={realDataObjects}
        strokeWidth={0.1}
        fill="#8884d8"
      />
    </ScatterChart>
  );
};

// const chosenCountryCities = props.lseCompanies.filter(
//   city => city.country === props.match.params.country
// );

// let chartData = {
//   labels: ["Scatter"],
// Object.entries(companies).map(([key, value]) => value.name),
//
// };

// return (
//   <div className="chart">
//     LSE Percentage Change
//     {/* <Scatter data={chartData} options={{}} /> */}
//   </div>
// );

export default ExchangeChart;
