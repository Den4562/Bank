import { createContext, useContext, useState } from "react";
import { fetch_config } from "./fetch_config";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [rate, setRate] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  console.log(startDate);
  console.log(endDate);

  const rateData = async (...obj) => {
    try {
      const response = await fetch(
        `${fetch_config.BASE_URL}${fetch_config.RATE_PATH}?${obj[0]}`
      );
      const data = await response.json();
      setRate(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppContext.Provider value={(rate, rateData, setStartDate, setEndDate)}>
      {children}
    </AppContext.Provider>
  );
};
