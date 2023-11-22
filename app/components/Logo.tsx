import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full mb-20">
      <div className="flex flex-col">
        <Image
          src="/daocember.svg"
          alt="DAOcember logo"
          width={750}
          height={450}
        />
      </div>
      <h1 className="text-6xl font-bold font-pixelify text-[#FFA479]">
        December 1 - 15th
      </h1>
    </div>
  );
};
export default Logo;
