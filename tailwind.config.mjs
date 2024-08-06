import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MonaspaceArgon", ...defaultTheme.fontFamily.sans],
        serif: ["MonaspaceXenon", ...defaultTheme.fontFamily.serif],
        mono: ["MonaspaceKrypton", ...defaultTheme.fontFamily.mono],
        written: ["MonaspaceRadon", ...defaultTheme.fontFamily.sans],
        neon: ["MonaspaceNeon", ...defaultTheme.fontFamily.sans],
      },
      // text shadow
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
        lg: "8px 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
