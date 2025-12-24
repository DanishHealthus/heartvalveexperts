import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        basic: ["Basic", "sans-serif"],
      },
    },
  },
  plugins: [
  require("tailwind-scrollbar-hide")
]
};

export default config;
