import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-10">
      <Image
        src="/logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
};

export default Logo;
