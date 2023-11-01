"use client";
import dynamic from "next/dynamic";

const BallGridWithNoSsr = dynamic(() => import("./ballGrid"), {
  ssr: false,
});

export default BallGridWithNoSsr;
