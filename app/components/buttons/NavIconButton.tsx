"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavIconButtonProps {
  icon: ReactNode;
  href: string;
}

const NavIconButton = ({ icon, href }: NavIconButtonProps) => {
  const pathname = usePathname();
  const isActive: boolean =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`h-10 w-10 flex items-center justify-center rounded-full transition
        ${
          isActive
            ? "bg-white shadow-md text-blue-600"
            : "text-black/70 hover:bg-white/20"
        }
      `}
    >
      {icon}
    </Link>
  );
};

export default NavIconButton;
