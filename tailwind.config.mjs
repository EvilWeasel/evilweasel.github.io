import defaultTheme from "tailwindcss/defaultTheme";

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
    },
  },
  darkMode: "class",
  plugins: [],
};
