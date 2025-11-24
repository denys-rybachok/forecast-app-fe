import { LogOut } from "lucide-react";

const LogOutButton = () => {
  return (
    <button className="mt-auto h-12 w-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
      <LogOut size={20} className="text-white/60" />
    </button>
  );
};

export default LogOutButton;
