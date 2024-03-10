import { getMonth, getYear } from "./formateDate";

export default function groupByDate(data) {
  const groupedByYearMonth = {};
  const totalByYear = {};
  for (const items of data) {
    const { dt } = items;
    const year = getYear(dt);
    const month = getMonth(dt);
    if (!groupedByYearMonth[year]) groupedByYearMonth[year] = {};
    groupedByYearMonth[year][month] =
      (groupedByYearMonth[year][month] || 0) + items.value;
    totalByYear[year] = (totalByYear[year] || 0) + items.value;
  }
  return totalByYear;
}
