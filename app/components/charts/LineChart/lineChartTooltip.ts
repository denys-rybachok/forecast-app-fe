import { Chart, TooltipModel } from "chart.js";

type LineTooltipContext = {
  chart: Chart<"line">;
  tooltip: TooltipModel<"line">;
};

export const lineChartTooltip = ({ chart, tooltip }: LineTooltipContext) => {
  let tooltipEl = document.getElementById(
    "chart-tooltip"
  ) as HTMLDivElement | null;

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chart-tooltip";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.opacity = "0";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.backgroundColor = "#ffffff";
    tooltipEl.style.borderRadius = "4px";
    tooltipEl.style.padding = "12px";
    tooltipEl.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.1)";
    tooltipEl.style.fontSize = "14px";
    tooltipEl.style.border = "1px solid #e0e0e0";
    document.body.appendChild(tooltipEl);
  }

  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  const point = tooltip.dataPoints?.[0];
  if (!point) return;

  const index = point.dataIndex;
  const label = chart.data.labels?.[index];

  const itemsHtml = chart.data.datasets
    .map((ds, i) => {
      const rawValue = ds.data[index];
      const color = (ds.borderColor as string) ?? "#000";
      return `
        <div>
          <span style="
                display: inline-block;
                width: 8px;
                height: 8px;
                margin-bottom: 1px;
                background-color: ${color};
                border-radius: 50%;
              ">
          </span>
          <span style="
              color: #071429;
              font-family: 'Open Sans';
              font-size: 15px;
              font-weight: 600;
            ">
            ${rawValue} ${
        ds.label?.toLowerCase().includes("inventory") ? "units" : ""
      }
          </span><br>
          <span style="color: #07142980; font-family: 'Open Sans'; font-size: 14px;">
            ${ds.label}
          </span>
        </div>
      `;
    })
    .join("");

  tooltipEl.innerHTML = `
    <div>
      <p style="
        color: #07142980;
        font-size: 14px;
        font-family: 'Open Sans';
        margin-bottom: 12px;
      ">
        ${label}
      </p>
      <div style="display: flex; gap: 16px; margin-bottom: 12px;">
        ${itemsHtml}
      </div>
      <div style="
        width: 100%;
        height: 1px;
        background-color: #E5E7EB;
        margin: 8px 0 10px 0;
      "></div>
      <span style="color: #07142980; font-family: 'Open Sans'; font-size: 14px;">
        PO Arrival - Nov 15 (+120)
      </span>
    </div>
  `;

  const canvasRect = chart.canvas.getBoundingClientRect();
  tooltipEl.style.opacity = "1";
  tooltipEl.style.left =
    canvasRect.left + window.scrollX + tooltip.caretX + "px";
  tooltipEl.style.top = canvasRect.top + window.scrollY + tooltip.caretY + "px";
};
