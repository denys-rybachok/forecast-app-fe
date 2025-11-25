"use client";

import Image from "next/image";
import MuiIconButton from "@mui/material/IconButton";

interface IconButtonProps {
  src: string;
  alt: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const IconButton = ({
  src,
  alt,
  onClick,
  backgroundColor = "#dee5f0",
}: IconButtonProps) => {
  return (
    <MuiIconButton
      onClick={onClick}
      sx={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor,
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "#07142920",
        },
      }}
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </MuiIconButton>
  );
};

export default IconButton;
