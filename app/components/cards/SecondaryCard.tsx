import { ReactElement } from "react";

interface MainCardProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const SecondaryCard = ({ title, text, icon }: MainCardProps) => {
  return (
    <div className="p-[18px] bg-white rounded-xl">
      {icon}
      <p className="font-fixel text-[18px] font-semibold mb-[10px] mt-[25px]">
        {title}
      </p>
      <p className="font-open-sans text-[12px] text-secondary">{text}</p>
    </div>
  );
};

export default SecondaryCard;
