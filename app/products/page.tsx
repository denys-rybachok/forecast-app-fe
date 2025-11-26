import LineChart from "../components/charts/LineChart/LineChart";
import ForecastingDetails from "../components/ForecastingDetails/ForecastingDetails";
import ForecastingOverview from "../components/ForecastingOverview/ForecastingOverview";
import { mockData } from "./mock_data";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <div className="flex flex-col gap-2 w-full md:w-2/3">
        <ForecastingOverview />
        <div className="bg-white rounded-xl p-4">
          <LineChart
            title="Inventory Coverage (90 days)"
            subtitle="Optimized inventory projections with upcoming POs"
            chartData={mockData}
          />
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <ForecastingDetails />
      </div>
    </div>
  );
};

export default Page;
