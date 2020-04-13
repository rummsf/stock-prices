import React from "react";

class ThresholdInput extends React.Component {
  state = { threshold: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter threshold</label>
            <input
              type="text"
              value={this.state.threshold}
              onChange={e => this.setState({ threshold: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ThresholdInput;
