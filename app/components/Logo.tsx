import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full mb-20">
      <div className="flex flex-col mt-[7vw]">
        <Image
          src="/logo-daocember.png"
          alt="DAOcember logo"
          width={1250}
          height={450}
        />
      </div>
      <h1 className="drop-shadow-2xl text-5xl font-bold font-pixelized text-white">
        December 1 - 15th
      </h1>
    </div>
  );
};
export default Logo;
