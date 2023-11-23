import React, { useEffect, useState } from "react";
import { promises as fs } from "fs";

interface PartnerProps {
  items: { Name: string; Image: string; Twitter: string }[];
}

const PartnerButton = ({
  content,
  children,
}: {
  content: { Name: string; Image: string; Twitter: string };
  children?: React.ReactNode;
}) => {
  return (
    <a href={content.Twitter} className="flex flex-row">
      <button className="font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-row flex-grow  min-w-fit items-center m-auto">
          <img
            alt=""
            className="flex w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
            src={content.Image}
          />
          <span className="flex ml-2 mr-4">{content.Name}</span>
        </div>
      </button>
    </a>
  );
};
const Banner = ({ items }: PartnerProps) => {
  return (
    <div className="flex flex-wrap justify-center min-w-full space-x-4 space-y-4">
      {items.map((item, index) => (
        <PartnerButton key={index} content={item} />
      ))}
    </div>
  );
};

const Partners = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/resources/partners.json",
    "utf8"
  );
  const daoists = JSON.parse(file);

  return (
    <div className="flex flex-col min-w-full justify-center bg-opacity-30 bg-slate-500 py-10">
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
