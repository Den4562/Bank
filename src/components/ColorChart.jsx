import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../style/barChart.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const ColorChart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "My first pie",
        data: [12, 45, 78, 101, 56],
        backgroundColor: ["red", "blue", "green", "yellow", "tomato"],
        borderWidth: 0,
        hoverBackgroundColor: "#5932EA",
        hoverOffset: 34,
      },
    ],
  };
  const options = {};
  return (
    <div className={`${s.chart} ${s.polarChart}`}>
      <Doughnut data={data} option={options}></Doughnut>
    </div>
  );
};

export default ColorChart;
