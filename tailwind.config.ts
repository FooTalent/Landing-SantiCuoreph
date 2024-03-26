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
        'background1': 'url("/images/aboutme/image 28.jpg")',
        'background2': 'url("/images/aboutme/background2.jpg")',
        'background3': 'url("/images/aboutme/MAS QUE UNO BAJA-51 1.jpg")',
        
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
        formBackground: "#424242cc",
        inputBorderSelected: "#FBBF01",
        textoInput: "#292319",
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
