import { Home, Package2, MapPin, ShoppingCart, Shuffle } from "lucide-react";
import NavIconButton from "../buttons/NavIconButton";
import { routes } from "@/app/constants/routes";

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-4 bg-[#0714290D] rounded-full py-4 px-2 items-center w-12">
      <NavIconButton icon={<Home size={18} />} href="/home" />
      <NavIconButton
        icon={<Package2 size={18} />}
        href={`/${routes.products}`}
      />
      <NavIconButton icon={<MapPin size={18} />} href="/locations" />
      <NavIconButton icon={<ShoppingCart size={18} />} href="/cart" />
      <NavIconButton icon={<Shuffle size={18} />} href="/flow" />
    </nav>
  );
};

export default NavBar;
