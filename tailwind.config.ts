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
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      plex: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      "green-board": {
        "500": "#243831",
        "300": "#2B5F44",
        "100": "#D8E9E4",
      },
      "black-board": {
        "500": "#101828",
      },
      "gray-board": {
        "300": "#939494",
        "100": "#BBC2C0",
      },
    },
  },
  plugins: [],
};
export default config;
