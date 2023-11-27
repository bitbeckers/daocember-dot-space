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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="w-12 h-12 rounded-full bg-white/30"
          src={image}
        />
        <span className="text-slate-50 font-semibold ml-2 mr-4">{name}</span>
      </a>
    </li>
  );
};

const PartnersList = ({ title, partners }: PartnerListProps) => {
  return (
    <section className="flex flex-col justify-center bg-opacity-30 bg-slate-500 px-2 md:px-10 py-10">
      <h1 className="text-2xl font-pixelized text-center mb-12">{title}</h1>
      <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
        {partners.map((partner, index) => (
          <PartnerListItem key={index} {...partner} />
        ))}
      </ul>
    </section>
  );
};
export default PartnersList;
