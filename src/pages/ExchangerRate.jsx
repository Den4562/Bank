import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import ColorChart from "../components/ColorChart";
import Calendar from "../components/Calendar";
import groupByDate from "../utils/groupByDate";
import groupByCategory from "../utils/groupByCategory";
import LineChart from "../components/LineChart";
import groupByCategoryYear from "../utils/groupByCategoryYear";
const ExchangerRate = () => {
  const { balance } = useApp();
  console.log(balance);

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
        <BarChart propsData={groupByDate(balance)} />
        <ColorChart propsData={groupByCategory(balance)} />
      </div>
      <LineChart propsData={groupByCategoryYear(balance)} />
    </div>
  );
};

export default ExchangerRate;
