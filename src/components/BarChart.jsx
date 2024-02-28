import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import s from "../style/barChart.module.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "balance",
        data: [23, 45, 12, 26, 78],
        backgroundColor: ["Blue", "Teal", "Yellow", "Red", "Orange"],
        hoverBackrgroundColor: "#5932EA",
      },
      //   {
      //     label: "sales",
      //     data: [231, 45, 112, 26, 78],
      //     backgroundColor: "#3EA1B3",
      //     hoverBackrgroundColor: "#5932EA",
      //   },
      //   {
      //     label: "range",
      //     data: [23, 45, 132, 26, 78],
      //     backgroundColor: "#3EA1B3",
      //     hoverBackrgroundColor: "#5932EA",
      //   },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: { beginAtZero: true, grid: { display: false } },
      y: { BeginAtZero: true, grid: { display: false }, display: false },
    },
  };
  return (
    <div className={`${s.barChart} ${s.chart}`}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
