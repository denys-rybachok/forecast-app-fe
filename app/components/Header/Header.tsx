import IconButton from "../buttons/IconButton";
import SearchButton from "../buttons/SearchButton";
import UserAvatarButton from "../buttons/UserAvatarButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-[70px] right-0 h-[74px] flex items-center justify-between px-4 bg-main-grey z-10">
      <SearchButton />
      <div className="flex items-center gap-3">
        <IconButton src={"/icons/bell.png"} alt={"Bell icon"} />
        <IconButton src={"/icons/sun.png"} alt={"Sun icon"} />
        <UserAvatarButton />
      </div>
    </header>
  );
};

export default Header;
