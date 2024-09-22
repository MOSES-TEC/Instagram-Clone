// TODO need to add custom classes in tailwind config

/*
    text-red-primary => hex value
    text-gray-base
    border-gray-primary
    bg-blue-medium
    text-blue-medium
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: {
          medium: "#005C98",
        },
        black: {
          light: "#262626",
          faded: "#00000059",
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
        red: {
          primary: "#ed4956",
        },
      },
    },
  },
  plugins: [],
}
