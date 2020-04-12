import React from "react";
import { Scatter } from "react-chartjs-2";

const ExchangeChart = props => {
  const chosenCountryCities = props.cities.filter(
    city => city.country === props.match.params.country
  );

  let chartData = {
    labels: chosenCountryCities.map(city => city.city),
    datasets: [
      {
        data: chosenCountryCities.map(city => city.all_structures),
        label: "percentage change of price",
        backgroundColor: "blue",
        hoverBorderWidth: 2,
        hoverBorderColor: "grey",
        defaultFontSize: 22
      }
    ]
  };

  return (
    <div className="chart">
      LSE Percentage Change
      <Scatter data={chartData} options={{}} />
    </div>
  );
};

export default ExchangeChart;
