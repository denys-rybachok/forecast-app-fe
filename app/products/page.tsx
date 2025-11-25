import ForecastingDetails from "../components/ForecastingDetails/ForecastingDetails";
import ForecastingOverview from "../components/ForecastingOverview/ForecastingOverview";

const Page = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <ForecastingOverview />
        <div>Chart</div>
      </div>
      <ForecastingDetails />
    </div>
  );
};

export default Page;
