import { ReactNode } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
}

const SecondaryButton = ({
  children,
  onClick,
  className,
  iconSrc,
  iconAlt,
}: SecondaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disableElevation
      className={`
        text-main-blue 
        font-medium 
        text-[15px] 
        !normal-case 
        active:bg-transparent 
        flex items-center gap-2
        ${className || ""}
      `}
    >
      {iconSrc && (
        <Image src={iconSrc} alt={iconAlt || "icon"} width={18} height={18} />
      )}
      {children}
    </Button>
  );
};

export default SecondaryButton;
