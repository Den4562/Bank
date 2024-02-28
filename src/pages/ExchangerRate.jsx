import React, { useEffect } from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import ColorChart from "../components/ColorChart";
import Calendar from "../components/Calendar";

const ExchangerRate = () => {
  const { rate, rateData } = useApp();

  const fetchRateData = async () => {
    try {
      const result = await rateData(
        "start=20200101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRateData();
  }, []);

  return (
    <div>
      <Calendar />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <BarChart />
        <ColorChart />
      </div>
    </div>
  );
};

export default ExchangerRate;
