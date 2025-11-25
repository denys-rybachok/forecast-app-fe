import { ReactNode } from "react";
import PageHeadingPanel from "../components/PageHeadingPanel/PageHeadingPanel";
import SecondaryButton from "../components/buttons/SecondaryButton";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeadingPanel
        title="Location-Based Forecasting"
        subtitle="Robust Rate of Sale forecasting with location-aware calculations"
        buttonsPanel={
          <div className="flex items-center gap-6">
            <SecondaryButton iconSrc="/icons/eye.png">
              View Forecast Accuracy
            </SecondaryButton>
            <PrimaryButton>Adjust Forecast Settings</PrimaryButton>
          </div>
        }
      />
      {children}
    </>
  );
}
