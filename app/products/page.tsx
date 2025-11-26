import LineChart from "../components/charts/LineChart/LineChart";
import ForecastingDetails from "../components/ForecastingDetails/ForecastingDetails";
import ForecastingOverview from "../components/ForecastingOverview/ForecastingOverview";
import { mockData } from "./mock_data";

const Page = () => {
  return (
    <div className="flex gap-2 mb-4">
      <div className="flex flex-col gap-2">
        <ForecastingOverview />
        <div className="bg-white rounded-xl p-4">
          <LineChart
            title="Inventory Coverage (90 days)"
            subtitle="Optimized inventory projections with upcoming POs"
            chartData={mockData}
          />
        </div>
      </div>
      <ForecastingDetails />
    </div>
  );
};

export default Page;
