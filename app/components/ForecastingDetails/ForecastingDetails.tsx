import { colorsConfigurator } from "@/app/constants/colorsConfigurator";
import SecondaryCard from "../cards/SecondaryCard";
import IconButton from "../buttons/IconButton";

const cards = [
  {
    title: "Robust Rate of Sale",
    text: "Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.",
    iconSrc: "/icons/sale.png",
    iconAlt: "Sale icon",
    iconColor: colorsConfigurator.blue,
  },
  {
    title: "Location Awareness",
    text: "Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.",
    iconSrc: "/icons/marker_pin.png",
    iconAlt: "Market pin icon",
    iconColor: colorsConfigurator.red,
  },
  {
    title: "Manual Overrides",
    text: "When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.",
    iconSrc: "/icons/settings.png",
    iconAlt: "Settings icon",
    iconColor: colorsConfigurator.green,
  },
];

const ForecastingDetails = () => {
  return (
    <div className="bg-light-grey rounded-xl py-[20px] px-[14px]">
      <p className="font-fixel font-semibold text-[18px] mb-2">
        How Forecasting Works
      </p>
      <p className="font-open-sans text-[14px] text-secondary mb-[22px]">
        The forecasting system has been streamlined to use the robust rate of
        sale method across all locations for improved consistency and
        reliability.
      </p>
      <ul className="flex flex-col gap-3">
        {cards.map((card, index) => (
          <li key={index}>
            <SecondaryCard
              title={card.title}
              text={card.text}
              icon={
                <IconButton
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  backgroundColor={card.iconColor}
                />
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastingDetails;
