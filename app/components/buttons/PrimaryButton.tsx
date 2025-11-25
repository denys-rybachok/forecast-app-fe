import { ReactNode } from "react";
import { Button } from "@mui/material";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({
  children,
  onClick,
  className,
}: PrimaryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{ py: "11px", px: "20px", borderRadius: "24px", height: "40px" }}
      className={`!bg-main-blue text-[15px] !text-white !normal-case  text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 ${
        className || ""
      }`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
