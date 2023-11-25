'use client'
import { useState } from "react";
import { PartnerButton, PartnerDetails, ScrollBannerProps } from "./Partners";

const ScrollingBanner = ({ scrollItems }: ScrollBannerProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const createRows = (items: PartnerDetails[]) => {
    const rows = 4
    const splitLength = Math.ceil(items.length / rows);
    const splitItems = [];
    for (let i = 0; i < rows; i++) {
      splitItems.push(items.slice(i * splitLength, (i + 1) * splitLength));
    }
    return splitItems;
  }

  const scrollItemsAsRows: PartnerDetails[][] = createRows(scrollItems)


  return (
    <section id="scrollingBanner" className={`p-2 flex flex-col gap-4 py-4 overflow-x-hidden max-w-full`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {scrollItemsAsRows.map((row, rowIndex) => (
        <div className={`flex gap-4 w-full ${isHovering ? 'pause-animation' : 'scroll-animation'}`} key={rowIndex}>
        {row.map((item, index) => (
            <PartnerButton key={index} {...item} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ScrollingBanner;