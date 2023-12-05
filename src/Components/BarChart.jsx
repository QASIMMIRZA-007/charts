import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    const options = {
        scales: {
            y: {
                beginAtZero: false, 
                min:1,
                max: 14,           
                ticks: {
                  stepSize: 2,
                   
                },
                grid: {
                    color: "#4b4949",
                  },
              },
              x: {
                grid: {
                  color: "#4b4949", 
                },
              },
             
            
        },
          
    }
    
  return <>
  <div className="bardata">
   <Bar data={chartData}  options={options}/>
   </div>
   </>

}

export default BarChart;



