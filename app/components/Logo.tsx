import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        src="/daocember.svg"
        alt=""
        width={450}
        height={150}
        className="w-full rounded-t-md h-72xa"
      />
    </div>
  );
};
export default Logo;
