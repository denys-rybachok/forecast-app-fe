import { ChartOptions } from "chart.js";
import { lineChartTooltip } from "./lineChartTooltip";

export const lineChartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false, external: lineChartTooltip },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 5,
      hitRadius: 20,
      backgroundColor: (context: any) => context.dataset.borderColor,
      hoverBackgroundColor: (context: any) => context.dataset.borderColor,
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: "#ddd" }, ticks: { stepSize: 25 } },
  },
};
