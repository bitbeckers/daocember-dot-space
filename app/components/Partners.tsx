import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface PartnerProps {
  items: string[];
}
const Banner = ({ items }: PartnerProps) => {
  return (
    <div className="flex justify-center overflow-hidden whitespace-nowrap min-w-full space-x-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
        >
          {item}
        </div>
      ))}
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
          <Banner items={daoists} />
        </div>
      </div>
    </div>
  );
};
export default Partners;
