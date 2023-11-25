import { promises as fs } from "fs";
import ScrollingBanner from "./ScrollBanner";

export type PartnerDetails = {
  name: string
  image: string
  twitter: string
}
export type ScrollBannerProps = {
  scrollItems: PartnerDetails[];
}

export const PartnerButton = ({ name, image, twitter }: PartnerDetails) => {
  return (
    <a href={twitter} className="flex flex-row">
      <button className="font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-s-[#FFA479] text-slate-50 w-max transition-all ease-out duration-200 hover:translate-x-1">
        <div className="flex flex-row flex-grow min-w-fit items-center m-auto">
          {/* TODO: Fix the image URLs not loading, seems like CORS */}
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



const Partners = async () => {
  const localReadFile = async (filePath: string) => {
    const data = await fs.readFile(
      process.cwd() + filePath,
      "utf8"
    )
    return JSON.parse(data);
  }
  const daoists: PartnerDetails[] = await localReadFile('/app/resources/daoists.json');
  const partners: PartnerDetails[] = await localReadFile('/app/resources/partners.json');

  return (
    <div className="flex flex-col min-w-full justify-center bg-opacity-30 bg-slate-500 py-10">
      <div className="flex flex-col min-w-full justify-center">
        <h3 className="flex justify-center pb-5 text-4xl font-pixelify">
          Daoists involved
        </h3>
        <ScrollingBanner scrollItems={daoists} />
        <h3 className="flex justify-center pb-5 text-4xl font-pixelify">
          Daos represented
        </h3>
        <ScrollingBanner scrollItems={partners} />
      </div>
    </div>
  );
};
export default Partners;
