import {
  Home,
  Package,
  MapPin,
  ShoppingCart,
  ArrowUpDown,
  Receipt,
} from "lucide-react";
import NavIconButton from "../buttons/NavIconButton";
import { routes } from "@/app/constants/routes";

const NavBar = () => {
  return (
    <nav className="flex flex-col bg-[#0714290D] rounded-full p-[2px] items-center">
      <NavIconButton icon={<Home size={20} />} href={`/${routes.home}`} />
      <NavIconButton
        icon={<Package size={20} />}
        href={`/${routes.products}`}
      />
      <NavIconButton
        icon={<MapPin size={20} />}
        href={`/${routes.locations}`}
      />
      <NavIconButton
        icon={<ShoppingCart size={20} />}
        href={`/${routes.cart}`}
      />
      <NavIconButton
        icon={<ArrowUpDown size={20} />}
        href={`/${routes.order}`}
      />
      <NavIconButton icon={<Receipt size={20} />} href={`/${routes.receipt}`} />
    </nav>
  );
};

export default NavBar;
