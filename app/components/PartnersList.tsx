import Image from "next/image";

interface PartnerListProps {
  title: string;
  partners: Partner[];
}

const PartnerListItem = ({ name, image, twitter }: Partner) => {
  return (
    <li>
      <a
        href={twitter}
        className="flex flex-row items-center rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-s-[#FFA479] transition-all ease-out duration-200 hover:translate-x-1"
      >
        <Image
          alt=""
          className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/30"
          src={image}
          height={48}
          width={48}
        />
        <span className="text-xs md:text-base text-slate-50 font-semibold ml-2 mr-4">
          {name}
        </span>
      </a>
    </li>
  );
};

const PartnersList = ({ title, partners }: PartnerListProps) => {
  return (
    <section className="flex flex-col justify-center bg-opacity-30 bg-slate-500 px-2 md:px-10 py-6 md:py-10">
      <h1 className="text-xl font-pixelized text-center mb-6 md:mb-12">
        {title}
      </h1>
      <ul className="flex flex-wrap justify-center gap-y-2 gap-x-1 md:gap-4">
        {partners.map((partner, index) => (
          <PartnerListItem key={index} {...partner} />
        ))}
      </ul>
    </section>
  );
};
export default PartnersList;
