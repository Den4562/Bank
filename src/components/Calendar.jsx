import { DatePicker, Space } from "antd";
import React from "react";
import { useApp } from "../utils/context";
const { RangePicker } = DatePicker;
const Calendar = () => {
  const { setStartDate, setEndDate } = useApp();

  function handleGetDate(e) {
    console.dir(e);
  }
  return (
    <div>
      <Space direction="vertical" size={12} style={{ marginBottom: "25px" }}>
        <RangePicker
          onFocus={(_, info) => {
            console.log("Focus:", info.range);
          }}
          onBlur={(_, info) => {
            console.log("Blur:", info.range);
          }}
          onChange={handleGetDate}
        />
      </Space>
    </div>
  );
};

export default Calendar;
