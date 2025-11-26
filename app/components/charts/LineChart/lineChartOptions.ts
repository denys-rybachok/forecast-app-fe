import { ChartOptions } from "chart.js";
import { lineChartTooltip } from "./lineChartTooltip";

export const lineChartOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false, external: lineChartTooltip },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: "#ddd" }, ticks: { stepSize: 25 } },
  },
};
