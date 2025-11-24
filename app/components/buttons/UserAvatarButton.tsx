import Image from "next/image";

const UserAvatarButton = () => {
  return (
    <Image src={"/icons/user.png"} alt={"User avatar"} width={48} height={48} />
  );
};

export default UserAvatarButton;
