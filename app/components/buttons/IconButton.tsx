import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
}

const IconButton = ({ src, alt }: IconButtonProps) => {
  return (
    <button className="h-[48px] w-[48px] flex items-center justify-center bg-[#0714290D] rounded-full cursor-pointer transition">
      <Image src={src} alt={alt} width={20} height={20} />
    </button>
  );
};

export default IconButton;
