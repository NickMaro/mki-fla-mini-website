/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontFamily: {
      header: ["Oswald", "Impact", "Franklin Gothic Bold", "sans-serif"],
      body: ["Roboto", "Franklin Gothic Medium", "Tahoma", "sans-serif"],
      funky: ["Comic Sans MS", "Comic Sans", "cursive"],
    },
    extend: {
      fontSize: {
        "6xl": "4rem",
      },

      colors: {
        accent: {
          400: "#D6F3FE",
          DEFAULT: "#00b5f6",
          600: "#00a5e0",
          700: "#0091c5",
        },
        "accent-light": {
          DEFAULT: "#d7f4ff",
          600: "#a4d7e9",
          700: "#93c2d3",
        },
        primary: {
          DEFAULT: "#fc8f49",
          600: "#eb8343",
          700: "#df7c3f",
        },
        secondary: {
          200: "#6B81AA",
          DEFAULT: "#0091ff",
          600: "#0082e6",
          700: "#0076d1",
        },
        "dark-grey": {
          700: "#384453",
          800: "#2C3846",
          900: "#273340",
          DEFAULT: "#1C242E",
        },
        dark: {
          DEFAULT: "#202020",
        },
      },
      fontSize: {
        "1xl": "1.375rem",
      },
      width: {
        42: "10.5rem",
        50: "12.5rem",
        "7/10": "70%",
      },
      height: {
        1551: "1551px",
        500: "500px",
        120: "30rem",
      },
      margin: {
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-20": "-5rem",
        "-28": "-7rem",
        "-150px": "-150px",
      },
      inset: {
        18: "70px",
        20: "5rem",
      },
      scale: {
        "-150": "-1.5",
      },
      zIndex: {
        '1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
