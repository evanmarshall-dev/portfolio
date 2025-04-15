/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // #f5f5f5
        wild_sand: "oklch(0.97 0 0)",
        // #0f1626
        ebony: "oklch(0.2 0.034 265.48)",
        // #ff533d
        sunset_orange: "oklch(0.68 0.2117 30.54)",
        // #ab987a
        sandrift: "oklch(0.69 0.0476 79.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
