const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      accent: "#ff3f3f",
      black: colors.black,
      darkGrey: "#252525",
      grey: "#a0a0a0",
      white: colors.white,
    },
  },
}
