import { ReactElement } from "react";

interface PageHeadingPanelProps {
  title: string;
  subtitle: string;
  buttonsPanel?: ReactElement;
}

const PageHeadingPanel = ({
  title,
  subtitle,
  buttonsPanel,
}: PageHeadingPanelProps) => {
  return (
    <div className="mb-[34px] flex items-center justify-between">
      <div>
        <h1 className="text-[#071429] text-[36px] font-semibold font-fixel">
          {title}
        </h1>
        <p className="font-open-sans text-[14px] text-secondary">{subtitle}</p>
      </div>
      {buttonsPanel ? buttonsPanel : null}
    </div>
  );
};

export default PageHeadingPanel;
