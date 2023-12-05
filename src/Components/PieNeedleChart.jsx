

import React, { Component } from "react";
import { render } from "react-dom";

import GaugeChart from "react-gauge-chart";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <GaugeChart
          id="gauge-chart"
          nrOfLevels={3}
          colors={["#0A7E29", "#BD9500", "#B83C1D"]}
          arcWidth={0.3}
          percent={0.45}
          textColor={"green"}
          // hideText={true} // If you want to hide the text
        />
        <div className="text">
          <h3 className="pie-heading">45.06 %</h3>
          <p className="pie-para">consumed from the grid</p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
