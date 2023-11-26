import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ball: "url(/ball.svg)",
        "sunrise-upper": "url(/bg_sunrise_upper.svg)",
        "sunrise-lower": "url(/bg_sunrise_lower.svg)",
        "three-wise-summoners": "url(/three_wise_summoners.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pixelized: [`var(--font-pixelized)`],
      },
    },
  },
};
export default config;
