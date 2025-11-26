import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-[50px] w-[50px] rounded-full bg-white/10 flex items-center justify-center mb-[120px]">
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
