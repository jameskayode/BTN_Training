/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      "light-text-color": "#fff",
      "light-gray-1": "#fafafa",
      "second-text-color": "#737373",
      gray: "rgba(0, 0, 0, 0.5)",
      "primary-color": "#23a6f0",
      gainsboro: "#e6e6e6",
      whitesmoke: {
        "100": "#f9f9f9",
        "200": "#f6f6f6",
      },
      "text-color": "#252b42",
      "hover-color": "#2a7cc7",
      "danger-text-color": "#e74040",
    },
    spacing: {},
    fontFamily: {
      h6: "Montserrat",
    },
    borderRadius: {
      "8xs": "5px",
    },
  },
  fontSize: {
    sm: "0.88rem",
    base: "1rem",
    "5xl": "1.5rem",
    "21xl": "2.5rem",
    "39xl": "3.63rem",
    xl: "1.25rem",
    "11xl": "1.88rem",
    inherit: "inherit",
  },
},
corePlugins: {
  preflight: false,
},
  plugins: [],
}

