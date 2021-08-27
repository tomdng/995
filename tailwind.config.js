const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      accent: "#ff3f3f",
      black: colors.black,
      white: colors.white,
      gray: {
        dark: "#252525",
        DEFAULT: "#a0a0a0",
        light: "#d8d8d8",
        lightest: "#878787",
      },
    },
  },
}
