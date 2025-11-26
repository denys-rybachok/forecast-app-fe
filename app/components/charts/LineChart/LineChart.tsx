"use client";

import { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import LineChartLegend from "./LineChartLegend";
import { lineChartOptions } from "./lineChartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface LineChartProps {
  title: string;
  subtitle: string;
  chartData: ChartData<"line">;
}

export default function LineChart({
  title,
  subtitle,
  chartData,
}: LineChartProps) {
  const chartRef = useRef<ChartJS>(null);

  const legend = chartData.datasets.map((dataset) => ({
    label: dataset.label ?? "",
    color: dataset.borderColor as string,
  }));

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="font-fixel font-semibold text-[18px]">{title}</h1>
          <h2 className="font-open-sans text-[14px] text-secondary">
            {subtitle}
          </h2>
        </div>
        <LineChartLegend legend={legend} chartRef={chartRef} />
      </div>
      <Line ref={chartRef as any} data={chartData} options={lineChartOptions} />
    </div>
  );
}
