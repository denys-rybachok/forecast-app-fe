import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import LogOutButton from "../buttons/LogOutButton";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[70px] flex flex-col items-center py-3">
      <Logo />
      <NavBar />
      <LogOutButton />
    </aside>
  );
};

export default Sidebar;
