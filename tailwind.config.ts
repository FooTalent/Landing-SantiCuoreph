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
        secundario: "#FBBF01",
        principalHover: "#FCDC71",
        fondoBlanco: "#F2F2F2",
        fondoGris: "#424242",
        fondoGrisClaro:"#696863",
        sliderHover: "#969696B2",
        slider: "#555555B2",
        sliderIndicator: "#EEC54A",
        formBackground: "#7D7D7Dcc",
        inputBackground: "#424242cc",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        merriwather: ["Merriweather Sans", "serif"],
      },
      backgound: {
        contactoBackground: "url('/img/fondocontact.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
