module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    //includes all the classes I want
    //to be present in the final version
    safelist: [
      /b*/,
      /t*/,
      /f*/,
      /i*/,
      /h*/,
      /m*/,
      /p*/,
      /j*/,
      /r*/,
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
