import { colorsConfigurator } from "../constants/colorsConfigurator";

export const mockData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Projected Inventory",
      data: [50, 55, 60, 65, 42, 28, 53, 60, 57, 62, 68, 70],
      borderColor: colorsConfigurator.darkGrey,
      fill: false,
      tension: 0.3,
    },
    {
      label: "Weekly Demand",
      data: [40, 65, 50, 55, 18, 36, 30, 28, 60, 38, 42, 45],
      borderColor: colorsConfigurator.primaryBlue,
      fill: false,
      tension: 0.3,
    },
  ],
};
