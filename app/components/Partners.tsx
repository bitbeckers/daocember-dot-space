import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface PartnerProps {
  items: string[];
}
const ScrollBanner = ({ items }: PartnerProps) => {
  const controls = useAnimation();
  const doubledItems = [...items, ...items]; // duplicate the items
  const [screenWidth, setScreenWidth] = useState(0);
  const estimatedItemWidth = 100; // adjust this value as needed
  const totalItemsWidth = estimatedItemWidth * doubledItems.length;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const totalWidth = screenWidth + totalItemsWidth;
    const duration = totalWidth / 100; // adjust this value as needed
    controls.start({
      x: [-totalItemsWidth, screenWidth],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0,
      },
    });
  }, [controls, screenWidth, totalItemsWidth]);

  return (
    <div className="overflow-hidden whitespace-nowrap min-w-full">
      <motion.div animate={controls} className="inline-block space-x-10">
        {doubledItems.map((item, index) => (
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
    <div className="flex flex-col min-w-full justify-center bg-opacity-30 bg-slate-500 my-10">
      <div className="flex flex-col min-w-full justify-center my-10">
        <span className="flex justify-center mb-4 text-4xl font-pixelify">
          Powered by
        </span>
        <div className="space-x-4 justify-center">
          <ScrollBanner items={daoists} />
        </div>
      </div>
    </div>
  );
};
export default Partners;
