import { motion, useAnimation } from "framer-motion";
import React from "react";

interface PartnerProps {
  items: string[];
}
const ScrollBanner = ({ items }: PartnerProps) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      x: [-100 * items.length, 0],
      transition: {
        duration: 10 * items.length,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, items.length]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div animate={controls} className="inline-block space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 inline-block"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Partners = () => {
  const daoists = ["DAOhaus", "MetaCartel", "MetaGame", "Raid Guild"];
  return (
    <div className="flex flex-col min-w-full justify-center bg-opacity-30 bg-slate-500 my-5">
      <div className="flex flex-col min-w-full justify-center m-10">
        <span className="mb-4">Powered by</span>
        <div className="space-x-4 justify-center">
          <ScrollBanner items={daoists} />
        </div>
      </div>
    </div>
  );
};
export default Partners;
