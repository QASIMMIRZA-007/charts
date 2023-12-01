import React from 'react'
import GaugeChart from 'react-gauge-chart'; 

function GaugeCharts() {
    const gaugeData = [
        { value: 0.4, color: '#FF4500'}, 
      ];
  return (
    <>
       <div>
      <h2>Gauge Chart</h2>
      <GaugeChart id="gauge-chart1" 
      data={gaugeData}
        nrOfLevels={1} 
        arcPadding={0.1} 
        cornerRadius={3} 
     
        colors={["#FF5F6D"]} 
        arcWidth={0.3} 
        percent={0.37} 
       />
    </div>
    </>
  )
}

export default GaugeCharts
