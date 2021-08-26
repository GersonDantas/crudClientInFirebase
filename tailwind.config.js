module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    //includes all the classes I want
    //to be present in the final version
    safelist: [
      /bg-*/,
      /to-*/,
      /from-*/,
      /flex*/,
      /item-*/,
      /h-*/,
      /m-*/,
      /p-*/,
      /bg-*/,
      /text-*/,
      /justify-*/,
      /border-*/,
      /rounded-*/,
      /hover:*/,
      /focus:*/,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
