import { promises as fs } from "fs";
import { useEffect } from "react";

type PartnerDetails = {
  name: string
  image: string
  twitter: string
}
interface BannerProps {
  partners: PartnerDetails[];
}

const PartnerButton = ({ name, image, twitter }: PartnerDetails) => {
  return (
    <a href={twitter} className="flex flex-row">
      <button className="font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-s-[#FFA479] text-slate-50 w-max transition-all ease-out duration-200 hover:translate-x-1">
        <div className="flex flex-row flex-grow min-w-fit items-center m-auto">
          // TODO: Fix the image URLs not loading, seems like CORS
          <img
            alt={''}
            className="flex w-12 h-12 rounded-full bg-white/30 bg-repeat"
            src={image}
          />
          <span className="flex ml-2 mr-4">{name}</span>
        </div>
      </button>
    </a>
  );
};

const Banner = ({ partners }: BannerProps) => {
  useEffect(() => {
    const scrollElement = document.getElementById('scrollingBanner');
    if (!scrollElement) return;
    let scrollPosition = 0;
    const scrollInterval = setInterval(() => {
      scrollPosition += 1;
      scrollElement.scrollLeft = scrollPosition;
    }, 112);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="scrollingBanner" className="p-2 grid grid-flow-col grid-rows-5 gap-4 py-4 overflow-x-scroll whitespace-nowrap">
      {partners.map((partner, index) => (
        <PartnerButton key={index}  {...partner} />
      ))}
    </section>
  );
};

const Partners = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/resources/partners.json",
    "utf8"
  );
  const daoists: PartnerDetails[] = JSON.parse(file);

  return (
    <div className="flex flex-col min-w-full justify-center bg-opacity-30 bg-slate-500 py-10">
      <div className="flex flex-col min-w-full justify-center">
        <span className="flex justify-center pb-5 text-4xl font-pixelify">
          Powered by
        </span>
          <Banner partners={daoists} />
      </div>
    </div>
  );
};
export default Partners;
