/** @type {import('tailwindcss').Config} */
module.exports= {
  purge: {
    enabled: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  },
  theme: {
    extend: {
      colors: {
        "light-text-color": "#fff",
        "light-gray-1": "#fafafa",
        "second-text-color": "#737373",
        "primary-color": "#23a6f0",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#e6e6e6",
          "300": "#ddd",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f3f3f3",
          "300": "#e9e9e9",
        },
        "text-color": "#252b42",
        "muted-color": "#bdbdbd",
        "secondary-color-1": "#23856d",
        "alert-color": "#e77c40",
        "light-gray-2": "#ececec",
        gray: "rgba(33, 33, 33, 0.25)",
      },
      spacing: {},
      fontFamily: {
        h6: "Montserrat",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        "6xs-7": "6.7px",
        "18xl": "37px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

