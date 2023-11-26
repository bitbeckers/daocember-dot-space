"use client";

import React, { useEffect } from "react";

interface ScrollingBannerProps {
  children: React.ReactNode;
}

const ScrollingBanner = ({ children }: ScrollingBannerProps) => {
  useEffect(() => {
    const scrollElement = document.getElementById("scrollingBanner");
    if (!scrollElement) return;
    let scrollPosition = 0;
    const scrollInterval = setInterval(() => {
      scrollPosition += 1;
      scrollElement.scrollLeft = scrollPosition;
    }, 112);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
      id="scrollingBanner"
      className="p-2 grid grid-flow-col grid-rows-5 gap-4 py-4 overflow-x-scroll whitespace-nowrap"
    >
      {children}
    </section>
  );
};

export default ScrollingBanner;
