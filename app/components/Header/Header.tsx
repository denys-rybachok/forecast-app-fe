import IconButton from "../buttons/IconButton";
import SearchButton from "../buttons/SearchButton";
import UserAvatarButton from "../buttons/UserAvatarButton";

const Header = () => {
  return (
    <header className="h-[74px] bg-red-100 flex items-center justify-between">
      <SearchButton />
      <div className="flex items-center gap-3 pr-3">
        <IconButton src={"/icons/bell.png"} alt={"Bell icon"} />
        <IconButton src={"/icons/sun.png"} alt={"Sun icon"} />
        <UserAvatarButton />
      </div>
    </header>
  );
};

export default Header;
