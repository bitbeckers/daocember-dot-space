import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full mb-12">
      <div className="flex flex-col mt-[14vw] 2xl:mt-[16vw]">
        <Image
          src="/logo-daocember.png"
          alt="DAOcember logo"
          width={1250}
          height={450}
        />
      </div>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold font-pixelized text-[#FFA479]">
        December <span className="whitespace-nowrap">1 - 15th</span>
      </h1>
    </div>
  );
};
export default Logo;
