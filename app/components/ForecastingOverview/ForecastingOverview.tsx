import MainCard from "../cards/MainCard";

const cards = [
  {
    label: "Forecasting Method",
    title: "ROBUST_ROS",
    text: "A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.",
    imgSrc: "/icons/forecasting_method.png",
  },
  {
    label: "Location Support",
    title: "Multi-Location",
    text: "Each location is forecasted independently to prevent overstock and align supply with demand.",
    imgSrc: "/icons/location_support.png",
  },
  {
    label: "Override Support",
    title: "Available",
    text: "Manual edits can be applied per SKU to adjust forecasts when deviations occur, ensuring more accurate and responsive inventory planning.",
    imgSrc: "/icons/override_support.png",
  },
];

const ForecastingOverview = () => {
  return (
    <ul className="flex items-center gap-2">
      {cards.map((card, index) => (
        <li key={index}>
          <MainCard
            key={index}
            label={card.label}
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
          />
        </li>
      ))}
    </ul>
  );
};

export default ForecastingOverview;
