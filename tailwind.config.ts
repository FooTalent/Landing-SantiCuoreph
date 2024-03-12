import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fondoNegro: "#292319",
        principal: "#FCCD35",
        principalHover: "#FBBF01",
        fondoBlanco: "#F2F2F2",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        merriwather: ["Merriweather Sans", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
