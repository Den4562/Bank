import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import ColorChart from "../components/ColorChart";
import Calendar from "../components/Calendar";

const ExchangerRate = () => {
  const { rate, rateData } = useApp();

  const currentRate = Array.isArray(rate)
    ? rate.filter((obj) => {
        const date = new Date(obj.date * 1000);
        console.log(date);
        return date.getFullYear() === 2024;
      })
    : [];

  console.log(currentRate);

  useEffect(() => {
    const getBalanceData = async () => {
      try {
        const result = await rateData(
          "start=20200101&end=20240217&valcode=usd&sort=exchange"
        );
      } catch (error) {
        console.error(error);
      }
    };
    getBalanceData();
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
