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
        background1: 'url("/images/aboutme/image 28.webp")',
        background2: 'url("/images/aboutme/background2.webp")',
        background3: 'url("/images/aboutme/image 129.jpg")',
        checkBackground: 'url("/assets/img/check.svg")',
      },
      colors: {
        fondoNegro: "#292319",
        principal: "#FCCD35",
        secundario: "#FBBF01",
        principalHover: "#FCDC71",
        fondoBlanco: "#F2F2F2",
        fondoGris: "#424242",
        fondoGrisClaro: "#696863",
        sliderHover: "#969696B2",
        slider: "#555555B2",
        sliderIndicator: "#EEC54A",
        formBackground: "#42424250",
        inputBorderSelected: "#FBBF01",
        textoInput: "#292319",
        backgroundDisabled: "#FCCD3538",
        textoDisabled: "#D9D9D938",
      },
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
        merriwather: ["Merriweather Sans", "serif"],
        nunito: ["Nunito", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
