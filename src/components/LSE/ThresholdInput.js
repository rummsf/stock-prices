import React from "react";

class ThresholdInput extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onThresholdSubmit(
      this.props.thresholdUpper,
      this.props.thresholdLower
    );
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}>
          <div class="ui labeled input">
            <div class="ui label label">Upper threshold</div>
            <input
              type="number"
              value={this.props.thresholdUpper}
              onChange={event => this.props.onChangeUpper(event)}
            />
            <div class="ui basic label label">%</div>
          </div>
          <div class="ui labeled input">
            <div class="ui label label">Lower threshold</div>>
            <input
              type="number"
              value={this.props.thresholdLower}
              onChange={event => this.props.onChangeLower(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ThresholdInput;
