"use client";

import { useState } from "react";
import IconButton from "./IconButton";
import InputBase from "@mui/material/InputBase";

const SearchButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <IconButton
        src="/icons/search.png"
        alt="Search icon"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <InputBase
          autoFocus
          placeholder="Search..."
          sx={{
            border: "1px solid #ccc",
            borderRadius: "20px",
            padding: "4px 12px",
            width: "180px",
            height: "36px",
            transition: "0.2s",
            fontSize: "14px",
          }}
        />
      )}
    </div>
  );
};

export default SearchButton;
