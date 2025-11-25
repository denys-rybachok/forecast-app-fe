import Image from "next/image";

interface MainCardProps {
  label: string;
  title: string;
  text: string;
  imgSrc: string;
}

const MainCard = ({ label, title, text, imgSrc }: MainCardProps) => {
  return (
    <div className="p-[20px] pl-[18px] bg-light-grey rounded-xl">
      <div className="flex items-start justify-between mb-8">
        <div className="max-w-[220px]">
          <p className="text-[14px] font-open-sans truncate">{label}</p>
          <p className="font-semibold text-[24px] font-fixel truncate">
            {title}
          </p>
        </div>
        <Image src={imgSrc} alt={`${title} icon`} width={42} height={42} />
      </div>
      <p className="max-w-[314px] text-[14px] text-secondary line-clamp-3">
        {text}
      </p>
    </div>
  );
};

export default MainCard;
