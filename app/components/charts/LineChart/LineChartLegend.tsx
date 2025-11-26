import { useState } from "react";

type LegendItem = {
  label: string;
  color: string;
};

interface LineChartLegendProps {
  legend: LegendItem[];
  chartRef: any;
}

const LineChartLegend = ({ legend, chartRef }: LineChartLegendProps) => {
  const [visible, setVisible] = useState(() => legend.map(() => true));

  const toggleDataset = (index: number) => {
    const chart = chartRef.current;
    if (!chart) return;
    const newVisibility = [...visible];
    newVisibility[index] = !newVisibility[index];
    setVisible(newVisibility);
    chart.setDatasetVisibility(index, newVisibility[index]);
    chart.update();
  };

  return (
    <div className="flex items-center gap-4">
      {legend.map((item, index) => (
        <button
          key={item.label}
          onClick={() => toggleDataset(index)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className="w-[10px] h-1 rounded-full"
            style={{
              backgroundColor: visible[index] ? item.color : item.color + "40",
            }}
          ></div>
          <span
            className="text-[14px]"
            style={{
              opacity: visible[index] ? 1 : 0.4,
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LineChartLegend;
