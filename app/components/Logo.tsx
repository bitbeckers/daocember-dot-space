import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/daocember.svg"
        alt=""
        width={450}
        height={450}
      />
    </div>
  );
};
export default Logo;
