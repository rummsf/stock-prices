import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import ThresholdInput from "./ThresholdInput";

class ExchangeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      thresholdUpper: 250,
      thresholdLower: -100
    };
  }

  createChartData = props => {
    const companiesKeyValueArray = Object.entries(this.props.lseCompanies);
    let realDataObjects = [];
    companiesKeyValueArray.map(([key, value]) => {
      if (
        value.quarterly_percentage_change !== 0 &&
        value.quarterly_percentage_change <= this.state.thresholdUpper &&
        value.quarterly_percentage_change > this.state.thresholdLower
      ) {
        let dataObject = {
          x: value.name,
          y: Math.round(value.quarterly_percentage_change * 100) / 100
        };
        realDataObjects.push(dataObject);
      }
    });
    return realDataObjects;
  };

  setChartData = props => {
    const createdChartData = this.createChartData();
    this.setState({ chartData: createdChartData() });
  };

  onThresholdSubmit = (thresholdLower, thresholdUpper) => {
    this.setState({
      thresholdUpper: thresholdUpper,
      thresholdLower: thresholdLower
    });
    console.log(this.state.thresholdLower);
  };

  onChangeUpper = event => {
    this.setState({ thresholdUpper: event.target.value });
  };

  onChangeLower = event => {
    this.setState({ thresholdLower: event.target.value });
  };

  render() {
    const data = this.createChartData();
    return (
      <div>
        <div>
          <ScatterChart
            width={1400}
            height={570}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="x" name="Company Name" />
            <YAxis
              type="number"
              dataKey="y"
              name="Quarterly Price Change"
              unit="%"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter
              name="LSE Exchange"
              data={data}
              strokeWidth={0.1}
              fill="#8884d8"
            />
          </ScatterChart>
        </div>
        <ThresholdInput
          onThresholdSubmit={this.onThresholdSubmit}
          thresholdUpper={this.state.thresholdUpper}
          thresholdLower={this.state.thresholdLower}
          onChangeLower={this.onChangeLower}
          onChangeUpper={this.onChangeUpper}
        />
      </div>
    );
  }
}

// const chosenCountryCities = props.lseCompanies.filter(
//   city => city.country === props.match.params.country
// );

export default ExchangeChart;
