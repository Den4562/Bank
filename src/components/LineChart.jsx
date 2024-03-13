import React from "react";
import { Line } from "react-chartjs-2";
import s from "../style/barChart.module.css";
import generateRandomColor from "../utils/randomColor";
import {
  Chart as ChartJS,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, Tooltip, Legend, PointElement);
const LineChart = ({ propsData }) => {
  console.log({ propsData });
  const data = {
    // labels: Object.keys(propsData && propsData[Object.keys(propsData)[0]]) || [
    //   1, 2, 3, 4, 5,
    // ],
    labels: [1, 2, 3, 4, 5],
    datasets: Object.keys(propsData).map((item) => {
      if (propsData[item]) {
        return {
          label: item,
          data: Object.values(propsData[item]),
          borderColor: generateRandomColor(),
          backgroundColor: generateRandomColor(),
        };
      }
      console.log(Object.values(propsData[item]));
      return null;
    }),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", display: false },
      title: { display: true, text: "Chart.js Line Chart" },
    },
  };
  return (
    <div className={`${s.chart} ${s.lineChart}`}>
      <Line data={data} options={options}></Line>{" "}
    </div>
  );
};

export default LineChart;
