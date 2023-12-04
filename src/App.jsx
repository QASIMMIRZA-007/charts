import React, { useState } from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import { UserData, energyData } from "./Components/Data";
import PieNeedleChart from "./Components/PieNeedleChart";
import SecChart from "./Components/SecChart";
import SecblueChart from "./Components/SecblueChart";
import About from "./Components/About";

// import GaugeCharts from "./Components/GaugeCharts";

function App() {
  const [solarData, setSolarData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Solar Production",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "#764A0C",
        borderRadius: 3,
      },
    ],
  });

  const [energyChartData, setEnergyChartData] = useState({
    labels: energyData.map((data) => data.year),
    datasets: [
      {
        label: "Energy Production",
        data: energyData.map((data) => data.userGain),
        backgroundColor: "#764A0C",
        borderRadius: 3,
      },
    ],
  });

  return (
    <div className="App">
      <div className="main-container">
        <div className="left">
          <div className="container">
            <h3>Energy </h3>
            <div style={{ width: 864 , height: 482 }}>
              <BarChart chartData={energyChartData} />
            </div>
          </div>
          <div className="container">
            <h3>Solar Production</h3>
            <div style={{ width: 864 , height: 482 }}>
              <BarChart chartData={solarData} />
            </div>
          </div>
        </div>
      <div className="right">
          <div className="sidebar">
            <div className="sidebar-flex">
              <PieNeedleChart />
              <SecChart />
              <SecblueChart />
            </div>
          </div>
        </div>
      </div>

      {/* <GaugeCharts/> */}
      {/* <About/> */}
    </div>
  );
}

export default App;
